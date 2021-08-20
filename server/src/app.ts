import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import AnlassgebundenesfreigebaeckRoutes from "./routes/anlassgebundenesfreigebaeck.routes";
import backwarenEntschluesselungsModul from "./support/backwarenverschluesselung";
import CakeDB from "./cakedb";

export default async function () {
  const app = express();
  const cakeDB = new CakeDB();
  const router = express.Router();

  dotenv.config({
    path: "./config/config.env",
  });

  app.use(morgan("combined"));
  await cakeDB.connectDB();
  app.use(express.json());
  app.use(backwarenEntschluesselungsModul);
  app.use(cors());
  AnlassgebundenesfreigebaeckRoutes(app);
  return app;
}
