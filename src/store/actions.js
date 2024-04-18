import { ADD_TODO, SET_VIEW, SET_TODO_INPUT } from "./constants";

export const setToDoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})
export const addToDo = payload => ({
    type: ADD_TODO,
    payload
})
export const setView = payload => ({
    type: SET_VIEW,
    payload
})
