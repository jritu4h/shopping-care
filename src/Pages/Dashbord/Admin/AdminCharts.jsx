import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Chart from '../../../hooks/Chart';
import SetCart from '../../../hooks/SetCart';
const AdminCharts = () => {
    const [charts]=Chart()
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={700}
          height={300}
          data={charts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="productName" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>  
        </div>
    );
};

export default AdminCharts;