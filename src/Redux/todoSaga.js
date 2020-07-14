import {takeEvery, put, call } from 'redux-saga/effects'
import { CALL_ADD_TASK } from './action/action-types';
import {addTask} from './action/todo-action'

// async function
async function fetchAdd(name) {
  console.log('name',name);
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ taskName: name }),
  });
  return response.json();
}

// worker
function* worker(action) {
  console.log(action)
  const newTask = yield call(fetchAdd, action.name);
  yield put(addTask(action.name, newTask._id))
}


// watcher
export default function* watcher(action) {
  yield takeEvery(CALL_ADD_TASK, worker)
}