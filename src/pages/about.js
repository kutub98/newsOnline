import RootLayout from "@/Components/Layouts/RootLalyout";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
