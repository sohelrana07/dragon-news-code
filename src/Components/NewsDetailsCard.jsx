import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, category_id } = news;

  return (
    <div className="card bg-base-100 border border-gray-200 shadow-sm">
      {/* Image */}
      <figure className="p-6 ">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-auto object-cover rounded-sm"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-6">
        {/* Title */}
        <h2 className="card-title text-lg md:text-xl font-semibold text-gray-800 leading-snug">
          {title}
        </h2>

        {/* Meta info */}
        <p className="text-sm text-gray-500 mt-2">
          {new Date(author?.published_date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          | <span className="text-primary font-medium">{author?.name}</span>
        </p>

        {/* Details */}
        <p className="mt-3 text-gray-700 leading-relaxed text-justify">
          {details}
        </p>
      </div>

      {/* Bottom Button - Fixed Design */}
      <div className="bg-transparent border-t border-gray-200 p-6">
        <Link
          to={`/category/${category_id}`}
          className="inline-flex items-center gap-2 bg-secondary text-white font-medium px-5 py-2"
        >
          <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
