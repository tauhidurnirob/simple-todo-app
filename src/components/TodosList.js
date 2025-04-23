import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, handleChangeProps, deleteTodoProps, addTag, tags }) => {
  return (
    <div>
      {todos.map((todo) => {
        const tag = tags.find((tag) => tag.id === todo.tagId)
        return (
          <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          addTag={addTag}
          tag={tag}
        />
        )
      })}
    </div>
  );
};

export default TodosList;
