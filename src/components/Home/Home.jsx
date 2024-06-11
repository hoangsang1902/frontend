import { useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";
import Chatbot from "../Chatbot/Chatbot";
import banner from "../images/banner.jpg";

const Home = () => {
  const [visibleProducts, setVisibleProducts] = useState(12);

  const { items: data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleExploreMore = () => {
    setVisibleProducts((prev) => prev + 12);
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <div className="banner">
            <img src={banner} alt="" />
          </div>
          <h2>Welcome to HSangShop!</h2>
          <div className="products">
            {data &&
              data.slice(0, visibleProducts).map((product) => (
                <div key={product._id} className="product">
                  <h3>{product.name}</h3>
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image.url} alt={product.name} />
                  </Link>
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
              ))}
          </div>
          <button className="explore-button" onClick={handleExploreMore}>
            Explore More
          </button>
          <Chatbot />
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
