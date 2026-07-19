import React, {useState} from "react";
import Container from "../Component/Container";
import Nextpage from "../Component/Nextpage";
import Image from "../Component/Image";
import Gamepad from "../assets/gamepad.png";
import Input from "../Component/Input";
import Button from '@mui/material/Button';
import ButtonTwo from "../Component/Button"
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementcart,
  decrementcart,
  deletecart,
} from "../Slices/addToCartSlice";



function CardsTotal() {

  const data = useSelector((state) => state.cartitem.cartvalue);

const dispatch = useDispatch();
const handleIncrement = (item) => {
  dispatch(incrementcart(item));
};

const handleDecrement = (item) => {
  dispatch(decrementcart(item));
};

const handleDelete = (item) => {
  dispatch(deletecart(item));
};

  let prev = useSelector((state)=>(state.bradcrumb.previousvalue));
  let next = useSelector((state)=>(state.bradcrumb.currentvalue));

  let total = 0;

data.forEach((item) => {
  total += item.price * item.quantity;
});

  const [quantity, setQuantity] = useState(2);
  return (
    <section className="mt-20 mb-[140px]">
      <Container>
       

        <div className="mt-20">
          <div className="mb-[64px] grid grid-cols-12 px-10 py-6">
            <p className="text-black text-[16px] font-normal col-span-3">Product</p>
            <p className="text-black text-[16px] font-normal col-span-3 ml-16">Price</p>
            <p className="text-black text-[16px] font-normal col-span-3 ml-16">Quantity</p>
            <p className="text-black text-[16px] font-normal col-span-3 ml-16">Subtotal</p>
          </div>

          <div className="mt-5 flex flex-col gap-y-1">
            {data.map((item) => (
  <div
    key={item.id}
    className="px-10 py-6 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] text-center grid grid-cols-12 items-center mt-6"
  >
    <div className="w-[300px] flex items-center gap-5 col-span-3">
      <img
        src={item.image}
        className="w-[80px] h-[80px] object-cover"
      />

      <p className="w-full truncate">{item.tittle}</p>
    </div>

    <p className="w-[180px] text-center col-span-3">
      ${item.price}
    </p>

    <div className="w-[180px] py-3 flex justify-center items-center gap-3 col-span-3 border ">
      <button className="text-xl" onClick={() => handleDecrement(item)}>
        -
      </button>

      <span>{item.quantity}</span>

      <button className="text-xl" onClick={() => handleIncrement(item)}>
        +
      </button>
    </div>

    <p className="w-[180px] text-center col-span-3">
      ${item.price * item.quantity}
    </p>

   
  </div>
))}
          </div>

          <div className="mt-6 mb-20 flex justify-between items-center">
           <Link to="/home"> 
           <Button className="!capitalize !text-[16px] !text-black !border-black !border-opacity-20 !py-2 !px-[48px]" variant="outlined">Return To Shop</Button></Link>
            <Button className="!capitalize !text-[16px] !text-black !border-black !border-opacity-20 !py-2 !px-[48px]" variant="outlined">Update Cart</Button>

          </div>

          <div className="flex justify-between items-start">
            <div className="flex gap-x-4 items-center">
              <Input placeholder="Coupon Code" className="w-[230px] py-4 px-4 text-[16px] border border-black/80 rounded-[4px]"/>
              <button className="bg-primary text-white font-poppins py-[16px] px-[48px] rounded-[4px] text-[16px] ">Apply Coupon</button>

            </div>

            <div className="border-2 border-black rounded-[4px] px-6 py-8 w-[470px]">
              <h5 className="text-xl font-medium text-black">Cart Total</h5>
              <div className="mt-6 pb-4 border-b border-black/50 flex items-center justify-between">
              <p className="text-[16px] font-normal text-black">Subtotal:</p>
              <p className="text-[16px] font-normal text-black">${total}</p>
              </div>
              <div className="mt-6 pb-4 border-b border-black/50 flex items-center justify-between">
              <p className="text-[16px] font-normal text-black">Shipping:</p>
              <p className="text-[16px] font-normal text-black">Free</p>
              </div>
              <div className="mt-6 pb-4 flex items-center justify-between">
              <p className="text-[16px] font-normal text-black">Total:</p>
              <p className="text-[16px] font-normal text-black">${total}</p>
              </div>
              <div className="text-center">
                <Link to="/checkout">
                <ButtonTwo text="Procees to checkout"/>
                
                </Link>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CardsTotal;
