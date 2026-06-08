import React, { useRef, useState, useEffect } from "react";
import Container from "../Component/Container";
import Today from "../Component/Today";
import Subheading from "../Component/Subheading";
import Cards from "../Component/Cards";
import Button from "../Component/Button";

function Product() {
  let [data, setData] = useState([]);
  let [show, setShow] = useState(4);


  // back er api use 


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <section className="mb-[168px]">
      <Container>
        <Today text="Our Products" />
        <div className="flex justify-between items-center">
          <Subheading text="Explore Our Products" className="mt-5" />
         
        </div>

        <div className="mt-16 flex justify-between items-center w-full">
          <div className="flex flex-wrap  items-center gap-[30px]">
            {data.slice(0, show).map((item) => (
              <Cards
                src={item.thumbnail}
                tittle={item.title}
                regular={item.price}
                discount={item.discountPercentage}
                list={item.stock}
                badge="new"
              />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          {show < data.length && (
            <Button
              onClick={() => setShow(show + 4)}
              text="View All Products"
            />
          )}
        </div>
      </Container>
    </section>
  );
}

export default Product;
