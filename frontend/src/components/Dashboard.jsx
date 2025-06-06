import { useEffect, useState } from 'react';
import { CarList, ReservationList, CustomerList, AppointmentList, PaymentList } from './';

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [carsRes, reservationsRes, customersRes, appointmentsRes, paymentsRes] = await Promise.all([
        fetch('http://localhost:5000/api/cars').then(res => res.json()),
        fetch('http://localhost:5000/api/reservations').then(res => res.json()),
        fetch('http://localhost:5000/api/customers').then(res => res.json()),
        fetch('http://localhost:5000/api/appointments').then(res => res.json()),
        fetch('http://localhost:5000/api/payments').then(res => res.json()),
      ]);
      setCars(carsRes);
      setReservations(reservationsRes);
      setCustomers(customersRes);
      setAppointments(appointmentsRes);
      setPayments(paymentsRes);
    };
    fetchData();
  }, []);

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