import * as contentful from "contentful";
/* import dotenv from "dotenv";
 
dotenv.config();


if (!process.env.REACT_APP_SPACE_ID || !process.env.REACT_APP_ACCESS_TOKEN) {
  throw new Error(
    "Space ID and Access Token are required in environment variables"
  );
} 
 */

export const client = contentful.createClient({
  space: "ojcck4r9mycx",
  accessToken: "VnVr3_Dibj4Sn6MzQUrilEEBduvNIaupszhRS-KOti0",
});
