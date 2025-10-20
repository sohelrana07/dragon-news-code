import React, { useState } from "react";
// Importing icons from react-icons (Font Awesome)
import {
  FaRegEye, // Eye icon (for total views)
  FaStar, // Star icon (for rating)
  FaRegBookmark, // Empty bookmark (not saved)
  FaBookmark, // Filled bookmark (saved)
  FaShareAlt, // Share icon
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  // Destructure the news data
  const { title, author, thumbnail_url, details, rating, total_view, tags } =
    news;

  // State to handle bookmark toggle (true = saved)
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Toggle bookmark button
  const toggleBookmark = () => setIsBookmarked((prev) => !prev);

  return (
    <div className="card bg-base-100 shadow-lg border border-gray-200">
      {/* ---------- Header ---------- */}
      <div className="bg-base-200 flex items-center justify-between px-4 py-4">
        {/* Author info */}
        <div className="flex items-center gap-3">
          {/* Author image */}
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Bookmark + Share icons */}
        <div className="flex items-center gap-3 text-gray-500">
          {/* Bookmark button */}
          <button
            onClick={toggleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
            className="hover:text-primary focus:outline-none"
          >
            {isBookmarked ? (
              <FaBookmark className="text-primary text-lg" />
            ) : (
              <FaRegBookmark className="text-lg" />
            )}
          </button>

          {/* Share button */}
          <button
            aria-label="Share article"
            className="hover:text-primary focus:outline-none"
          >
            <FaShareAlt className="text-lg" />
          </button>
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="card-body">
        {/* News title */}
        <h2 className="card-title text-lg font-semibold">{title}</h2>

        {/* Thumbnail image */}
        <figure className="mt-2">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </figure>

        {/* News details (short text) */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-4 text-justify">{details}</p>

        {/* Read More button (gold text, left side) */}
        <div className="mt-2 text-left">
          <button className="text-yellow-500 font-medium hover:underline">
            Read More
          </button>
        </div>
      </div>

      {/* ---------- Footer ---------- */}
      <div className="flex justify-between items-center px-5 pb-4">
        {/* Rating section */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-sm font-medium text-gray-700">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Total views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye /> <span className="text-sm">{total_view}</span>
        </div>
      </div>

      {/* ---------- Tags ---------- */}
      <div className="px-5 pb-3 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="badge badge-outline text-xs capitalize">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
