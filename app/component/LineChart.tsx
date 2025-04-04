"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
// Sample data based on the image
const data = [
  { day: "09", thisMonth: 1.5, lastMonth: 2.2 },
  { day: "10", thisMonth: 2.4, lastMonth: 2.0 },
  { day: "11", thisMonth: 3.6, lastMonth: 3.2 },
  { day: "12", thisMonth: 4.5, lastMonth: 3.3 },
  { day: "13", thisMonth: 3.0, lastMonth: 3.5 },
  { day: "14", thisMonth: 3.5, lastMonth: 3.1 },
  { day: "15", thisMonth: 5.1, lastMonth: 3.4 },
];

export default function SalesChart(props: { value: string }) {
  const { value } = props;
  const renderChart = (value: string) => (
    <div>
      <div className="mb-1 flex justify-between items-center px-[12px] pt-[14px]">
        <div className="text-3xl font-semibold">{value}</div>

        <div className="flex  flex-col items-end text-sm text-gray-500">
          <span className="text-green-500 flex  items-center">
            <span className="text-md px-1">↑</span> 2.4%
          </span>
          <span className="mr-1">vs 119.69 last month</span>
        </div>
      </div>

      <div className="h-40 mt-4 px-[12px] pt-[14px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <YAxis
              domain={[0, 6]}
              ticks={[1.5, 3.0, 4.5, 6.0]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5, fill: "#10b981" }}
            />
            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#f97316"
              strokeWidth={2}
              dot={false}
              strokeDasharray="3 3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex mt-2 text-sm  border-t-[1px]  border-gray-200 p-[12px]">
        <div className="flex items-center mr-4">
          <div className="w-[6px] h-[6px] bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-600 text-[13px]">This Month</span>
        </div>
        <div className="flex items-center">
          <div className="w-[6px]  h-[6px] bg-[#E25D33] rounded-full mr-2"></div>
          <span className="text-gray-600 text-[13px] ">Last Month</span>
        </div>
      </div>
    </div>
  );

  return <div>{renderChart(value)}</div>;
}
