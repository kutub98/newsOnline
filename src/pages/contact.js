import RootLayout from "@/Components/Layouts/RootLalyout";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>This contact page</h1>
    </div>
  );
};

export default ContactPage;
ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
