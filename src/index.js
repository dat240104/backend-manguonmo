import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// KẾT NỐI DATABASE TRONG DOCKER

app.get("/manguonmo", (req, res) => {
    res.status(200).json("Đạt D22TH08");
});



const PORT = 8080;
app.listen(PORT, () => console.log("Server listening on", PORT));