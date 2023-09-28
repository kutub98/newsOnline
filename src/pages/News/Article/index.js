import RootLayout from "@/Components/Layouts/RootLalyout";
import Head from "next/head";
import React from "react";

const AriticalePage = () => {
  return (
    <div>
      <Head>
        <title>This Artical</title>
      </Head>
      <div>
        <h1>This Artical Page</h1>
      </div>
    </div>
  );
};

export default AriticalePage;
AriticalePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
