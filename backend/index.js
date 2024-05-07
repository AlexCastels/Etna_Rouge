import fs from "node:fs/promises";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/products", async (req, res) => {
  try {
    const productsData = await fs.readFile("./data/products.json", "utf8");

    const products = JSON.parse(productsData);

    res.json(products);
  } catch (error) {
    console.error("Errore durante il recupero dei prodotti:", error);

    res.status(500).json({ error: "Errore durante il recupero dei prodotti" });
  }
});



app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});
