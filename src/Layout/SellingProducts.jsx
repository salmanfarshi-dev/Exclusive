import React, { useRef, useState, useEffect } from "react";
import Container from "../Component/Container";
import Today from "../Component/Today";
import Subheading from "../Component/Subheading";
import Cards from "../Component/Cards";
import Button from "../Component/Button";
import { useParams } from "react-router-dom";

function SellingProducts() {

   let [data, setData] = useState([]);
  let [show, setShow] = useState(4);

  let param = useParams()

  // back er api use 


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <section className="mb-[168px]">
      <Container>
        <Today text="Categories" />
        <div className="flex justify-between items-center">
          <Subheading text="Browse By Category" className="mt-5" />

          <div className=" text-center">
          {show < data.length && (
            <Button
              onClick={() => setShow(show + 26)}
              text="View All "
            />
          )}
        </div>

         
        </div>

        <div className="mt-16 flex justify-between items-center w-full">
          <div className="flex flex-wrap  items-center gap-[30px]">
            {data.slice(0, show).map((item) => (
              <Cards
                id={item.id}
                src={item.thumbnail}
                tittle={item.title}
                regular={item.price}
                discount={item.discountPercentage}
                list={item.stock}
                badge="-35%"
              />
            ))}
          </div>
        </div>
              </Container>
    </section>
  );
}

export default SellingProducts;
