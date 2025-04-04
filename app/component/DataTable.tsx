"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUp, ArrowDown, LineChart } from "lucide-react";

interface DataTableProps {
  title?: string;
  subTitle?: string;
  tableDataD?: TableRow[];
  tableTotalRow?: TableRow;
  data?: any;
}

export interface TableRow {
  id: number;
  skuName: string;
  sales: string;
  outOfStock: string;
  totalInventory: string;
  averageRank: string;
  estTraffic: string;
  estImpressions: string;
  ci: string;
  hasIncrease: boolean;
  increasePercentage?: string;
}

const tableData: TableRow[] = [
  {
    id: 1,
    skuName: "Protein Bar 100g",
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    averageRank: "3.2",
    estTraffic: "12,303",
    estImpressions: "25,005",
    ci: "1.6",
    hasIncrease: false,
  },
  {
    id: 2,
    skuName: "Choco Bar 100g",
    sales: "₹8,526.32",
    outOfStock: "6.79%",
    totalInventory: "679",
    averageRank: "7",
    estTraffic: "3,005",
    estImpressions: "4,231",
    ci: "3",
    hasIncrease: true,
    increasePercentage: "2.4%",
  },
  {
    id: 3,
    skuName: "SKU 3",
    sales: "₹9,313",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    averageRank: "11",
    estTraffic: "1,931.9",
    estImpressions: "3,931.9",
    ci: "1.6",
    hasIncrease: false,
  },
  {
    id: 4,
    skuName: "SKU 4",
    sales: "₹0",
    outOfStock: "0%",
    totalInventory: "0",
    averageRank: "0",
    estTraffic: "0",
    estImpressions: "0",
    ci: "0.0",
    hasIncrease: false,
  },
];
const tableTotalRow1: TableRow = {
  id: 6,
  skuName: "Total",
  sales: "₹2,93,132.12",
  outOfStock: "16%",
  totalInventory: "2931",
  averageRank: "8.3",
  estTraffic: "61,985",
  estImpressions: "2,61,768",
  ci: "1.6",
  hasIncrease: false,
};

export default function DataTable({
  title = "SKU Level Data",
  subTitle = "Analytics for all your SKUs",
  tableDataD = tableData,
  tableTotalRow = tableTotalRow1,
  data = {},
}: DataTableProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  console.log("DataTable data", data);
  const handleRowSelection = (skuName: string) => {
    setSelectedRows((prev) =>
      prev.includes(skuName)
        ? prev.filter((item) => item !== skuName)
        : [...prev, skuName]
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-[700] text-[20px] text-[#031B15] ">
            {title}
          </h2>
          <p className="text-[14px] font-[400] text-[#4F4D55]">{subTitle}</p>
        </div>
        <button className="flex items-center text-[14px] font-[400] px-4 py-2 bg-[#027056] text-white rounded-md">
          <span>Filters (1)</span>
          <ChevronDown className="ml-1" size={16} />
        </button>
      </div>
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th
                rowSpan={2}
                className="py-3 px-4 text-[#013025] font-[600] text-[15px]"
              >
                <div className="flex gap-1">
                  <LineChart className="w-5 h-5 text-gray-700" /> SKU Name
                </div>
              </th>
              <th
                colSpan={3}
                className="py-3 px-4 text-center text-[#013025] font-[7 00] text-[15px]"
              >
                Availability
              </th>
              <th
                colSpan={4}
                className="py-3 px-4 text-center text-[#013025] font-[700] text-[15px]"
              >
                Visibility
              </th>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-[#013025] font-[600] text-[15px]">
                <div className="flex gap-1 items-center">
                  Sales
                  <ChevronDown size={14} />
                </div>
              </th>
              <th className="py-3 px-4 text-[#013025] font-[600] text-[15px]">
                <div className="flex gap-1 items-center">
                  Out of Stock
                  <ChevronDown size={14} />
                </div>
              </th>
              <th className="py-3 px-4 text-[#013025] font-[600] text-[15px]">
                <div className="flex gap-1 items-center">
                  Total Inventory
                  <ChevronDown size={14} />
                </div>
              </th>
              <th className="py-3 px-4 text-[#013025] font-[600] text-[15px]">
                <div className="flex gap-1 items-center">
                  Average Rank
                  <ChevronDown size={14} />
                </div>
              </th>
              <th className="py-3 px-4 text-[#013025] font-[600] text-[15px]">
                <div className="flex gap-1 items-center">
                  Est. Traffic <ChevronDown size={14} />
                </div>
              </th>
              <th className="py-3 px-4 text-[#013025] font-[600] text-[15px]">
                <div className="flex gap-1 items-center">
                  Est. Impressions <ChevronDown size={14} />
                </div>
              </th>
              <th className="py-3 px-4 text-[#013025] font-[600] text-[15px]">
                CI
              </th>
            </tr>
          </thead>
          <tbody>
            {tableDataD.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-gray-200 hover:bg-gray-50  ${
                  selectedRows.includes(row.skuName) ? "bg-[#F7F7F7]" : ""
                }`}
              >
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.skuName)}
                    onChange={() => handleRowSelection(row.skuName)}
                    className="mr-2 w-4 h-4 accent-[#027056]"
                  />
                  {row.skuName}
                </td>
                <td className="py-3 px-4 text-[#4E5E5A] font-[500] text-[14px] ">
                  {row.sales}
                </td>
                <td className="py-3 px-4 text-[#4E5E5A] font-[500] text-[14px]">
                  {row.outOfStock}
                </td>
                <td className="py-3 px-4 text-[#4E5E5A] font-[500] text-[14px]">
                  {row.totalInventory}
                </td>
                <td className="py-3 px-4 text-[#4E5E5A] font-[500] text-[14px]">
                  {row.averageRank}
                </td>
                <td className="py-3 px-4 text-[#4E5E5A] font-[500] text-[14px]">
                  {row.estTraffic}
                </td>
                <td className="py-3 px-4 text-[#4E5E5A] font-[500] text-[14px]">
                  {row.estImpressions}
                </td>
                <td className="py-3 px-4 text-[#4E5E5A] font-[500] text-[14px]">
                  {row.ci}
                </td>
              </tr>
            ))}
            {tableTotalRow && (
              <tr className=" text-[#0A090B] font-[700] text-[15px]">
                <td className="py-4 px-3 ">{tableTotalRow.skuName}</td>
                <td className="py-4 px-3">{tableTotalRow.sales}</td>
                <td className="py-4 px-3">{tableTotalRow.outOfStock}</td>
                <td className="py-4 px-3">{tableTotalRow.totalInventory}</td>
                <td className="py-4 px-3">{tableTotalRow.averageRank}</td>
                <td className="py-4 px-3">{tableTotalRow.estTraffic}</td>
                <td className="py-4 px-3">{tableTotalRow.estImpressions}</td>
                <td className="py-4 px-3">{tableTotalRow.ci}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
