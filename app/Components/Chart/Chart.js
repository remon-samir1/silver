"use client"
import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import './Chart.css';

const data = [
  { date: '1 أكتوبر', value1: 3000, value2: 4000 },
  { date: '3 أكتوبر', value1: 2000, value2: 3000 },
  { date: '7 أكتوبر', value1: 2500, value2: 2700 },
  { date: '10 أكتوبر', value1: 3500, value2: 3600 },
  { date: '14 أكتوبر', value1: 1000, value2: 1500 },
  { date: '20 أكتوبر', value1: 1200, value2: 2900 },
  { date: '23 أكتوبر', value1: 2100, value2: 2700 },
  { date: '27 أكتوبر', value1: 1100, value2: 1700 },
  { date: '30 أكتوبر', value1: 1900, value2: 800 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <span>{`دولار ${payload[0].value.toLocaleString()}`}</span>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  const [activeTab, setActiveTab] = useState('Annually');

  const tabs = ['Daily', 'Weekly', 'Annually'];

  return (
    <div style={{boxShadow:"0 0 10px rgba(0,0,0,0.1)"}} className="chart-container rounded mt-8 bg-white">
      <div className="flex flex-row-reverse items-center gap-4 justify-between">

      <div className="tab-buttons bg-[#F0F9F4]">
        {tabs.map(tab => (
          <button
          key={tab}
          className={`tab-button text-[0.7rem] text-body ${activeTab === tab ? '!bg-textColor text-white' : ''}`}
            onClick={() => setActiveTab(tab)}
            >
            {tab}
          </button>
        ))}
      </div>

      <h3 className="text-[1.1rem] text-black font-bold">نظرة عامة</h3>

            </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis dataKey="date" tick={{dy : 10 , fontSize:"14px"}} />
          <YAxis tickFormatter={(value) => `${value / 1000} ألف`} tick={{dx : -50 , fontSize:"14px"}}/>
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#A0D9C1"
            strokeWidth={2}
            dot={{ r: 5, fill: '#A0D9C1' }}
          />
          <Line
            type="monotone"
            dataKey="value1"
            stroke="#00B386"
            strokeWidth={2}
            dot={{ r: 5, fill: '#00B386' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
