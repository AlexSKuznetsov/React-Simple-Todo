import express from 'express';
import TodosModel from '../models/todo-model.js';
import todosModel from '../models/todo-model.js';

const route = express.Router();

route.get('/api/todos', async (req, res) => {
  const todos = await TodosModel.find();
  setTimeout(() => {
    res.json(todos);
  }, 500);
});

route.post('/api/todos', async (req, res) => {
  const { taskName } = req.body;
  const newTask = new TodosModel({
    taskName,
    isComplete: false,
  });
  try {
      const result = await newTask.save();
      console.log(result);
      res.json(result).end();
  } catch (err) {
    res.json(err.message).end();
  }
  
});

route.delete('/api/todos', async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const find = await TodosModel.findByIdAndRemove({ _id: id });
    console.log(find);
    return res.json(find).end();
  } catch (err) {
    console.log(err.message);
    return res.json(err.message);
  }
});

route.patch('/api/todos', async (req, res) => {
  const { id, status, taskName } = req.body;
  try {
    const update = await todosModel.findByIdAndUpdate(
      { _id: id },
      { isComplete: status, taskName },
      { omitUndefined: true}
    );
    res.json(update).end();
  } catch (err) {
    res.json(err.message);
  }
});
export default route;
