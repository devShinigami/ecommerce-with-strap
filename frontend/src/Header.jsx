import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket, MenuRounded } from "@mui/icons-material";
import Drawer from "./Drawercomp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.cart.products);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-black sticky top-0 z-50 px-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center h-24 w-24">
          <h1
            onClick={() => navigate("/")}
            className="text-4xl text-white cursor-pointer"
          >
            Shop.
          </h1>
        </div>
        <div className="items-center md:flex">
          <div className="m-3 relative text-white">
            <Link to={"/checkoutpage"}>
              <button className="bg-black hover:bg-gray-700 text-white py-2 rounded-2xl px-4 ">
                <ShoppingBasket />
              </button>
            </Link>
            <div className="absolute rounded-full bg-white text-black top-[-10px] right-[-5px] font-bold px-2">
              <p className="text-black">{products.length}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
