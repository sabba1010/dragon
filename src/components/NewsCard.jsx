import React from 'react';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-md">
      <div className="card-body">
        {/* Author Section */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={author.img} alt={author.name} />
              </div>
            </div>
            <div>
              <h2 className="font-semibold">{author.name}</h2>
              <p className="text-sm text-gray-500">
                {new Date(author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM7 8a3 3 0 11-6 0 3 3 0 016 0zM19 8a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>

        {/* Image */}
        <figure className="my-3">
          <img src={thumbnail_url} alt="News" className="rounded-lg" />
        </figure>

        {/* Description */}
        <p className="text-sm text-gray-700">
          {details.slice(0, 180)}...
        </p>
        <p className="text-sm text-primary font-semibold mt-1 cursor-pointer">
          Read More
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-sm">
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name={`rating-${news.id}`}
                  className="mask mask-star-2 bg-orange-400"
                  checked={i === rating.number - 1}
                  readOnly
                />
              ))}
            </div>
            <span className="ml-1 font-medium">{rating.number}</span>
            <span className="badge badge-success text-xs capitalize">{rating.badge}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405M17 13V9a5 5 0 00-10 0v4m12 4H7a4 4 0 01-4-4V9a4 4 0 014-4h4"
              />
            </svg>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
