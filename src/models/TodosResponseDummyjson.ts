import type {TodosModel} from "./TodosModel";

export interface TodosResponseDummyjson {
    todos: TodosModel[],
    skip: number,
    total: number,
    limit: number
}