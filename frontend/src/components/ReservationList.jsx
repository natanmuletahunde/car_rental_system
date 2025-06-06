import React from 'react';

const ReservationList = ({ reservations }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Reservations</h2>
      <ul>
        {Array.isArray(reservations) ? (
          reservations.map(reservation => (
            <li key={reservation.id} className="mb-2">{reservation.name}</li>
          ))
        ) : (
          <li>No reservations available</li>
        )}
      </ul>
    </div>
  );
};

export default ReservationList;