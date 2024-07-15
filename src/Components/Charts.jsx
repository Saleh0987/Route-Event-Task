import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import allData from '../Data/Data.json'; 
import { IoIosPeople } from 'react-icons/io';
import { GrTransaction } from 'react-icons/gr';
const numCustomers = allData.customers.length;
const numTransactions = allData.transactions.length;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartSection = () => {
  const sortedTransactions = allData.transactions.sort((a, b) => a.date.localeCompare(b.date));
  const firstTransactions = sortedTransactions.filter((transaction) => transaction.date === '2022-01-01');
  const lastTransactions = sortedTransactions.filter((transaction) => transaction.date === '2022-01-02');
  const [showSecondDay, setShowSecondDay] = useState(false);


  const data = {
    labels: showSecondDay ? lastTransactions.map((transaction) => transaction.date)
      : firstTransactions.map((transaction) => transaction.date),
    datasets: [
      {
        label: showSecondDay ? 'Last-Transactions' : 'First-Transactions',
        data: showSecondDay ? lastTransactions.map((transaction) => transaction.amount)
          : firstTransactions.map((transaction) => transaction.amount),
        fill: false,
        backgroundColor: showSecondDay ? 'orange' : 'rgb(75, 192, 192)',
        borderColor: showSecondDay ? 'blue' : 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

const options = {
  responsive: true,
  interaction: {
    intersect: false,
    axis: 'x',
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const transaction = sortedTransactions[context.dataIndex];
          const customer = allData.customers.find((c) => c.id === transaction.customer_id);
          return `${customer.name}: $${transaction.amount}`;
        },
      },
    },
  },
};

  return (
    <div className="bg-white md:w-[80%] m-auto dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between gap-2 mb-1">
            <button
              className={`p-1 md:w-1/4 rounded transition-all text-[12px] ${showSecondDay ? 'bg-red-500' : 'bg-green-500'}`}
              onClick={() => setShowSecondDay(false)}
            >
              first <br />Transactions
        </button>
          <div className="bg-gray-400 text-white text-center dark:bg-gray-900 p-1 rounded-lg shadow w-full md:w-1/4">
          <h2 className="flex justify-center gap-2 items-center dark:text-white">
            Customers
            <span>
              <IoIosPeople className="text-[22px]" />
            </span>
          </h2>
          <p>({numCustomers})</p>
        </div>
        <div className="bg-gray-400 text-white text-center dark:bg-gray-900 p-1 rounded-lg shadow w-full md:w-1/4">
          <h2 className="flex justify-center gap-2 items-center dark:text-white">
            Transactions
            <span>
              <GrTransaction className="text-[22px]" />
            </span>
          </h2>
          <p>({numTransactions})</p>
        </div>
            <button
              className={`p-1 md:w-1/4 rounded transition-all text-[12px] ${showSecondDay ? 'bg-green-500' : 'bg-red-500'}`}
              onClick={() => setShowSecondDay(true)}
            >
              last <br />Transactions
        </button>
          </div>
          <Line data={data} options={options} />
        </div>
  );
};

export default ChartSection;
