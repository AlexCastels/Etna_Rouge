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

/* app.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id; 

    const productsData = await fs.readFile("./data/products.json", "utf8");

    const products = JSON.parse(productsData);

    const product = products.find(product => product.id === productId);

    if (!product) {

      return res.status(404).json({ error: "Prodotto non trovato" });
    }

    res.json(product);
  } catch (error) {
    console.error("Errore durante il recupero del prodotto:", error);

    res.status(500).json({ error: "Errore durante il recupero del prodotto" });
  }
});
 */



app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});

// Per avviare il server scrivere "nodemon index.js"
