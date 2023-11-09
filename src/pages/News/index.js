import RootLayout from "@/Components/Layouts/RootLalyout";
import AllNews from "@/Components/UI/AllNews";
// import { useGetNewsQuery } from "@/Redux/Api/app";
// import AllNews from "@/Components/UI/AllNews";
import React from "react";
// import getStaticProps from "../index"
const NewsPage = ({ allNews }) => {
  // const { data, isError, isLoading, isSuccess } = useGetNewsQuery();
  // console.log(data , "newsPage")
  return (
    <div>
      <AllNews allNews={allNews} />
    </div>
  );
};

export default NewsPage;
NewsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  console.log(data.data);
  return {
    props: {
      allNews: data.data || null,
    },
  };
};
