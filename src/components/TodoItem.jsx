'use client';
import React, { useState } from 'react';
import { useToDo } from '../contexts/ToDoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useToDo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex items-center w-full border rounded-lg px-4 py-2 gap-x-4 shadow-sm transition-all duration-300 ease-in-out ${
                todo.completed
                    ? 'bg-green-800/30 border-green-700/60 text-slate-500'
                    : 'bg-slate-800 border-slate-700 text-slate-100'
            }`}
        >
            <input
                type="checkbox"
                className="peer cursor-pointer shrink-0 appearance-none w-6 h-6 border-2 border-slate-600 rounded-md bg-slate-900 checked:bg-indigo-500 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <svg
                className="absolute w-4 h-4 ml-1 hidden peer-checked:block pointer-events-none text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>

            <input
                type="text"
                className={`w-full bg-transparent outline-none rounded-md transition-all duration-200 ${
                    isTodoEditable
                        ? 'bg-slate-900 border border-slate-600 px-2 py-1'
                        : 'border-transparent'
                } ${todo.completed ? 'line-through' : ''}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-slate-700/50 hover:bg-slate-700 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                )}
            </button>

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center text-rose-400 bg-slate-700/50 hover:bg-rose-500 hover:text-white shrink-0 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                onClick={() => deleteTodo(todo.id)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </div>
    );
}

export default TodoItem;