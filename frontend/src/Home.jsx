import Bannner from "./Bannner";
import Products from "./Products";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-white lg:pt-8">
        <Bannner />
        <div className="-z-50 hidden md:block mb-10 max-w-7xl m-auto"></div>
        <div className="text-center mb-6 border-b-black border-b-2 w-2/4 md:w-1/4 m-auto p-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-poppins text-black text-3xl lg:text-5xl uppercase font-bold"
          >
            Products
          </motion.h1>
        </div>{" "}
        <section>
          <Products />
        </section>
      </div>
      <div className="min-h-screen"></div>
    </>
  );
};

export default Home;
