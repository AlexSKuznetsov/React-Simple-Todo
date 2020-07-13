import React, { useEffect, useState } from 'react';
import Loader from '../Loader'

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      console.log(loader)
      const response = await fetch('/api/todos');
      const json = await response.json();
      setTodos(json);
      setLoader(false);
      console.log(loader)
    })();
  }, [setTodos, loader]);
  function deleteTaskFunc(e) {
    e.preventDefault();
  }

  function checkTask(e) {
    console.log(e.target.id);
  }

  return (
    <>
      {loader && <Loader />}
      <ul className=" list-group">
        {todos.length > 0 &&
          todos.map((el) => (
            <li className="d-flex list-group-item" key={el.id}>
              <span className="flex-grow-1">{el.taskName}</span>
              <button
                id={el.id}
                type="button"
                className="btn btn-outline-info btn-sm mr-3"
              >
                Редактировать
              </button>
              <button
                id={el.id}
                onClick={deleteTaskFunc}
                type="button"
                className="btn btn-outline-danger btn-sm"
              >
                Удалить
              </button>
              <div className="form-check ml-4">
                <input
                  id={el.id}
                  onClick={checkTask}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked={el.isComplete}
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Выполнено
                </label>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todo;
