// GetSingleNewsPage.js

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

const GetSingleNewsPage = ({ singleNews }) => {
  return (
    <div style={{ margin: "20px 10px" }}>
      <Row gutter={16}>
        <Col lg={{ span: 10 }} span={24}>
          <Image src={singleNews?.image_url} alt="" />
        </Col>
        <Col lg={{ span: 14 }} span={24}>
          <h1>{singleNews?.title}</h1>
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
              <CalendarOutlined /> {singleNews?.release_date}
            </Col>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <CommentOutlined /> {singleNews?.comment_count}
            </Col>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <ProfileOutlined /> {singleNews?.category}
            </Col>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <UserOutlined /> {singleNews?.author}
            </Col>
          </Row>
          <p>{singleNews?.description}</p>
        </Col>
      </Row>
    </div>
  );
};

GetSingleNewsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default GetSingleNewsPage;

// [newsId].js

export const getServerSideProps = async ({ params }) => {
  
  const { newsId } = params; // Destructure 'id' directly from 'params'
  

  const data = await fetch(`http://localhost:3000/api/${newsId}`);
  const result = await data.json();
  console.log(result, "Single DATA");

  return {
    props: {
      singleNews: result.data || null, // Pass the fetched data as a prop
    },
  };
};
