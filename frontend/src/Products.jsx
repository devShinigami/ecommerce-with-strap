import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { motion } from "framer-motion";
import Loading from "./Loading";

const Products = () => {
  const [data, setdata] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [activecategory, setactivecategory] = useState(10);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setdata(res.data.data);
        setfiltered(res.data.data);

        console.log(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Filter
            data={data}
            setfiltered={setfiltered}
            activecategory={activecategory}
            setactivecategory={setactivecategory}
          />

          <motion.div
            layout
            className="flex flex-wrap justify-center max-w-7xl m-auto "
          >
            {filtered.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Products;
