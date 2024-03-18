import express from "express";
import db from './config/db.mjs';
import config from "./config/index.mjs";
import AuthRoutes from './routes/AuthRoutes.mjs'



const app = express();

app.use(express.json());

db(config.MONGO_URI, app);

//routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use("/api/auth", userRoutes);


// Start the server
app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});