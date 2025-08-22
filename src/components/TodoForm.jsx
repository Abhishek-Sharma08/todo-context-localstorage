import { useState } from 'react';
import { useToDo } from '../contexts/ToDoContext';

function TodoForm() {
    const [todo, setTodo] = useState('');
    const { addTodo } = useToDo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo('');
    };

    return (
        <form onSubmit={add} className="flex flex-col sm:flex-row gap-3 w-full">
            <input
                type="text"
                placeholder="Write your next task..."
                className="flex-grow w-full px-4 py-2.5 text-slate-100 bg-slate-800/60 placeholder:text-slate-500 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ease-in-out"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="flex-shrink-0 px-5 py-2.5 inline-flex items-center justify-center gap-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 ease-in-out"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;
