import express from "express";
import ApiRouter from "./routes";
const app = express();

app.use(express.json());

app.use("/api", ApiRouter);

const server = app.listen(8080, () => {
  console.log("Server launched", process.pid);
});

process.on("SIGTERM", () => {
  server.close(() => {
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  server.close(() => {
    process.exit(0);
  });
});
