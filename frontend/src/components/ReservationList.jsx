const ReservationList = ({ reservations }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Reservations</h2>
        <ul>
          {reservations.map(res => (
            <li key={res._id} className="mb-2">{res.carId.make} - {res.startDate} to {res.endDate}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ReservationList;