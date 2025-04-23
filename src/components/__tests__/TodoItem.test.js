import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../TodoItem";

describe("TodoItem", () => {
  const mockTodo = {
    id: "1",
    title: "Test todo",
    completed: false,
    tagId: "1",
  };
  const mockTag = {
    id: "1",
    name: "Test tag",
    color: "green",
  };
  const handleChangeProps = jest.fn();
  const deleteTodoProps = jest.fn();
  const addTag = jest.fn();
  it("renders todo item correctly", () => {
    render(
      <TodoItem
        todo={mockTodo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        addTag={addTag}
        tag={mockTag}
      />
    );
    expect(screen.getByText(/Test todo/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    expect(screen.getByText(/Add tag/i)).toBeInTheDocument();
  });
  it('calls handleChangeProps on checkbox click', () => {
    render(
      <TodoItem
        todo={mockTodo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        addTag={addTag}
        tag={mockTag}
      />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChangeProps).toHaveBeenCalledWith(mockTodo.id);
  })
});
