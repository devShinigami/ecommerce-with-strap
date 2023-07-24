import { CancelOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "./Reducer";

const Checkoutpage = () => {
  const Dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total;
  };
  const SubtotalPrice = () => {
    let subtotal = totalPrice() + 90;
    return subtotal;
  };

  return (
    <section className="max-w-7xl m-auto min-h-screen">
      <div className="lg:flex gap-6">
        <div className="my-2 lg:w-full p-4 ">
          {products.length === 0 ? (
            <div className="flex items-center justify-center h-full w-full">
              <h1 className="font-bold text-4xl text-center ">
                <em> Sorry! Your cart is empty... </em>
              </h1>
            </div>
          ) : (
            products?.map((item) => (
              <div className="flex align items-center lg:w-full m-10 border-2 p-4 font-poppins uppercase justify-evenly text-xl">
                <img className="w-24 " src={item.image} alt="" />
                <h1 className="">{item?.title}</h1>

                <p className=" font-bold">
                  {item.quantity} x {item?.price}$
                </p>
                <button
                  onClick={() => Dispatch(deleteFromCart(item.id))}
                  className=""
                >
                  <CancelOutlined />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="md:m-10 mx-8 p-10 lg:w-full bg-gray-300 font-poppins text-lg rounded-2xl h-96">
          <h1 className="font-poppins text-2xl font-bold ">Summary</h1>
          <div className="flex justify-between w-3/4 m-auto my-6 font-bold">
            <p>Order Total</p>
            <p>{totalPrice()}$</p>
          </div>
          <div className="flex justify-between w-3/4 m-auto my-6 font-bold">
            <p>Shipping Cost</p>
            <p>90$</p>
          </div>
          <div className="p-4 font-bold rounded-lg flex bg-black text-white justify-between w-3/4 m-auto my-6">
            <p>SubTotal</p>
            <p>{SubtotalPrice()}$</p>
          </div>
          {products.length === 0 ? (
            ""
          ) : (
            <button className="ml-16 bg-black rounded-xl text-white py-2 px-4 hover:bg-gray-700 ">
              Pay Now!
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Checkoutpage;
