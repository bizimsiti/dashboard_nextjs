"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from "recharts";

type Props = {};

const data = [
  {
    name: "Boys",
    count: 45,
    fill: "#4d8075"
  },
  {
    name: "Girls",
    count: 35,
    fill: "#3fbea7"
  },
  {
    name: "total",
    count: 80,
    fill: "white"
  }
];

const CountChart = (props: Props) => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image alt="" src={"/moreDark.png"} width={20} height={20} />
      </div>
      <div className="w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            {/* <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              //wrapperStyle={style}
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-s-green rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-400">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-s-green-d rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-400">Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
