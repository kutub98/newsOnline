import RootLayout from "@/Components/Layouts/RootLalyout";
import React from "react";

const catchAllRoute = () => {
  return (
    <div>
      <h1>This is Catch route page</h1>
    </div>
  );
};

export default catchAllRoute;
catchAllRoute.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
