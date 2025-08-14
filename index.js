import express from 'express';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import morgan from 'morgan';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/dbConnect.js'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
connectDB()
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running....');
});

//morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//routes
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

//error middleware
app.use(notFound);
app.use(errorHandler);


// Serve static files
app.use(
  express.static(path.join(__dirname, "/client/build"))
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/client/build", "index.html")
  );
});

//listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`----- Server running on port ${PORT} --------`);
});
