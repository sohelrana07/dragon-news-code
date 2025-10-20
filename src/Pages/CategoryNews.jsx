import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  // console.log(typeof id, data);

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(data);
    } else if (id === "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => String(news.category_id) === id
      );
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold">
        Total <span className="text-secondary">{categoryNews.length}</span> News
        Found
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
