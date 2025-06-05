const CustomerList = ({ customers }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Customers</h2>
        <ul>
          {customers.map(customer => (
            <li key={customer._id} className="mb-2">{customer.name} ({customer.email})</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CustomerList;