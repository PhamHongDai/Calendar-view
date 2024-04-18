import { ADD_TODO, SET_VIEW, SET_TODO_INPUT, SET_DAY_PICKER } from "./constants"
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
        start: moment("2024-04-21T11:00:00").toDate(),
        end: moment("2024-04-21T12:00:00").toDate(),
        title: "Meetting",
        color: "blue",
        resouce: "#"
    },
    {
        start: moment("2024-04-22T10:00:00").toDate(),
        end: moment("2024-04-22T11:00:00").toDate(),
        title: "Meetting Customer",
        color: "orange-light",
        resouce: "#"
    },
    {
        start: moment("2024-04-23T13:00:00").toDate(),
        end: moment("2024-04-24T14:00:00").toDate(),
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
        dayPicker: '',
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
        case SET_DAY_PICKER:
            return {
                ...state,
                dayPicker: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer