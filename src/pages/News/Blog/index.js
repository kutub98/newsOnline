import RootLayout from "@/Components/Layouts/RootLalyout";
import Head from "next/head";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <Head>
        <title>Blog Section</title>
      </Head>
      <div>
        <h1>This is Blog PAGE</h1>
      </div>
    </div>
  );
};

export default BlogPage;
BlogPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
