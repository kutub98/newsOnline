/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Example = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const exampleHandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fileInput = form.elements.image;

    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const formData = new FormData();
      formData.append("image", selectedFile);
      const imageUrl =
        "https://api.imgbb.com/1/upload?key=0b317200a3c4d4be13c0b8e44d4af738";

      fetch(imageUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={exampleHandleSubmit}>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Selected Image"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        )}
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Example;
