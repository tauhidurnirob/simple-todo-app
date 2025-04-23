import React from "react";

const TodoItem = ({
  todo,
  handleChangeProps,
  deleteTodoProps,
  addTag,
  tag,
}) => {
  // const completedStyle = {
  //   fontStyle: "italic",
  //   color: "#d35e0f",
  //   opacity: 0.4,
  //   textDecoration: "line-through",
  // };

  const { completed, id, title } = todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <button onClick={() => addTag(id)}>Add Tag</button>
      <span>{title}</span>
      {tag && <span style={{color: tag.color, marginLeft: "5px"}} >{tag.name}</span>}
    </li>
  );
};

export default TodoItem;
