import { useEffect, useState } from 'react';
import CarList from './CarList';
import ReservationList from './ReservationList';
import CustomerList from './CustomerList';
import AppointmentList from './AppointmentList';
import PaymentList from './PaymentList';

const Dashboard = ({ setUser }) => {
  const [cars, setCars] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No authentication token found. Please log in.');
          setUser(null); // Update App.jsx state
          return;
        }

        const headers = { Authorization: `Bearer ${token}` };

        const [carsRes, reservationsRes, customersRes, appointmentsRes, paymentsRes] = await Promise.all([
          fetch('http://localhost:5000/api/cars', { headers }).then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
          }),
          fetch('http://localhost:5000/api/reservations', { headers }).then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
          }),
          fetch('http://localhost:5000/api/customers', { headers }).then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
          }),
          fetch('http://localhost:5000/api/appointments', { headers }).then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
          }),
          fetch('http://localhost:5000/api/payments', { headers }).then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
          }),
        ]);

        setCars(carsRes);
        setReservations(reservationsRes);
        setCustomers(customersRes);
        setAppointments(appointmentsRes);
        setPayments(paymentsRes);
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
        if (err.message.includes('401')) {
          localStorage.removeItem('token'); // Clear invalid token
          setUser(null); // Update App.jsx state to trigger redirect
        }
      }
    };
    fetchData();
  }, [setUser]); // Add setUser to dependency array

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CarList cars={cars} />
        <ReservationList reservations={reservations} />
        <CustomerList customers={customers} />
        <AppointmentList appointments={appointments} />
        <PaymentList payments={payments} />
      </div>
    </div>
  );
};

export default Dashboard;