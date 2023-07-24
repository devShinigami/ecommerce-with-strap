import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link to={`/productdetails/${item?.id}`}>
      <motion.div
        layout
        className="relative flex w-64 flex-col rounded-xl bg-gray-200 bg-clip-border text-black shadow-gray-400 shadow-xl my-5 mx-4 lg:w-72 "
      >
        <div className="relative mx-4 mt-4 h-64 lg:h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-300">
          <img
            alt=""
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.image.data.attributes.url
            }
            className="h-full w-full object-cover hover:scale-110 transition-all duration-500 "
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased whitespace-nowrap overflow-hidden">
              {item?.attributes.name}
            </p>
          </div>

          <p className="block font-sans text-base font-medium leading-relaxed text-red-600 antialiased ">
            {item?.attributes.price}$
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Details
          </button>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProductCard;
