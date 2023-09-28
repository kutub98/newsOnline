import RootLayout from "@/Components/Layouts/RootLalyout";
import AllNews from "@/Components/UI/AllNews";
import { useGetNewsQuery } from "@/Redux/Api/app";
// import AllNews from "@/Components/UI/AllNews";
import React from "react";
// import getStaticProps from "../index"
const NewsPage = () => {
  const {data, isError, isLoading, isSuccess}= useGetNewsQuery()
  // console.log(data , "newsPage")
  return (
    <div style={{ marginTop: "" }}>
      <AllNews allNews={data}/>
      <h1>This news page</h1>
    </div>
  );
};

export default NewsPage;
NewsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
