import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState({});

  //   console.log({data, id, news})

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);

    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="mt-14">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-9">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        {/* aside */}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
