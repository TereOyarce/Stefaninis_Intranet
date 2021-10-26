import React from "react";
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './style/calendar.css';


export const Calendar= () =>{
  return(
    <div className="container-calendar">
      <div className='calendar-profile'>
        <h1>Calendario</h1>
       </div>

      <div className='body-calendar'>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        
        events={[
          { title: 'Talent Fest!', date: '2021-10-26' },
          { title: 'Birthday', date: '2021-10-28' }
        ]}
      />


      
      </div>
    </div>
  )
}