import env from "dotenv";
import "express-async-errors";
import express from "express";
import authRouter from "./routes/auth.js";
import jobsRouter from "./routes/jobs.js";

const app = express();
env.config();

// error handler
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json());
// extra packages
import connectDB from "./db/connect.js";
import authUser from "./middleware/authentication.js";

// // routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
