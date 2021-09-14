import axios from "axios";
import "./products.css";
import Navbar from "../navBar/navBar";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";

export function product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [imgNo, setImgNo] = useState();
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(
    () =>
      axios(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`).then(
        (res) => {
          const details = res.data;
          const photos = res.data.photos;
          setProduct(details);
          setImg(photos);
          setImgNo(photos[0]);
          console.log(imgNo);
        }
      ),
    []
  );

  const handelClick = () => {
    if (count >= -1 && count <= 4) {
      console.log(count);
      setImgNo(img[count]);
      setCount(count + 1);
    }
  };
  const handelClick2 = () => {
    if (count >= 0 && count <= 5) {
      console.log(count);
      setImgNo(img[count]);
      setCount(count - 1);
      console.log(cart);
    }
  };

  return (
    <div className="p1">
      <Navbar />
      <div className="product">
        <img className="img11" src={imgNo} alt={product.name} />
        <p>{product.name}</p>

        <button onClick={handelClick2}>{`<`}</button>
        <button onClick={handelClick}>{`>`}</button>
        <p>{product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default product;
