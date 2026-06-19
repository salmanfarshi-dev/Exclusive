import React, {useState} from "react";
import Container from "../Component/Container";
import Nextpage from "../Component/Nextpage";
import Image from "../Component/Image";
import Gamepad from "../assets/gamepad.png";
import Input from "../Component/Input";
import Button from '@mui/material/Button';
import ButtonTwo from "../Component/Button"
import { useSelector } from "react-redux";




function CardsTotal() {

  let prev = useSelector((state)=>(state.bradcrumb.previousvalue));
  let next = useSelector((state)=>(state.bradcrumb.currentvalue));
  

  const [quantity, setQuantity] = useState(2);
  return (
    <section className="mt-20 mb-[140px]">
      <Container>
        <Nextpage prev={prev} current={next} />

        <div className="mt-20">
          <div className="mb-[64px] flex justify-between px-10 py-6">
            <p className="text-black text-[16px] font-normal">Product</p>
            <p className="text-black text-[16px] font-normal">Price</p>
            <p className="text-black text-[16px] font-normal">Quantity</p>
            <p className="text-black text-[16px] font-normal">Subtotal</p>
          </div>

          <div className="mt-10 flex flex-col gap-y-10">
            <div className="px-10 py-6 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center ">
              <div className="flex gap-x-5 items-center">
              
                  <Image src={Gamepad} alt="image" className="w-[100px]" />
                
                <p className="text-[16px] text-black font-normal">
                  LCD Monitor
                </p>
              </div>
              <p className="text-[16px] text-black font-normal pl-[250px]">$550</p>
              <Input
                type="number"
                min="0"
                max="20"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-[60px] border text-center pt-2 rounded-[4px] border-black/40 px-2 ml-[295px]"
              />
               <p className="text-[16px] text-black font-normal  ml-[295px]">$550</p>

            </div>
          </div>

          <div className="mt-6 mb-20 flex justify-between items-center">
            <Button className="!capitalize !text-[16px] !text-black !border-black !border-opacity-20 !py-2 !px-[48px]" variant="outlined">Return To Shop</Button>
            <Button className="!capitalize !text-[16px] !text-black !border-black !border-opacity-20 !py-2 !px-[48px]" variant="outlined">Update Cart</Button>

          </div>

          <div className="flex justify-between items-start">
            <div className="flex gap-x-4 items-center">
              <Input placeholder="Coupon Code" className="w-[300px] py-4 px-4 text-[16px] border border-black/80 rounded-[4px]"/>
              <ButtonTwo text="Apply Coupon" className="!py-1"/>

            </div>

            <div className="border-2 border-black rounded-[4px] px-6 py-8 w-[470px]">
              <h5 className="text-xl font-medium text-black">Cart Total</h5>
              <div className="mt-6 pb-4 border-b border-black/50 flex items-center justify-between">
              <p className="text-[16px] font-normal text-black">Subtotal:</p>
              <p className="text-[16px] font-normal text-black">$550</p>
              </div>
              <div className="mt-6 pb-4 border-b border-black/50 flex items-center justify-between">
              <p className="text-[16px] font-normal text-black">Shipping:</p>
              <p className="text-[16px] font-normal text-black">Free</p>
              </div>
              <div className="mt-6 pb-4 flex items-center justify-between">
              <p className="text-[16px] font-normal text-black">Total:</p>
              <p className="text-[16px] font-normal text-black">$550</p>
              </div>
              <div className="text-center">
                <ButtonTwo text="Procees to checkout"/>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CardsTotal;
