"use client";
import Image from "next/image";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

type Props = {};
const data = [
  {
    name: "Mon",
    present: 70,
    absent: 30
  },
  {
    name: "Tue",
    present: 65,
    absent: 25
  },
  {
    name: "Wed",
    present: 76,
    absent: 45
  },
  {
    name: "Thu",
    present: 45,
    absent: 12
  },
  {
    name: "Fri",
    present: 98,
    absent: 45
  }
];
const AttendanceChart = (props: Props) => {
  return (
    <div className="bg-white rounded-xl p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image alt="" src={"/moreDark.png"} width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px"
            }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="present" fill="#4d8075" legendType="circle" />
          <Bar dataKey="absent" fill="#3fbea7" legendType="circle" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
