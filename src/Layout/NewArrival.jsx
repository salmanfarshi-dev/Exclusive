import Today from "../Component/Today";
import Container from "../Component/Container";
import React from "react";
import Subheading from "../Component/Subheading";
import Playstation from "../assets/play-station.png";
import Perfume from "../assets/perfume.png";
import Womencollection from "../assets/women-collection.png";
import Speaker from "../assets/speaker.png";
import Image from "../Component/Image";

function NewArrival() {
  return (
    <section className="mb-[140px]">
      <Container>
        <Today text="Featured" />
        <Subheading text="New Arrival" className="mt-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">

            <div className="h-full ">
                <Image src={Playstation} className="w-full h-full object-cover cursor-pointer"/>
            </div>
            <div className="grid grid-rows-2 gap-7">
                <Image src={Womencollection} className="w-full object-cover cursor-pointer"/>
                <div className="grid grid-cols-2">
                    <Image src={Speaker} className="object-cover cursor-pointer"/>
                    <Image src={Perfume} className="object-cover cursor-pointer"/>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}

export default NewArrival;
