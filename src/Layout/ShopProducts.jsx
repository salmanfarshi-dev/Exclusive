import React, { useState } from "react";
import Container from "../Component/Container";
import { useSelector } from "react-redux";
import Nextpage from "../Component/Nextpage";
import Bannerlist from "../Component/Bannerlist";
import PaginatedItems from "../Component/PaginatedItems";

function ShopProducts() {
 

  let [select, setSelect] = useState(6)

  let handleselect=(e)=>{
       setSelect(Number(e.target.value))
  }

  return (
    <section className="pt-20 pb-[104px]">
      <Container>
        

        <div className="flex">
          <div className="w-3/12">
            <div className="flex flex-col gap-y-[16px]">
              <h4 className="font-bold text-xl text-[#262626]">
                Shop by Category
              </h4>
              <Bannerlist text="Woman’s Fashion" />
              <Bannerlist text="Men’s Fashion" />
              <Bannerlist text="Electronics" />
              <Bannerlist text="Home & Lifestyle" />
              <Bannerlist text="Medicine" />
              <Bannerlist text="Sports & Outdoor" />
              <Bannerlist text="Baby’s & Toys" />
              <Bannerlist text="Groceries & Pets" />
              <Bannerlist text="Health & Beauty" />
            </div>

            <div className="mt-10">
              <h4 className="font-bold text-xl text-[#262626]">
                Shop by Color
              </h4>

              <div className="mt-4 flex flex-col gap-y-2">
                <div className="flex items-center gap-x-3">
                  <div className="size-3 bg-black rounded-full"></div>

                  <p className="text-[16px] text-[#767676] font-normal">
                    Color 1
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="size-3 bg-[#FF0000] rounded-full"></div>

                  <p className="text-[16px] text-[#767676] font-normal">
                    Color 2
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="size-3 bg-[#00FF38] rounded-full"></div>

                  <p className="text-[16px] text-[#767676] font-normal">
                    Color 3
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-9/12">
        <div className="flex justify-end mb-10 items-center">
              <label htmlFor="">Show: </label>
            <select value={select} onChange={handleselect} className="ml-3 border border-black/50 py-1 px-2 rounded focus:outline-none">
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
            </select>
        </div>

            <PaginatedItems itemsPerPage={select} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ShopProducts;
