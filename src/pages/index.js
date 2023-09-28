import Head from "next/head";
import { Inter } from "next/font/google";
import RootLayout from "@/Components/Layouts/RootLalyout";
import Banner from "@/Components/UI/Banner";
import AllNews from "@/Components/UI/AllNews";
import { useGetNewsQuery } from "@/Redux/Api/app";
const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ allNews }) {
  // console.log(allNews)

  const {data, isLoading, isError, isSuccess, error} = useGetNewsQuery();
  // console.log(data, "from HomePage")
  return (
    <>
      <Head>
        <title>Home News-Online</title>
      </Head>
      <div>
        <Banner />
        <AllNews allNews={data} />
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       allNews: data,
//     },
//   };
// };
