import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loading from "./Loading";
import CountDown from "./countDown";
function Bannner() {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/banners?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setdata(res.data.data);
        setLoading(false);
        console.log(res);
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
        <>
          <div className="hero bg-black text-white max-w-7xl p-8 lg:rounded-xl m-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data[0]?.attributes?.image?.data[0]?.attributes?.url
                }
                className="max-w-sm rounded-lg w-64 h-64 animate-up-down ease-linear"
              />
              <div>
                <h1 className="text-2xl font-poppins tracking-widest">
                  {data[0]?.attributes?.productName}
                </h1>
                <h1 className="text-5xl font-bold">
                  {data[0]?.attributes?.punchLine} in{" "}
                  <span className="text-red-500">
                    {data[0]?.attributes?.salePrice}$
                  </span>
                </h1>

                <p className="py-6">{data[0]?.attributes?.productType}</p>
                <button className="bg-red-500 py-2 px-4 rounded-xl ">
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
          <div className="text-center max-w-7xl rounded-xl m-auto flex justify-center items-center bg-gray-200 p-4 my-4">
            <div>
              <h1 className="font-poppins text-2xl tracking-wider font-bold">
                Sale Ends in
              </h1>
              <CountDown deadLine={data[0]?.attributes?.deadLine} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Bannner;
