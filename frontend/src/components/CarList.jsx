const CarList = ({ cars }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cars</h2>
        <ul>
          {cars.map(car => (
            <li key={car._id} className="mb-2">{car.make} {car.model} ({car.year}) - ${car.dailyRate}/day</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CarList;