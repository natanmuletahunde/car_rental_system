import React from 'react';

const PaymentList = ({ payments }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Payments</h2>
      <ul>
        {Array.isArray(payments) ? (
          payments.map(payment => (
            <li key={payment._id} className="mb-2">${payment.amount} - {payment.method} - {payment.paymentDate}</li>
          ))
        ) : (
          <li>No payments available</li>
        )}
      </ul>
    </div>
  );
};

export default PaymentList;