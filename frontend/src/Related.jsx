import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

function Related({ item, img }) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&filters[related][$eq]=${item}`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setdata(res.data.data);

        console.log(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [item]);

  return (
    <>
      <div>
        <div className=" border-b-black border-b-2 w-3/4 m-auto lg:w-2/4">
          <motion.h1
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold font-poppins text-3xl text-center lg:text-5xl p-4"
          >
            Related Products
          </motion.h1>
        </div>
      </div>

      <div className="flex flex-wrap max-w-7xl m-auto my-8 items-center justify-center">
        {data.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default Related;
