const swaggerUi = require("swagger-ui-express");

const swaggerJsDoc = require("swagger-jsdoc");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CNAB",
      description: "Documentação CNAB",
      contact: {
        name: "Marcos Santos",
      },
      servers: ["http://localhost:3333/documentation"],
    },
    basePath: "/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./config/Routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
