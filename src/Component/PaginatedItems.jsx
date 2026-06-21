import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Cards from "../Component/Cards";
import axios from "axios";

function Items({ currentItems }) {
  return (
    <>
     <div className="flex flex-wrap gap-8">
         {currentItems &&
        currentItems.map((item) => (
          <div key={item.id}>
            
            <Cards
              src={item.thumbnail}
              tittle={item.title}
              regular={item.price}
              discount={item.discountPercentage}
              list={item.stock}
              badge="new"
            />
          </div>
        ))}
     </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setAllData(res.data.products);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  // pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = allData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const pageCount = Math.ceil(allData.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Items currentItems={currentItems} />

      {pageCount > 0 && (
        <div className="flex justify-start mt-10">
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            color="primary"
            shape="rounded"
            hidePrevButton
            hideNextButton
          />
        </div>
      )}
    </div>
  );
}

export default PaginatedItems;