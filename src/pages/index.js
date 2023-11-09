import Head from "next/head";
import RootLayout from "@/Components/Layouts/RootLalyout";
import Banner from "@/Components/UI/Banner";
import AllNews from "@/Components/UI/AllNews";

export default function HomePage({ allNews }) {
  // console.log(allNews)

  // const { data, isLoading, isError, isSuccess, error } = useGetNewsQuery();
  // console.log(data, "from HomePage")
  return (
    <>
      <Head>
        <title>Home News-Online</title>
      </Head>
      <div>
        <Banner />
        <AllNews allNews={allNews} />
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
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
// export const patchData = async ()=>{
//   const res = await fetch("http://localhost:3000/news");
//   const data = await res.json();
//   console.log(data.data);
//   return {
//     props: {
//       allNews: data.data,
//     },
//   };
// }
