import React from "react";

import RootLayout from "@/Components/Layouts/RootLalyout";
import NewsPost from "./CreateNews";

const CreateNewsPage = () => {
  return (
    <div className="PostNews" style={{ margin: "60px 20px auto auto" }}>
      <NewsPost />
    </div>
  );
};

export default CreateNewsPage;

CreateNewsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
