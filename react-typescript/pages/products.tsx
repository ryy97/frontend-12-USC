import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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
                width: 290,
              }}
            >
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    width: "auto",
                    maxHeight: "200px",
                  }}
                  image={product.image}
                  alt={product.id}
                />
                {/* <img
                src={product.image}
                alt={product.id}
                style={{ width: 165 }}
              /> */}
              </CardActionArea>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      component="a"
                      // href=""
                      sx={{
                        textDecoration: "none",
                      }}
                    >
                      {product.title.length > 45
                        ? product.title.slice(0, 45) + "..."
                        : product.title}
                    </Typography>
                    <Typography sx={{ fontSize: "16px" }}>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Box>
                <IconButton>
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
