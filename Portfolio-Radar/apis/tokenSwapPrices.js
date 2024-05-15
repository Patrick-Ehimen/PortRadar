import express from "express";
import Moralis from "moralis";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/tokenPrice", async (req, res) => {
  const { query } = req;

  const responseOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne,
  });

  const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo,
  });

  console.log(responseOne.raw);
  console.log(responseTwo.raw);

  const usdPrices = {
    tokenOne: responseOne.raw.usdPrice,
    tokenTwo: responseTwo.raw.usdPrice,
    ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
  };

  return res.status(200).json({ usdPrices });
});

Moralis.start({
  //   serverUrl: process.env.MORALIS_SERVER_URL,
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk2YjcyNWVlLWRlOTUtNDFlYi1iYmVlLWJjYTNlYzdiYmFjOCIsIm9yZ0lkIjoiMzg3NjIyIiwidXNlcklkIjoiMzk4Mjg5IiwidHlwZUlkIjoiZGQxZWUxOWUtOWE1ZS00ZGQwLWI2ZTEtMzM2ZTNiNGQ3ODBhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTI5MTA2MzYsImV4cCI6NDg2ODY3MDYzNn0.XAFqoMSR-37HglrQllKc0TRsfzG7SyLDPln11zURQ9w",
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
