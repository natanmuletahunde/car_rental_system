import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Appointments</h2>
      <ul>
        {Array.isArray(appointments) ? (
          appointments.map(apt => (
            <li key={apt._id} className="mb-2">{apt.customerId.name} - {apt.date}</li>
          ))
        ) : (
          <li>No appointments available</li>
        )}
      </ul>
    </div>
  );
};

export default AppointmentList;