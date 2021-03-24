import React from "react";
import "../css/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Service</h2>
            <ul className="list-unstyled">
              <li>Check Product</li>
              <li>Status of Product</li>
            </ul>
          </div>

          <div className="col">
            <h2>Find Store</h2>
            <ul className="list-unstyled">
              <li>Bangkok and Vicinity</li>
              <li>Provincial</li>
            </ul>
          </div>

          <div className="col">
            <h2 className="text">Contact Us</h2>
            <ul className="list-unstyled">
              <li>Address</li>
              <li>E-mail</li>
              <li>Phone</li>
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
