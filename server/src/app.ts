import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import AnlassgebundenesfreigebaeckRoutes from "./routes/anlassgebundenesfreigebaeck.routes";
import backwarenEntschluesselungsModul from "./support/backwarenverschluesselung";
import CakeDB from "cakedb.js";

export default async function (cakeDB: CakeDB) {
  const app = express();
  const router = express.Router();

  dotenv.config({
    path: "./config/config.env",
  });

  app.use(morgan("combined"));
  console.log('Try to connect to the database...');
  await cakeDB.connectDB();
  console.log('Called connectDB()');
  app.use(express.json());
  app.use(backwarenEntschluesselungsModul);
  app.use(cors());
  AnlassgebundenesfreigebaeckRoutes(app);
  return app;
}
