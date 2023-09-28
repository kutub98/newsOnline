import RootLayout from "@/Components/Layouts/RootLalyout";
import React from "react";

const catchAllRoute = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <h1>This is Catch route page</h1>
    </div>
  );
};

export default catchAllRoute;
catchAllRoute.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
