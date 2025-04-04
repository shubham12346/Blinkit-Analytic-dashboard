import { cubejsApi } from "../lib/cubeClient";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const resultSet = await cubejsApi.load({
        measures: ["Orders.count"],
        timeDimensions: [
          {
            dimension: "Orders.createdAt",
            granularity: "day",
          },
        ],
      });

      setData(resultSet.tablePivot());
    }

    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
