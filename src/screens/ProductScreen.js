import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../node_modules/axios/index";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { products, loading, error } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/api/cart",
      data: {
        qty: qty,
        productId: productId,
        amount: products.amount,
      },
    }).then((response) => {
      props.history.push(`/cart/${productId}?qty=${qty}`);
    });
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div>
            <div>
              <h1>Name: {products.name}</h1>
              Price : Rs. {products.amount}
            </div>
            <div>
              <div>
                <div className="row">
                  
                </div>

                <div>
                <div>Category ID: {products.categoryId}</div>
                <div>Brand ID: {products.brandId}</div>
                  <div>
                    <div>No.of Items</div>
                    <div>
                      <select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(100).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
