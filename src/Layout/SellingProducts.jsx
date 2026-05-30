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

function SellingProducts() {
  return (
    <section>
      <Container>
        <Today text="This Month" />
        <div className="flex justify-between items-center mt-5">
          <Subheading text="Best Selling Products" />
          <Button text="View All" />
        </div>

        <div className="flex justify-between items-center mt-16 mb-[140px]">
          <Cards
            src={Coat}
            tittle="The north coat"
            regular="360"
            discount="260"
            list="65"
            className="hidden"
          />
          <Cards
            src={Bag}
            tittle="Gucci duffle bag"
            regular="1160"
            discount="960"
            list="60"
            className="hidden"
          />
          <Cards
            src={Cpu}
            tittle="RGB liquid CPU Cooler"
            regular="170"
            discount="160"
            list="65"
            className="hidden"
          />
          <Cards ReclassName="hidden"
            src={Bookself}
            tittle="Small BookSelf"
            regular=""
            discount="360"
            list="65"
            className="hidden"
          />
        </div>
      </Container>
    </section>
  );
}

export default SellingProducts;
