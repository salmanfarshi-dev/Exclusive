import Today from "../Component/Today";
import Container from "../Component/Container";
import React from "react";
import Subheading from "../Component/Subheading";
import Button from "../Component/Button";
import Cards from "../Component/Cards";
import Coat from "../assets/coat.png";
import Bag from "../assets/bag.png";
import Cpu from "../assets/cpu.png";
import Bookself from "../assets/booksells.png";
import { useState } from "react";
import BestSellingApi from '../BestSellingApi'

function SellingProducts() {

  let [show, setShow] = useState(4)
  return (
    <section>
      <Container>
        <Today text="This Month" />
        <div className="flex justify-between items-center mt-5">
          <Subheading text="Best Selling Products" />
          {
            show<BestSellingApi.length && <Button onClick={()=>setShow(show+4)} text="View All" />
          }
        </div>

        <div className="flex justify-between items-center mt-16 mb-[140px]">
           <div className="flex flex-wrap justify-between gap-6">
  {BestSellingApi.slice(0, show).map((item) => (
    <Cards
    className="hidden"
      key={item.id}
      src={item.image}
      tittle={item.tittle}
      
      discount={item.discount}
      regular={item.regular}
      list={item.list}
    />
  ))}
</div>
         
        </div>
      </Container>
    </section>
  );
}

export default SellingProducts;
