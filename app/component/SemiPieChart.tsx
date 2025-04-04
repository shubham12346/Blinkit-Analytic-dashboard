"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data1 = [
  { name: "New Delhi", value: 26.5, color: "#6A5ACD", change: 1.2 },
  { name: "Mumbai", value: 36.4, color: "#FF5733", change: -3.3 },
  { name: "West Bengal", value: 12.2, color: "#FFB400", change: -2.3 },
  { name: "Others", value: 24.3, color: "#A9A9A9", change: 1.09 },
];

// Calculate total value and percentage change

export default function SemiPieChart({ data }: any) {
  console.log("SemiPieChart data", data);
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="relative w-full h-[292px] ">
      <ResponsiveContainer width="100%" height={250} className={""}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={90}
            startAngle={180}
            endAngle={0}
            paddingAngle={2}
          >
            {data?.map((entry: any, index: any) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-gray-500 text-sm">Total</p>
        <p className="text-xl font-semibold">₹{totalValue.toFixed(1)}L</p>
      </div>

      {/* Legend */}
      <div className="mt-2 px-4 text-sm absolute bottom-10 w-full">
        {data.map((item: any, index: any) => (
          <div key={index} className="flex justify-between items-center mb-1">
            <div className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></span>
              <p>{item.name}</p>
            </div>
            <div className="flex items-center">
              <p className="font-semibold mr-2">₹{item.value}L</p>
              <p className="text-gray-500 text-sm mr-2">{item.percentage}%</p>
              <p
                className={`text-sm ${
                  item.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.change >= 0
                  ? `↑ ${item.change}%`
                  : `↓ ${Math.abs(item.change)}%`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
