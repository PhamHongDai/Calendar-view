import styles from "./../css/Contents.css"
import React, { useState } from "react";
import BigCalendar from "./BigCalendar.jsx";
import SmallCalendar from "./SmallCalendar.jsx";
import UpComingEvent from "./UpComingEvent.jsx";
import { useStore, actions } from "./../store";
import AddEventDiaglog from "./AddEventDiaglog.jsx";

const Contents = () => {
  const [state, dispatch] = useStore()
  const [showDialog, setShowDialog] = useState(false)
  const [event, setEvent] = useState({
    start: "",
    end: "",
    title: "",
    color: "blue",
    resouce: ""
  })
  const handleDialog = () => {
    setShowDialog(prev => !prev)
  }
  const { todos, view, todoInput, date} = state
  const handleView = (input) => {
    dispatch(actions.setView(input))
  }
  const handleTodo = (input) => {
    dispatch(actions.addToDo(input))
  }
  return (
    <div className="main-contents">
      <div className="left-calendar">
        <SmallCalendar/>
        <UpComingEvent
          handleView={handleView}
          todos={todos}
          />
      </div>
      <div className="right-calendar">
        <BigCalendar
          event={event}
          setEvent={setEvent}
          handleDialog={handleDialog}
          handleView={handleView}
          todos={todos}
          />
      </div>
      <AddEventDiaglog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        event={event}
        setEvent={setEvent}
        handleTodo={handleTodo}
        />
    </div>
  );
}

export default Contents;
