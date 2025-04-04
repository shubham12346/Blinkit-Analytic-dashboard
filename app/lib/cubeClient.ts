import cubejs from "@cubejs-client/core";

const CUBE_API_URL = process.env.NEXT_PUBLIC_CUBE_API_URL || "";
const CUBE_API_TOKEN = process.env.NEXT_PUBLIC_CUBE_API_TOKEN || "";

export const cubejsApi = cubejs(CUBE_API_TOKEN, {
  apiUrl: `${CUBE_API_URL}/cubejs-api/v1`,
});
