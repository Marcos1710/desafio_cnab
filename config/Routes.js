module.exports = app => {

  /**
   * @swagger
   *
   *  tags:
   *    - name: Registro de arquivos
   *      description: Documentação para autenticação do usuário e para cadastro e leitura dos arquivos
   */
  
    app.route('/create/users')
      .post(app.controllers.Users.store)

  /**
   * @swagger
   *
   *  /session:
   *    post:
   *      description: Endpoint para autenticação do usuário
   *      produces:
   *        - application/json
   *      tags:
   *        - Authenticate
   *      parameters:
   *        - name: email
   *          in: formData
   *          description: E-mail do usuário
   *          required: true
   *          type: string
   *        - name: password
   *          in: formData
   *          description: Senha do usuário
   *          required: true
   *          type: string
   *      responses:
   *        200:
   *          description: informações corretas, login realizado
   *        400:
   *          description: Falta enviar parametros (email, senha) na requisição
   *        401:
   *          description: Email ou Senha incorreta, não autorizado
   *        500:
   *          description: Erro ao fazer login
   *
   */
  
    app.route('/session')
      .post(app.controllers.Users.index)

  /**
   * @swagger
   *
   *  /cnabs:
   *    get:
   *      description: Endpoint para buscar os arquivos já cadastrados no banco de dados
   *      produces:
   *        - application/json
   *      tags:
   *        - CNAB
   *      responses:
   *        200:
   *          description: Array com dados da tabela cnabs 
   */

    app.route('/cnabs')
      .get(app.controllers.Cnab.index)

  /**
   * @swagger
   *
   *  /cnab:
   *    get:
   *      description: Endpoint para confirmar a leitura do arquivo enviado, para ser salvo no banco de dados
   *      produces:
   *        - application/json
   *      tags:
   *        - CNAB
   *      responses:
   *        200:
   *          description: Dados do arquivos salvos no banco de dados, e arquivo deletado do diretório com sucesso.
   *        400:
   *          description: Arquivo vazio
   *        404:
   *          description: Arquivo não encontrado
   *        500:
   *          description: Ocorreu algum problema ao salvar os dados do arquivo
   */

  /**
   * @swagger
   *
   *  /cnab:
   *    post:
   *      description: Endpoint para enviar um novo arquivo para o backend, e salvar na pasta temporária "cnabs"
   *      produces:
   *        - application/json
   *      tags:
   *        - CNAB
   *      responses:
   *        200:
   *          description: Arquivo salvo com sucesso
   */

    app.route('/cnab')
      .get(app.controllers.Cnab.show)
      .post(app.controllers.Cnab.store)
  }