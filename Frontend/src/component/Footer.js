import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Service</h2>
            <ul className="list-unstyled">
              <Link to="/next/right1">
                <li>Check Product</li>
              </Link>
              <li>Status of Product</li>
            </ul>
          </div>

          <div className="col">
            <h2>Update Product</h2>
            <ul className="list-unstyled">
              <li>In Stock</li>
              <li>Out Of Stock</li>
            </ul>
          </div>

          <div className="col">
            <h2>Contact Us</h2>
            <ul className="list-unstyled">
              <li>E-mail: inventory.105@gmail.com</li>
              <li>Phone: 02 470 9850</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WAREHOUSE | CSC105 | Terms of
            Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
