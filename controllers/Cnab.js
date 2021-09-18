const fs = require('fs');

 // link do desafio: https://github.com/ByCodersTec/desafio-dev

module.exports = app => {
	const store =  (req, res) => {
		const { filename } = req.query
			
		req.pipe(fs.createWriteStream(`cnabs/${filename}`)).on('finish', () => {
			res.status(200).json(`cnabs/${filename}`);
		});
	}

	const index = async (req, res) => {
		let rows = await app.db('cnabs')
    		.select('*')
    
		res.status(200).json(rows);
	}

	const show = (req, res) => {
		const regex = /[0-9]/;

		try {
			const { file } = req.query

			if (!fs.existsSync(file)) return res.status(404).json("Arquivo não encontrado")
			
			const lines = fs.readFileSync(file).toString().split("\n");

			if (lines.length === 0) return res.status(400).json("Arquivo vazio")

			return Promise.all(
			lines.map(async el => {
				let type
				let date
				let value
				let cpf
				let card
				let hour
				let owner
				let store

				if (regex.test(el) && el.length > 65) {
					type = el.substring(0, 1)
					date = el.substring(1, 9)
					value = el.substring(9, 19)
					cpf = el.substring(19, 30)
					card = el.substring(30, 42)
					hour = el.substring(42, 48)
					owner = el.substring(48, 62)
					store = el.substring(62, 81)
					
					await app.db('cnabs').insert({
						type,
						date,
						value, 
						cpf, 
						card, 
						hour, 
						owner, 
						store
					})
				}
			}))
			.then(() => {
				fs.unlinkSync(file)
				return res.status(200).json({ message: 'Arquivo salvo com sucesso' })
			})
			.catch(() => 
				
				res.status(500).json({ message: 'Erro ao salvar o arquivo' })
		)

		} catch (e) {
			res.status(500).json({ message: e })
		}
	}

	return {
		store,
		show,
		index
	}
}