import express from 'express';
import connectDB from './mongodb/connect.js';
import * as dotenv from 'dotenv';
import productosRouter from './routes/productosRoutes.js' 
import ordenesRouter from './routes/ordenesRoutes.js' 
// settings
const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();

// middlewares
app.use(express.json())
app.use("/api/productos",productosRouter)
app.use("/api/ordenes",ordenesRouter)

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

  
// mongodb connection
const startServer = () => {
    try {
      connectDB(process.env.MONGODB_URL); 
      app.listen(PORT, () => console.log('Server started on port 3001'));
    } catch (error) {
      console.log(error);
    }
  };

startServer();