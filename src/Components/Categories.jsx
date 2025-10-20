import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="px-14 py-2.5 rounded-sm hover:bg-base-200 hover:shadow font-semibold text-accent"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
