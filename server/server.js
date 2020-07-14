import express from 'express';
import mongoose from 'mongoose';
import todosRoute from './routes/todos-route.js';

mongoose.connect('mongodb://localhost:27017/TodosMiddle', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();

app.use(express.json());

app.use(todosRoute)

app.listen(process.env.PORT ?? 3001);