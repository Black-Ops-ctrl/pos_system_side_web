import React, { useState } from "react";
import categoryImage from "../../assets/png/img_category.webp";

const categories = [
  { id: 1, name: "Electronics", products: 120, imageUrl: categoryImage },
  { id: 2, name: "Clothing", products: 250, imageUrl: categoryImage },
  { id: 3, name: "Furniture", products: 80, imageUrl: categoryImage },
  { id: 4, name: "Toys", products: 50, imageUrl: categoryImage },
  { id: 5, name: "Books", products: 300, imageUrl: categoryImage },
  { id: 6, name: "Grocery", products: 150, imageUrl: categoryImage },
];

const CategorySection = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Mobile par 2 categories initially, desktop par 5
  const categoriesToDisplay = showAll 
    ? categories 
    : categories.slice(0, window.innerWidth < 768 ? 2 : 5);
  
  return (
    <section className="mt-6 sm:mt-6 md:mt-8 lg:mt-10">
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold font-sans text-center mb-6 sm:mb-8">
        Explore Categories
      </h2>
      
      {/* Mobile: 1 column, Desktop: multiple columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4">
        {categoriesToDisplay.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-48 sm:h-40 md:h-44 lg:h-48 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-3 md:p-4 text-primary">
              <h3 className="text-lg sm:text-base md:text-lg font-semibold">
                {category.name}
              </h3>
              <p className="text-base sm:text-sm">
                {category.products} Products
              </p>
            </div>
            <button className="absolute bottom-3 right-3 sm:bottom-3 sm:right-3 bg-secondary text-white py-2 sm:py-1.5 px-4 sm:px-3 rounded-lg text-base sm:text-sm shadow-md hover:bg-opacity-80 transition-all">
              Open
            </button>
          </div>
        ))}
      </div>

      {categories.length > (window.innerWidth < 768 ? 2 : 5) && !showAll && (
        <div className="text-center mt-8 sm:mt-8 md:mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-secondary text-white py-3 px-8 font-helvetica rounded-full text-base sm:text-base shadow-lg hover:bg-opacity-80 transition-all"
          >
            View All Categories
          </button>
        </div>
      )}
    </section>
  );
};

export default CategorySection;