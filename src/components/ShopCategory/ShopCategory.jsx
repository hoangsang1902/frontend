import React from "react";
import "./ShopCategory.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../../slices/cartSlice";

const ShopCategory = (props) => {
  const { items: data } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span className="shopcategory-products-count">
            Showing 1-12 products
          </span>
        </p>

        <div className="shopcategory-sort"></div>
      </div>
      <div className="shopcategory-products">
        {data &&
          data?.map((product) => {
            if (props.brand === product.brand) {
              return (
                <div key={product._id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image.url} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">
                      ${product.price?.toLocaleString()}
                    </span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default ShopCategory;
