import express from "express";

const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json());

app.get("/api/home", () => {
  console.log("hello from home page");
});

app.listen(PORT, () => {
  console.log(`server is runing on port: ${PORT}`);
});
