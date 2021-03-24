import { faDollyFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/ProductList.css";
const ProductList = () => {
  return (
    <div className="inventory">
      <div className="left">
        <h1>
          <FontAwesomeIcon icon={faDollyFlatbed} className="faDolly" />
          Inventory
        </h1>

        <div className="InStock">
          <a>In-Stock Product </a>
        </div>

        <div className="OutStock">
          <a>Out of Stock</a>
        </div>

        <div className="Logout">
          <a>Log Out</a>
        </div>
      </div>

      <div className="right">dbxffh</div>
    </div>
  );
};

export default ProductList;
