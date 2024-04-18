import 'react-calendar/dist/Calendar.css';
import styles from "./../css/SmallCalendar.css"
import React, { useContext, useState } from "react";
import Calendar from 'react-calendar';

const SmallCalendar = () => {

    const [date, setDate] = useState(new Date());

    return (
      <div className='small-calendar__content'>
          <Calendar
            onChange={setDate}
            value={date}
            locale="en-GB"
            />
      </div>
    );
}

export default SmallCalendar;
