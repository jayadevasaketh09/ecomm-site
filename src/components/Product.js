import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product.id} className="card">

      <div className="card-body">

          <h2>{product.name}

          </h2>

        <div>Category ID: {product.categoryId}</div>
        <div>Brand ID: {product.brandId}</div>

        <div className="price">Rs. {product.amount}</div>
          <Link to={`/products/${product.id}`}>
        <h1><u> View</u> </h1>
        </Link>
      </div>
    </div>
  );
}
