import React, { useState, useEffect } from "react";
import { Col, Image, Row, Spin } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import RootLayout from "@/Components/Layouts/RootLalyout";

const PreviewPost = ({ userData }) => {
  // console.log(userData, "previewPost")
  const [loading, setLoading] = useState(true);
  const [newsData, setnewsData] = useState({});

  useEffect(() => {
    if (userData && userData.id) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [userData]);

  const handleToSubmitData = async (e) => {
    e.preventDefault();

    // Access the form data from the newsData state
    const newsDataValues = {
      id: newsData.id || (userData && userData.id) || "",
      title: newsData.title || (userData && userData.title) || "",
      mail: newsData.mail || (userData && userData.mail) || "",
      category: newsData.category || (userData && userData.category) || "",
      authorName:
        newsData.authorName || (userData && userData.authorName) || "",
      description:
        newsData.description || (userData && userData.description) || "",
        image_url: userData && userData.image_url ? userData.image_url : "",
    };

    if (newsDataValues.image_url) {
      try {
        const formData = new FormData();
        const selectedFile = newsDataValues.image_url; 
        
        if (selectedFile) {
          // Decode base64 image data
          const binaryImageData = atob(newsDataValues.image_url.split(",")[1]);

          // Create a typed array to store binary data
          const typedArray = new Uint8Array(binaryImageData.length);
          for (let i = 0; i < binaryImageData.length; i++) {
            typedArray[i] = binaryImageData.charCodeAt(i);
          }

          // Create a Blob from the typed array
          const blob = new Blob([typedArray]);

          // Append the blob to the FormData
          formData.append("image", blob);

          const imageUrl =
            "https://api.imgbb.com/1/upload?key=0b317200a3c4d4be13c0b8e44d4af738";

          const response = await fetch(imageUrl, {
            method: "POST",
            body: formData,
          });

          // Check if the response status is OK (HTTP 200)
          if (response.ok) {
            const responseData = await response.json(); // Parse response as JSON
            console.log("Success:", responseData.data);
          

            fetch("api/news", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newsDataValues),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data, "fetch post")
                if (data.insertedId) {
                  alert("news successfull posted");
                }
              });

          } else {
            const errorData = await response.json(); // Parse error response as JSON
            console.error("Error:", errorData);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setnewsData(newsDataValues);
      // post to mongodb
      
    }
  };

  const handleInputChange = (e, fieldName) => {
    setnewsData({
      ...newsData,
      [fieldName]: e.target.value,
    });
  };

  // console.log(newsData);
  return (
    <div className="">
      {loading ? (
        <div>
          <Spin />
          Waiting for Preview
        </div>
      ) : (
        <form gutter={24} onClick={handleToSubmitData}>
          <Row gutter={24} style={{ display: "flex" }}>
            {/* id */}
            <Col
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <label style={{ display: "block", alignItems: "center" }}>
                ID
                {userData && userData.id && (
                  <input
                    name="id"
                    style={{
                      width: "100%",
                      padding: "8px",
                      margin: "8px auto",
                    }}
                    placeholder=""
                    defaultValue={userData?.id}
                    onChange={(e) => handleInputChange(e, "id")}
                  />
                )}
              </label>
            </Col>
            {/* Title */}
            <Col
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <label style={{ display: "block", alignItems: "center" }}>
                Title
                <input
                  name="title"
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "8px auto",
                  }}
                  placeholder=""
                  defaultValue={userData?.title}
                  onChange={(e) => handleInputChange(e, "title")}
                />
              </label>
            </Col>
            {/* Mail */}
            <Col
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <label style={{ display: "block", alignItems: "center" }}>
                Email
                <input
                  name="mail"
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "8px auto",
                  }}
                  placeholder=""
                  defaultValue={userData?.mail}
                  onChange={(e) => handleInputChange(e, "mail")}
                />
              </label>
            </Col>
            {/* Category */}
            <Col
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <label style={{ display: "block", alignItems: "center" }}>
                Category
                <input
                  name="category"
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "8px auto",
                  }}
                  placeholder=""
                  defaultValue={userData?.category}
                  onChange={(e) => handleInputChange(e, "category")}
                />
              </label>
            </Col>
            {/* Author Name */}
            <Col
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <label style={{ display: "block", alignItems: "center" }}>
                Author Name
                <input
                  name="authorName"
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "8px auto",
                  }}
                  placeholder=""
                  defaultValue={userData?.authorName}
                  onChange={(e) => handleInputChange(e, "authorName")}
                />
              </label>
            </Col>
            {/* Description */}
            <Col
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <label style={{ display: "block", alignItems: "center" }}>
                Description
                <input
                  name="description"
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "8px auto",
                  }}
                  placeholder=""
                  defaultValue={userData?.description}
                  onChange={(e) => handleInputChange(e, "description")}
                />
              </label>
            </Col>
            {/* Image */}
            <Col
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              {userData.image_url ? (
                <div style={{ display: "block", alignItems: "center" }}>
                  Profile
                  <Image
                    src={userData.image_url}
                    alt="preview"
                    width={"150px"}
                    height={"150px"}
                  />
                </div>
              ) : (
                <h4 style={{ color: "red" }}>
                  <WarningOutlined style={{ marginRight: "25px" }} />
                  Please upload an image
                </h4>
              )}
            </Col>
            {/* Submit button */}
            {userData.image_url ? (
              <Col
                md={{ span: 24 }}
                lg={{ span: 24 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                <input
                  name=""
                  style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                  type="submit"
                />
              </Col>
            ) : (
              <Col
                md={{ span: 24 }}
                lg={{ span: 24 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                <input
                  name=""
                  disabled
                  style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                  type="submit"
                />
              </Col>
            )}
          </Row>
        </form>
      )}
    </div>
  );
};

export default PreviewPost;

PreviewPost.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
