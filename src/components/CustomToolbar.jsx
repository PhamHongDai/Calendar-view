import styles from "./../css/CustomToolbar.css"
import { Navigate } from 'react-big-calendar';
import React, { useEffect, useState } from "react";
import { useStore, actions } from "./../store";
import moment from 'moment';


const CustomToolbar = (props) => {
    const [state, dispatch] = useStore()
    const { todos, view, todoInput, date} = state
    const handleView = (input) => {
        dispatch(actions.setView(input))
    }

    useEffect(() => {
        props.onView(view);
      },[view, date]);

    const goToDayView = () => {
        handleView('day');
    };
    const goToWeekView = () => {
        handleView('week');
    };
    const goToMonthView = () => {
        handleView('month');
    };
    const goToAgendaView = () => {
        handleView('agenda');
    };

    const goToBack = () => {
        props.onNavigate(Navigate.PREVIOUS);
    };

    const goToNext = () => {
        props.onNavigate(Navigate.NEXT);
    };

    const goToToday = () => {
        props.onNavigate(Navigate.TODAY);
    };

    const handleSelectView = (e) => {
        if (e.target.value === "month")
            goToMonthView();
        else if (e.target.value === "day")
            goToDayView();
        else if (e.target.value === "week")
            goToWeekView();
        else
            goToAgendaView();
    }
    return (
        <div className="toolbar-contents">
            <div className="left__header">
                <button onClick={goToToday}>Today</button>
                <i className='bx bx-chevron-left' onClick={goToBack}></i>
                <i className='bx bx-chevron-right' onClick={goToNext}></i>
                {view === "month" ? (
                    <h2>{moment(props.date).format("MMMM YYYY")}</h2>
                ) : view === "agenda" ? (
                    <h2>{moment(props.date).format("DD/MM/YYYY")} -
                        {moment(props.date).add(1,'month').format("DD/MM/YYYY")}</h2>
                ) : view === "day" ? (
                    <h2>{moment(props.date).format("DD MMM YYYY ")}</h2>
                ) : (
                    <h2>{moment(props.date).format("MMMM YYYY ")}</h2>
                )
                }
            </div>
            <div className="right__header">
                <select onChange={handleSelectView} value={view}>
                    <option value="day" className="drop">Day</option>
                    <option value="week" className="drop">Week</option>
                    <option value="month" className="drop">Month</option>
                    <option value="agenda" className="drop">Agenda</option>
                </select>
            </div>
        </div>
    );
}

export default CustomToolbar;
