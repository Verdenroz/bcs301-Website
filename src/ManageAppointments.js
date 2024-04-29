import React, { useState } from "react";
import "./ManageAppointments.css";

function ManageAppointments() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleAppointmentClick = (id, mentorName, time) => {
    if (id === expandedCard) {
      setExpandedCard(null);
      setSelectedAppointment(null);
    } else {
      setExpandedCard(id);
      setSelectedAppointment({ mentorName, time });
    }
  };

  return (
    <>
      <AppointmentColumn onAppointmentClick={handleAppointmentClick} expandedCard={expandedCard} />
      {selectedAppointment ? (
        <AppointmentDetails appointment={selectedAppointment} />
      ) : (
        <img src="/images/calendar.png" alt="Calendar" />
      )}
    </>
  );
}

function AppointmentCard({ id, mentorName, time, onAppointmentClick, expandedCard }) {
  const isExpanded = id === expandedCard;

  const handleClick = () => {
    onAppointmentClick(id, mentorName, time);
  };

  return (
    <div className={`appointment-card ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}>
      <h3>Appointment with {mentorName}</h3>
      <p>{time}</p>
      <i className="material-icons">{isExpanded ? 'chevron_left' : 'chevron_right'}</i>
    </div>
  );
}

function AppointmentColumn({ onAppointmentClick, expandedCard }) {
  const appointments = [
    { id: 1, mentorName: 'John Doe', time: '10am @ Apr 29, 2024' },
    { id: 2, mentorName: 'Jane Smith', time: '11am @ Apr 29, 2024' },
    { id: 3, mentorName: 'Bob Ross', time: '12pm @ Apr 29, 2024'},
    { id: 4, mentorName: 'Linus Torvalds', time: '10am @ Apr 30, 2024' },
  ];
  return (
    <div className="appointment-column">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          id={appointment.id}
          mentorName={appointment.mentorName}
          time={appointment.time}
          onAppointmentClick={onAppointmentClick}
          expandedCard={expandedCard}
        />
      ))}
    </div>
  );
}

function AppointmentDetails({ appointment }) {
  return (
    <div className="appointment-details">
      <div className="mentor-info">
        <i className="material-icons" id="mentor-img">
          account_circle
        </i>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1>{appointment.mentorName}</h1>
          <h3>{appointment.time}</h3>
        </div>
      </div>
      <div className="appointment-info">
        <button className="appointment-button">Meeting Details</button>
        <button className="appointment-button">Contact</button>
        <button className="appointment-button">Reschedule</button>
        <button className="appointment-button">Cancel Appointment</button>
      </div>
    </div>
  );
}

export default ManageAppointments;
