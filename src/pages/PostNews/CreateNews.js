import React, { useState } from "react";
import { Col, Row } from "antd";
import { useForm } from "react-hook-form";
import PreviewPost from "./PreviewPost";
import Image from "next/image";
import RootLayout from "@/Components/Layouts/RootLalyout";

const NewsPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const onSubmit = async (data) => {
    setUserData({ ...data, image_url: imagePreview });
  };
  return (
    <Row gutter={24} style={{ width: "100%", margin: "auto" }}>
      <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <h1> Post New News</h1>
          <Row gutter={[24]}>
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <input
                style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                placeholder="Id"
                {...register("id", { required: true })}
                aria-invalid={errors.id ? "true" : "false"}
              />
              {errors.id?.type === "required" && (
                <p role="alert">Id is required</p>
              )}
            </Col>
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <input
                style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                placeholder="Title"
                {...register("title", { required: "Title is required" })}
                aria-invalid={errors.title ? "true" : "false"}
              />
              {errors.title && <p role="alert">{errors.title.message}</p>}
            </Col>
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <input
                className="emailWidth"
                style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                placeholder="Email"
                type="email"
                {...register("mail", { required: "Email is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.mail && <p role="alert">{errors.mail.message}</p>}
            </Col>
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <input
                style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                placeholder="Category"
                type="category"
                {...register("category", {
                  required: "Category is required",
                })}
                aria-invalid={errors.category ? "true" : "false"}
              />
              {errors.category && <p role="alert">{errors.category.message}</p>}
            </Col>
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <input
                style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                placeholder="Author Name"
                type="authorName"
                {...register("authorName", {
                  required: "Author Name is required",
                })}
                aria-invalid={errors.authorName ? "true" : "false"}
              />
              {errors.authorName && (
                <p role="alert">{errors.authorName.message}</p>
              )}
            </Col>
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <textarea
                style={{ width: "100%", margin: "8px 0px", padding: "8px" }}
                placeholder="Description"
                type="description"
                {...register("description", {
                  required: "Description is required",
                })}
                aria-invalid={errors.description ? "true" : "false"}
              />
              {errors.description && (
                <p role="alert">{errors.description.message}</p>
              )}
            </Col>
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <label
                className="UploadImage"
                htmlFor="picture"
                name="image"
                style={{
                  display: "block",
                  cursor: "pointer",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  textAlign: "center",
                  width: "100%",
                  margin: "8px 0px",
                }}
              >
                Upload Image
              </label>
              {/* <input
                style={{ display: "none" }}
                id="picture"
                type="file"
                name="image" // Make sure the name attribute is "image"
                accept="image/*"
                {...register("picture", {
                  required: "Image is required",
                })}
                onChange={handleImageChange}
              /> */}

              {/* <input
               style={{ display: "none" }}
               type="file"
               id="picture"
                {...register("picture", {
                  required: "Recipe picture is required",
                })}
               
              /> */}
              <input
                type="file"
                style={{ display: "none" }}
                name="picture" // Make sure the name attribute matches the expected field name
                accept="image/*"
                id="picture"
                {...register("picture", {
                  required: "Image is required",
                })}
                onChange={handleImageChange}
              />
              {imagePreview && (
                <Image
                  width={150}
                  height={150}
                  src={imagePreview}
                  alt="Selected Image"
                />
              )}
            </Col>
            {/* Rest of your form elements */}
            <Col
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <input
                style={{
                  width: "100%",
                  margin: "8px 0px",
                  padding: "8px",
                  background: "green",
                }}
                type="submit"
              />
            </Col>
          </Row>
        </form>
      </Col>
      <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
        <h1>Preview your news Before Submit</h1>
        <PreviewPost userData={userData} />
      </Col>
    </Row>
  );
};

export default NewsPost;

NewsPost.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
