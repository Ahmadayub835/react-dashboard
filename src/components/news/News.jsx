import React, { useEffect, useState } from "react";
import CardFilter from "../CardFilter";
import NewsPostItem from "./NewsPostItem";

function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleNews = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => {
        console.log("News data:", data);
        setNews(data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card mt-[15px] border-none">
      <CardFilter filterChange={handleNews} />
      <div className="card-body pb-0 pr-[10px]">
        <h5 className="card-title">
          News &amp; Updates
          <span> | {filter}</span>
        </h5>
        {news && news.length > 0 ? (
          news.map((latest) => (
            <NewsPostItem key={latest._id} latest={latest} />
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
}

export default News;
