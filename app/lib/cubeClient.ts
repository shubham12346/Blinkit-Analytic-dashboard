import cubejs from "@cubejs-client/core";

const CUBE_API_URL = process.env.NEXT_PUBLIC_CUBE_API_URL || "";
const CUBE_API_TOKEN = process.env.NEXT_PUBLIC_CUBE_API_TOKEN || "";

export const cubejsApi = cubejs(CUBE_API_TOKEN, {
  apiUrl: `${CUBE_API_URL}/cubejs-api/v1`,
});

// lib/cubeApi.ts
export async function fetchCubeData(query: any) {
  console.log("Fetching Cube.js data with query:", query);
  const res = await fetch(CUBE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CUBE_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Cube.js data");
  }
  const data = await res.json();
  console.log("Cube.js data:", data);
  return data;
}
