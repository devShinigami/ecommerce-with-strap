import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "./Reducer";
import Related from "./Related";

function Productdetails() {
  const dispatch = useDispatch();
  const [details, setdetails] = useState([]);
  const [img, setimg] = useState();
  const [quantity, setQuantity] = useState(1);
  const Params = useParams();
  const [ToCart, setToCart] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/products/${Params.id}?populate=*`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(res.data.data);
        setdetails(res.data.data);
        setimg("");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [Params.id]);

  const handleFunc = () => {
    dispatch(
      addToCart({
        id: details.id,
        title: details.attributes.name,
        price: details?.attributes?.price,
        description: details?.attributes?.desc,
        image:
          process.env.REACT_APP_UPLOAD_URL +
          details?.attributes?.coverimage?.data[1]?.attributes?.url,
        quantity,
      })
    );
    setToCart(true);
    setTimeout(() => {
      setToCart(false);
    }, 3000);
  };

  return (
    <>
      <section className="font-poppins min-h-screen md:flex md:items-center md:justify-center bg-gray-200 md:bg-white">
        <div className="lg:flex max-w-7xl bg-gray-200 p-16 md:items-center md:justify-evenly rounded-2xl md:shadow-black md:shadow-md ">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:w-1/2 mx-6"
          >
            <div className="flex justify-between items-center w-full">
              <h1 className="font-bold md:text-5xl text-3xl uppercase">
                {details?.attributes?.name}
              </h1>
              <p className="text-black font-bold text-2xl mx-4">
                {details?.attributes?.price}$
              </p>
            </div>

            <p className="leading-relaxed tracking-widest m-2">
              {details?.attributes?.desc}
            </p>

            <div className="flex gap-2 items-center justify-center md:justify-start ">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  details?.attributes?.coverimage?.data[1]?.attributes?.url
                }
                alt=""
                className="w-16 h-16 object-contain cursor-pointer hover:scale-110 duration-500 lg:w-24 lg:h-24"
                onClick={() =>
                  setimg(
                    process.env.REACT_APP_UPLOAD_URL +
                      details?.attributes?.coverimage?.data[1]?.attributes?.url
                  )
                }
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  details?.attributes?.coverimage?.data[0]?.attributes?.url
                }
                alt=""
                className="w-16 h-16 object-contain cursor-pointer hover:scale-110 duration-500 lg:w-24 lg:h-24"
                onClick={() =>
                  setimg(
                    process.env.REACT_APP_UPLOAD_URL +
                      details?.attributes?.coverimage?.data[0]?.attributes?.url
                  )
                }
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  details?.attributes?.coverimage?.data[2]?.attributes?.url
                }
                alt=""
                className="w-16 h-16 object-contain cursor-pointer hover:scale-110 duration-500 lg:w-24 lg:h-24"
                onClick={() =>
                  setimg(
                    process.env.REACT_APP_UPLOAD_URL +
                      details?.attributes?.coverimage?.data[2]?.attributes?.url
                  )
                }
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  details?.attributes?.coverimage?.data[3]?.attributes?.url
                }
                alt=""
                className="w-16 h-16 object-contain cursor-pointer hover:scale-110 duration-500 lg:w-24 lg:h-24"
                onClick={() =>
                  setimg(
                    process.env.REACT_APP_UPLOAD_URL +
                      details?.attributes?.coverimage?.data[3]?.attributes?.url
                  )
                }
              />
            </div>
            <div className="flex space-x-2 p-4 justify-center lg:justify-start">
              <button
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
                className="bg-black py-2 px-4 text-white rounded-xl hover:bg-gray-700"
              >
                -
              </button>
              <p className="font-bold text-2xl">{quantity}</p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-black py-2 px-4 text-white rounded-xl hover:bg-gray-700"
              >
                +
              </button>
            </div>

            {/* <Link to={"/checkoutpage"}> */}
            <button
              onClick={handleFunc}
              className="bg-black text-white rounded-2xl py-2 px-4 uppercase m-2 hover:bg-gray-700"
            >
              add to cart
            </button>
            {/* </Link> */}
          </motion.div>
          <div className="w-64 h-64 lg:h-96 lg:w-96 object-contain flex-col items-center justify-center m-auto">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
      <Related item={details?.attributes?.related} />
      {ToCart && (
        <div className="toast toast-start">
          <div className="alert alert-info text-white text-xl bg-black">
            <div>
              <span>Added to Cart</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Productdetails;
