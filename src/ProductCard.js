import * as React from "react";
import { Link } from "react-router-dom";
function ProductCard({ id, img, title, description, price }) {
    return (
      <div id="card">
        <img id="card-img" src={img} alt="" style={{border:'none'}}/>
        <div id="left">
          <div id="top">
            <h3 className="text-danger">{title}</h3>
            <p className="text-danger"> {price} $</p>
          </div>
          <p id="bottom">{description}</p>
          <Link to={`/product/${id}`} className="btn btn-danger">View Details</Link>
        </div>
      </div>
    );
  }
  export default ProductCard;