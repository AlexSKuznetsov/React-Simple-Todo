import express from 'express';
import faker from 'faker';
import {v4 as uuidv4} from 'uuid'

const app = express();

app.use(express.json());

app.get('/api/todos', (req, res) => {
  setTimeout(() => {
    res.json([
      {
        taskName: faker.lorem.words(5),
        id: uuidv4(),
        isComplete: false,
      },

      {
        taskName: faker.lorem.words(5),
        id: uuidv4(),
        isComplete: false,
      },
      {
        taskName: faker.lorem.words(5),
        id: uuidv4(),
        isComplete: false,
      },
    ]);
  }, 2000)
});

app.listen(process.env.PORT ?? 3001);