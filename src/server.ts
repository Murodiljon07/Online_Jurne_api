import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRouter from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlayapti`);
});
