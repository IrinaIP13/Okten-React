import {useEffect, useState} from "react";
import type {TodosModel} from "../../models/TodosModel.ts";
import {loadTodos} from "../../service/api.service.ts";

export const Todos = () => {
    const [todos, setTodos] = useState<TodosModel[]>([]);
    useEffect(() => {
        async function fetchTodos() {
            const allTodos = await loadTodos();
            setTodos(allTodos);
        }
        fetchTodos();
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h2>{todo.todo}</h2>
                    <p>{todo.completed}</p>
                    <p>{todo.userId}</p>
                </div>
            ))}
        </div>
    )};