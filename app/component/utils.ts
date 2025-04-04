import { TableRow } from "./DataTable";

type CubeRow = Record<string, string>;

export function transformSalesData([titleArray, dailyData]: any[]) {
  const rawTotal = parseFloat(titleArray[0][Object.keys(titleArray[0])[0]]);

  console.log("rawTotal", rawTotal);
  const title = `₹ ${(rawTotal / 10000000).toFixed(2)} Cr`; // convert to Crores

  const chartData = dailyData.map((item: any) => {
    const date = new Date(item["blinkit_insights_sku.created_at.day"]);
    const day = date.getDate().toString().padStart(2, "0");

    return {
      day,
      thisMonth:
        parseFloat(item["blinkit_insights_sku.sales_mrp_sum"]) / 1000000, // in millions
      lastMonth: Math.random() * 6, // dummy data
    };
  });

  return { title, chartData };
}

export function transformPieChartData(data: any[]) {
  const COLORS = ["#6A5ACD", "#FF5733", "#FFB400", "#A9A9A9"]; // Add more if needed

  const totalSales = data.reduce(
    (sum, item) =>
      sum + parseFloat(item["blinkit_insights_city.sales_mrp_sum"]),
    0
  );

  return data.map((item, index) => {
    const sales = parseFloat(item["blinkit_insights_city.sales_mrp_sum"]);
    return {
      name: item["blinkit_insights_city.name"],
      value: sales / 100000, // Convert to Lakhs
      percentage: ((sales / totalSales) * 100).toFixed(0), // Contribution in %
      color: COLORS[index % COLORS.length],
      change: parseFloat((Math.random() * 5 - 2.5).toFixed(2)), // Dummy change
    };
  });
}

export function convertJsonToTableData(
  jsonData: any[],
  prefix: string
): TableRow[] {
  return jsonData.map((item, index) => ({
    id: item[`${prefix}.id`] || String(index + 1),
    skuName: item[`${prefix}.name`] || "N/A",
    sales: item[`${prefix}.sales_mrp_sum`]
      ? `₹${item[`${prefix}.sales_mrp_sum`]}`
      : "₹0",
    outOfStock: item[`${prefix}.on_shelf_availability`]
      ? `${(100 - parseFloat(item[`${prefix}.on_shelf_availability`])).toFixed(
          2
        )}%`
      : "0%",
    totalInventory: item[`${prefix}.inv_qty`] || "0",
    averageRank: item[`${prefix}.rank_avg`] || "0",
    estTraffic: item[`${prefix}.qty_sold`] || "0",
    estImpressions: item[`${prefix}.sales_mrp_max`] || "0",
    ci: item[`${prefix}.discount_avg`]
      ? parseFloat(item[`${prefix}.discount_avg`]).toFixed(1)
      : "0.0",
    hasIncrease:
      !!item[`${prefix}.rank_avg`] &&
      parseFloat(item[`${prefix}.rank_avg`]) < 10,
    increasePercentage: item[`${prefix}.days_of_inventory_14`]
      ? `${parseFloat(item[`${prefix}.days_of_inventory_14`]).toFixed(1)}%`
      : "0%",
  }));
}

export const prefixFin = (obj: any) => {
  const objKey = Object.keys(obj)[0];
  return objKey.split(".")[0];
};
