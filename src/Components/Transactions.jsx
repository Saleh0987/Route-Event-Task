import MaterialTable from '@material-table/core';
import data from '../Data/Data.json';

const { transactions, customers } = data;

const Transactions = () => {
  const getRowStyle = (rowData, index) => {
    return index % 2 === 0 ? { background: '#f9f9f9' } : {};
  };

  const getCustomerName = (customerId) => {
    const customer = customers.find((c) => c.id === customerId);
    return customer ? customer.name : 'Unknown';
  };

  const transactionsDataWithNames = transactions.map((transaction) => ({
    ...transaction,
    name: getCustomerName(transaction.customer_id),
  }));

  return (
    <div className="p-2 w-full flex items-center flex-col justify-center m-auto">
      <h2 className="text-2xl dark font-bold mb-2">Transactions</h2>
      <div className='md:w-[70%]'> 
        <MaterialTable
          title="Transactions"
          columns={[
            { title: 'TransactionID', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Date', field: 'date' },
            { title: 'Amount', field: 'amount' },
            { title: 'Customer_id', field: 'customer_id' },
          ]}
          data={transactionsDataWithNames}
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

export default Transactions;