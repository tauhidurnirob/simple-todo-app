import React, { useMemo, useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import TagSelect from "./TagSelect";

const intialTodos = [
  {
    id: uuidv4(),
    title: "Setup development environment",
    completed: false,
    tagId: "",
  },
  {
    id: uuidv4(),
    title: "Develop website and add content",
    completed: false,
    tagId: "",
  },
  {
    id: uuidv4(),
    title: "Deploy to live server",
    completed: false,
    tagId: "",
  },
];

const tags = [
  {
    id: uuidv4(),
    name: "In progress",
    color: "orange",
  },
  {
    id: uuidv4(),
    name: "Completed",
    color: "green",
  },
  {
    id: uuidv4(),
    name: "Ready",
    color: "blue",
  },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(intialTodos);
  const [seletedTag, setSelectedTag] = useState(tags[1]);

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    const filteredTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const handleDeleteSelected = () => {
    const completedIds = completedTodos.map((todo) => todo.id);
    const filteredTodo = [...todos].filter(
      (todo) => !completedIds.includes(todo.id)
    );
    setTodos(filteredTodo);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleAddTag = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.tagId = seletedTag.id;
        }
        return todo;
      })
    );
  };

  const onTagSelectChange = (e) => {
    const tagId = e.target.value;
    const tag = tags.find((tag) => tag.id === tagId);
    setSelectedTag(tag);
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <div style={{ display: "flex", gap: 15, padding: "20px 10px" }}>
        <TagSelect tags={tags} tag={seletedTag} onChange={onTagSelectChange} />
        {completedTodos.length > 1 && (
          <button className="delete-all" onClick={handleDeleteSelected}>
            Delete Selected
          </button>
        )}
      </div>
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        addTag={handleAddTag}
        tags={tags}
      />
    </div>
  );
};

export default TodoContainer;
