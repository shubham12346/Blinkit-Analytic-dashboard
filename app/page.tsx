"use client";
import Header from "./component/Header";
import Card from "./component/Card";
import SalesChart from "./component/LineChart";
import SemiPieChart from "./component/SemiPieChart";
import DataTable, { TableRow } from "./component/DataTable";
import Sidebar from "./component/Sidebar";

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
const tableDataCity: TableRow[] = [
  {
    id: 1,
    skuName: "Delhi",
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
    skuName: "Bengaluru",
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
    skuName: "Bengaluru - SKU 2",
    sales: "₹7,012.72",
    outOfStock: "3.28%",
    totalInventory: "328",
    averageRank: "4",
    estTraffic: "2,960",
    estImpressions: "3,657",
    ci: "-",
    hasIncrease: true,
    increasePercentage: "2.4%",
  },
  {
    id: 4,
    skuName: "SKU 3",
    sales: "₹9,313",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    averageRank: "11",
    estTraffic: "1,931.9",
    estImpressions: "931.9",
    ci: "1.6",
    hasIncrease: false,
  },
  {
    id: 5,
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
  {
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
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 border-1 border-[#0000001F] mt-[20px] rounded-t-[10px]">
        <Header />
        <div className="p-6 space-y-6">
          {/* Top Section: Sales Charts and Top Cities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Sales (MRP)">
              <SalesChart value={"125.49"} />
            </Card>
            <Card title="Total Quantity Sold">
              <SalesChart value={"125.49"} />
            </Card>
            <Card title="Top Cities">
              <SemiPieChart />
            </Card>
          </div>

          {/* SKU Level Data Table */}
          <Card title="SKU Level Data" showTitle={false}>
            <DataTable
              title="SKU level data"
              subTitle="Analytics for all your SKUs"
              tableDataD={tableData}
            />
          </Card>

          {/* City Level Data Table */}
          <Card title="City Level Data" showTitle={false}>
            <DataTable
              title="City level data"
              subTitle="Analytics for all your Cities"
              tableDataD={tableDataCity}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
