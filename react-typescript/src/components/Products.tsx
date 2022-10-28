import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    console.log("PRODUCTS:", products);
  }, []);

  if (!products.length) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1, m: 10 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={2.4} sx={{ my: 3 }}>
            <Card
              sx={{
                height: 290,
                width: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.id}
                style={{ width: 165 }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
