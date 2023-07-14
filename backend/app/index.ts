import express from "express";

const app = express();

app.get("/", (_, response) => {
  response.end("Hello, World!");
});

export default app; 