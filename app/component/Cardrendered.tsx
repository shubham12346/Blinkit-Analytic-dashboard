"use client";

import { useEffect, useState } from "react";
import { fetchCubeData } from "../lib/cubeClient";
import dynamic from "next/dynamic";
import {
  convertJsonToTableData,
  prefixFin,
  transformPieChartData,
  transformSalesData,
} from "./utils";
import Card from "./Card";

const LineChart = dynamic(() => import("./LineChart"), { ssr: false });
const SemiPieChart = dynamic(() => import("./SemiPieChart"), { ssr: false });
const DataTable = dynamic(() => import("./DataTable"), { ssr: false });

export default function CardRenderer({ card }: { card: any }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedQueries = JSON.parse(card.query);
        console.log("Parsed queries:", parsedQueries);

        const responses = await Promise.all(parsedQueries.map(fetchCubeData));
        console.log("Responses from Cube.js:", responses);
        const resultData = responses.map((res: any) => res?.data || [] || []);
        setData(resultData);
      } catch (err) {
        console.error("Failed to fetch Cube data:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchData, 1000);
    return () => clearTimeout(timeoutId);
  }, [card.query]);

  console.log("Card Data:", data);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-6 w-6"></span>
      </div>
    );
  }
  if (!data.length || data.every((d) => d.length === 0)) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        No data available
      </div>
    );
  }

  switch (card.visualizationType) {
    case "linechart":
      const { title, chartData } = transformSalesData(data);
      return (
        <Card title={card?.title} showTitle>
          <LineChart data={chartData} title={title} />
        </Card>
      );
    case "semipiechart":
      const citiesChart = transformPieChartData(data[0]);
      return (
        <Card showTitle title="Top Cities">
          <SemiPieChart data={citiesChart} />
        </Card>
      );
    case "table":
      let prefix = prefixFin(data[0][0]);
      const refactoredData = convertJsonToTableData(data[0], prefix);
      return (
        <DataTable
          data={data}
          title={card?.title}
          subTitle={card?.description}
          tableDataD={refactoredData}
        />
      );
    default:
      return <div>Unsupported visualization type</div>;
  }
}
