"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jun",
    income: 4000,
    expense: 2400
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398
  },
  {
    name: "Mar",
    income: 2000,
    expense: 4800
  },
  {
    name: "Apr",
    income: 3490,
    expense: 4300
  },
  {
    name: "May",
    income: 2780,
    expense: 3908
  },
  {
    name: "Jun",
    income: 1890,
    expense: 5800
  },
  {
    name: "Jul",
    income: 2390,
    expense: 2800
  },
  {
    name: "Aug",
    income: 3490,
    expense: 2300
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4500
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4800
  }
];

const FinanceChart = (props: Props) => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image alt="" src={"/moreDark.png"} width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#3fbea7"
            activeDot={{ r: 8 }}
            strokeWidth={5}
            legendType="circle"
          />
          <Line
            type="monotone"
            dataKey="income"
            legendType="circle"
            strokeWidth={5}
            stroke="#4d8075"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
