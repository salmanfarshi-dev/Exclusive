import React from "react";
import { Link } from "react-router-dom";

function Nextpage({ prev, current, className, prevPath }) {
  return (
    <div className={className}>
      <span className="flex gap-x-2 text-sm text-black">
        {prev && (
          <Link to={prevPath}>
            {prev}
          </Link>
        )}

        {prev && "/"}
        <p className="text-black">{current}</p>
      </span>
    </div>
  );
}

export default Nextpage;