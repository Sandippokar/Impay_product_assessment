import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./ProductList.module.css";
import { Grid, Card, CardContent, Rating } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);

  const fetchProducts = async (limit) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );

      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts(limit);
  }, []);

  const handleChange = (event, value) => {
    const newLimit = limit + 5;
    setPage(value);
    setLimit(newLimit);
    fetchProducts(newLimit);
  };

  if (products.length === 0) {
    return (
      <div className={style.root}>
        <h1 className={style.heading}>Product List</h1>
        <h3 className={style.heading}>Loading...</h3>
      </div>
    );
  }

  return (
    <div className={style.root}>
      <h1 className={style.heading}>Product List</h1>
      <Grid container spacing={4}>
        {products &&
          products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card className={style.card}>
                <CardContent>
                  <img src={product.image} alt="" className={style.media} />
                  <h3 className={style.title}>{product.title}</h3>
                  <span className={style.desc}>{product.description}</span>
                  <div className={style.rating}>
                    <Rating
                      name="read-only"
                      value={product.rating.rate}
                      readOnly
                      className={style.star}
                    />
                    <span className={style.count}>
                      ({product.rating.count})
                    </span>
                  </div>
                  <p className={style.price}>Price: {product.price}$ </p>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {products && products.length > 0 && (
        <div className={style.pagination}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default ProductList;
