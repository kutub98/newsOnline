import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Col, Image, Row } from "antd";
import Link from "next/link";
import React from "react";

const AllNews = ({ allNews }) => {
  const { Meta } = Card;
  
  return (
    <div>
      <Row gutter={14}>
        {allNews?.map((news) => (
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            key={news.id}
          >
            <Card
              hoverable
              style={{ margin: "12px" }}
              cover={
                <Image
                  alt="example"
                  width={"100%"}
                  height={"200px"}
                  src={news?.image_url}
                />
              }
            >
              <Meta title={news.title} />
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  color: "gray",
                  margin: "10px 0px",
                }}
              >
                <span>
                  <CalendarOutlined /> {news.release_date}
                </span>
                <span>
                  <CommentOutlined /> {news.comment_count}
                </span>
                <span>
                  <ProfileOutlined /> {news.category}
                </span>
              </p>

              <p style={{ fontSize: "20px", textAlign: "justify" }}>
                {news.description.length > 100
                  ? news.description.slice(0, 40) + "..."
                  : news.description}
              </p>
              <Link
                href={`/News/${news.id} `}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "300",
                }}
              >
                Keep Reading <ArrowRightOutlined />
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllNews;
