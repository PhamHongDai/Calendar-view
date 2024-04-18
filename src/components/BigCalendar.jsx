import styles from "react-big-calendar/lib/css/react-big-calendar.css"
import st from "./../css/BigCalendar.css"
import React, { useCallback } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import CustomToolbar from "./CustomToolbar";
import CustomEvent from "./CustomEvent";

const BigCalendar = ({event, setEvent, handleDialog, handleView, todos}) => {

    const handleSelect = ({start, end}) => {
        setEvent({...event, start: start, end: end })
        handleDialog();
    }
    const handleClick = () =>{
        handleView('day')
    }
    const eventPropGetter = useCallback((event, start, end, isSelected) => ({
        ...(event.color === 'orange-light' && {
            style: {
                backgroundColor: '#FFE4C8',
                borderLeft: '5px solid #0F4C81',
                color: "#0F4C81",
                padding: "4px"
            },
        }),
        ...(event.color === 'blue' && {
            style: {
                backgroundColor: '#5582aa',
                borderLeft: '5px solid orange',
                color: "#fff",
                padding: "4px"
            },
        }),
        ...(event.color === 'orange-dark' && {
            style: {
                backgroundColor: '#f5bd7d',
                borderLeft: '5px solid #5684AE',
                color: "#0F4C81",
                padding: "4px"
            },
        }),
    }),
        []
    )
    const localizer = momentLocalizer(moment);

    return (
        <div className="big-calendar__content">
            <Calendar
                selectable
                defaultView="month"
                localizer={localizer}
                onDrillDown={handleClick}
                eventPropGetter={eventPropGetter}
                components={{
                    toolbar: CustomToolbar,
                    event: CustomEvent,
                }}
                onSelectSlot={handleSelect}
                events={todos}
            />
        </div>

    )
}

export default BigCalendar;