import MaterialTable from '@material-table/core';
import data from '../Data/Data.json';

const Customers = () => {
  const getRowStyle = (rowData, index) => {
    return index % 2 === 0 ? { background: '#f9f9f9' } : {};
  };
  const { customers, transactions } = data;

  const customerData = customers.map((customer) => {
    const transaction = transactions.find((t) => t.customer_id === customer.id);
    return {
      id: customer.id,
      name: customer.name,
      amount: transaction ? transaction.amount : 0,
    };
  });

  return (
    <div className="p-2 w-full flex items-center flex-col justify-center m-auto">
      <h2 className="text-2xl font-bold mb-2">Customers</h2>
      <div className='md:w-[70%]'>
              <MaterialTable
        title="Customers"
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Name', field: 'name' },
          { title: 'First Transactions', field: 'amount' }, 
        ]}
        data={customerData}
        options={{
          search: true,
          paging: true,
          pageSize: 5,
          pageSizeOptions: [5, 10, 20],
          exportButton: true,
          rowStyle: getRowStyle,
        }}
      />
</div>
    </div>
  );
};

export default Customers;
