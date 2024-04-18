import { ADD_TODO, SET_VIEW, SET_TODO_INPUT } from "./constants"
import moment from "moment"

const initState = {
    todos: [{
        start: moment("2024-04-15T10:00:00").toDate(),
        end: moment("2024-04-15T11:00:00").toDate(),
        title: "Meetting Customer",
        color: "orange-light",
        resouce: "#"
    },
    {
        start: moment("2024-04-15T13:00:00").toDate(),
        end: moment("2024-04-15T14:00:00").toDate(),
        title: "Conference",
        color: "orange-dark",
        resouce: ""
    },
    {
        start: moment("2024-04-15T11:00:00").toDate(),
        end: moment("2024-04-15T12:00:00").toDate(),
        title: "Meetting",
        color: "blue",
        resouce: "#"
    },],
        todoInput: '',
    view: 'month',
}
const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case SET_VIEW:
            return {
                ...state,
                view: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer