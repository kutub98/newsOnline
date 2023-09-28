import React from "react";
import { useRouter } from "next/router";
import RootLayout from "@/Components/Layouts/RootLalyout";
import { Col, Image, Row } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useGetSingleNewsByIdQuery } from "@/Redux/Api/app";


const GetSingleNewsPage = () => {

  const router = useRouter()
  const {newsId} = router.query

  const {data, isError, isLoading, isSuccess, error} = useGetSingleNewsByIdQuery(newsId)
  console.log(data, isError, "From Single Page")
  return (
    <div style={{ margin: "20px 10px", marginTop: "80px" }}>
      <Row gutter={16}>
        <Col lg={{ span: 10 }} span={24}>
          <Image src={data?.image_url} alt="" />
        </Col>
        <Col lg={{ span: 14 }} span={24}>
          <h1>{data?.title}</h1>
          <div
            style={{
              width: "98%",
              height: "4px",
              background: "black",
              margin: "auto",
            }}
          ></div>
          <Row gutter={24} style={{ marginTop: "10px" }}>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <CalendarOutlined /> {data?.release_date}
            </Col>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <CommentOutlined /> {data?.comment_count}
            </Col>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <ProfileOutlined /> {data?.category}
            </Col>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <UserOutlined /> {data?.author}
            </Col>
          </Row>
          <p>{data?.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default GetSingleNewsPage;

GetSingleNewsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const data = await fetch("http://localhost:5000/news");
//   const res = await data.json();
//   const paths = res.map((news) => ({
//     params: { newsId: news.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   const data = await fetch(`http://localhost:5000/news/${params.newsId}`);
//   const res = await data.json();
//   return {
//     props: {
//       allNews: res,
//     },
//   };
// };
