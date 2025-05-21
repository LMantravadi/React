require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { sequelize } = require("../src/models");
const propertyRoutes = require("../src/routes/propertyRoutes");

const appServer = express();
const PORT = process.env.PORT || 4000;

appServer.use(cors());
appServer.use(express.json());

appServer.get("/", (request, response) => {
  response.status(201).send("HOA Management Backend is running!");
});

appServer.use("/api/properties", propertyRoutes);

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .then(() => sequelize.sync())
  .then(() => console.log("Models synced"))
  .then(() => {
    appServer.listen(PORT, () =>
      console.log(`server listening on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("Failed to start", err));
