import React, {useState} from "react";
import Container from "../Component/Container";
import Nextpage from "../Component/Nextpage";
import Image from "../Component/Image";
import Gamepad from "../assets/gamepad.png";
import Input from "../Component/Input";
function CardsTotal() {
  const [quantity, setQuantity] = useState(2);
  return (
    <section className="mt-20 mb-[140px]">
      <Container>
        <Nextpage prev="Home" current="Card" />

        <div className="mt-20">
          <div className="mb-[64px] flex justify-between px-10 py-6">
            <p className="text-black text-[16px] font-normal">Product</p>
            <p className="text-black text-[16px] font-normal">Price</p>
            <p className="text-black text-[16px] font-normal">Quantity</p>
            <p className="text-black text-[16px] font-normal">Subtotal</p>
          </div>

          <div className="mt-10 flex flex-col gap-y-10">
            <div className="px-10 py-6 bg-white shadow-lg flex items-center justify-between">
              <div className="flex gap-x-5 items-center">
                <div className="">
                  <Image
                    src={Gamepad}
                    className="w-[54px] h-[54px] object-cover"
                  />
                </div>
                <p className="text-[16px] text-black font-normal">
                  LCD Monitor
                </p>
              </div>
              <p className="text-[16px] text-black font-normal">$550</p>
              <Input
                type="number"
                min="0"
                max="20"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-[70px] border text-center pt-2 rounded-[4px] border-black/40 px-2"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CardsTotal;
