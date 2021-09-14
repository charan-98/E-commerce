import React, { useEffect, useState } from "react";
import Navbar from "../navBar/navBar";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isHovering, setisHovering] = useState(false);

  useEffect(() => {
    axios(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
    ).then(({ data }) => setProducts(data));
  }, []);

  const handelMouseH = (id) => {
    setisHovering(id);
  };
  const handelMouseL = (e) => {
    setisHovering(false);
  };
  const [searchItem, setSerachItem] = useState("");
  return (
    <div className="Home">
      <Navbar changeWord={(word) => setSerachItem(word)} />
      <div className="products">
        {products
          .filter((val) => {
            if (searchItem == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return val;
            }
          })
          .map((pro) => (
            <Link style={{ textDecoration: "none" }} to={`/product/${pro.id}`}>
              <div
                className="pro"
                onMouseLeave={handelMouseL}
                onMouseEnter={() => handelMouseH(pro.id)}
              >
                <img
                  className={`${isHovering === pro.id ? "img1" : "img"} `}
                  src={pro.preview}
                  alt={pro.name}
                  width={220}
                  height={210}
                />
                <p className="proName"> {pro.name}</p>

                <p className={`${isHovering === pro.id ? "price1" : "price"} `}>
                  Price:{pro.price}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Home;
