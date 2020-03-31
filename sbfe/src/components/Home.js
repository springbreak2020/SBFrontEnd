import React, { useEffect } from "react";
import airtableAuth from "./utils/airtableAuth";

export const Home = () => {
  useEffect(() => {
    airtableAuth()
      .get("https://api.airtable.com/v0/appcaKbHDurIj9YWs/User")
      .then(res => console.log(res));
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
