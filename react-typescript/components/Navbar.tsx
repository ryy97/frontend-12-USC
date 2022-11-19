import React from "react";
import Link from "next/link";

const navTabs = {
  home: "Home",
  shop: "Shop",
  living_room: "Living Room",
  kitchen: "Kitchen",
  bedroom: "Bedroom",
  dining_room: "Dining Room",
  office: "Office",
  outdoor: "Outdoor",
  decor: "Decor",
  collection: "Collection",
  pages: "Pages",
  cart: "Cart",
  checkout: "Checkout",
  wishlist: "Wishlist",
  my_account: "My Account",
  login: "Login / Sign up",
  about_us: "About Us",
  contact_us: "Contact Us",
  "404_page": "404 Page",
  blog: "Blog",
  customer_photos: "Customer Photos",
  lookbooks: "Lookbooks",
};

interface NavbarProps {
  menuWhiteClass: string;
  sidebarMenu: boolean;
}

const Navbar = ({ menuWhiteClass, sidebarMenu }: NavbarProps) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link href="/">{navTabs["home"]}</Link>
          </li>
          <li>
            <Link href="/products">
              {" "}
              {navTabs["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link href="/products">{navTabs["living_room"]}</Link>
                  </li>
                  <li>
                    <Link href="/products">{navTabs["kitchen"]}</Link>
                  </li>
                  <li>
                    <Link href="/products">{navTabs["bedroom"]}</Link>
                  </li>
                  <li>
                    <Link href="/products">{navTabs["dining_room"]}</Link>
                  </li>
                  <li>
                    <Link href="/products">{navTabs["office"]}</Link>
                  </li>
                  <li>
                    <Link href="/products">{navTabs["outdoor"]}</Link>
                  </li>
                  <li>
                    <Link href="/products">{navTabs["decor"]}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link href="/products">
                      <img src="/images/banner-01.jpg" alt="" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/products">{navTabs["collection"]}</Link>
          </li>
          <li>
            <Link href="/">
              {navTabs["pages"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/cart">{navTabs["cart"]}</Link>
              </li>
              <li>
                <Link href="/checkout">{navTabs["checkout"]}</Link>
              </li>
              <li>
                <Link href="/wishlist">{navTabs["wishlist"]}</Link>
              </li>
              <li>
                <Link href="/my-account">{navTabs["my_account"]}</Link>
              </li>
              <li>
                <Link href="/login">{navTabs["login"]}</Link>
              </li>
              <li>
                <Link href="/about">{navTabs["about_us"]}</Link>
              </li>
              <li>
                <Link href="/contact">{navTabs["contact_us"]}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blog">
              {navTabs["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/customer_photos">
                  {navTabs["customer_photos"]}
                </Link>
              </li>
              <li>
                <Link href="/lookbooks">{navTabs["lookbooks"]}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">{navTabs["contact_us"]}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import Link from "next/link";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// const pages = [
//   { name: "HOME", url: "/" },
//   { name: "PRODUCTS", url: "/products" },
//   { name: "ABOUT", url: "/about" },
//   { name: "CONTACT US", url: "/contact" },
// ];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <img src="/images/shopLogo.png" alt="shopLogo" style={{ width: 65 }} />

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                   <Link href={page.url}>
//                     <Typography textAlign="center">{page.name}</Typography>
//                   </Link>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             FRUIT SHOP
//           </Typography>
//           <Box
//             sx={{
//               flexGrow: 1,
//               justifyContent: "center",
//               display: { xs: "none", md: "flex" },
//             }}
//           >
//             {pages.map((page) => (
//               <Link href={page.url} key={page.name}>
//                 <Button
//                   key={page.name}
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     m: 2,
//                     color: "white",
//                     display: "block",
//                     fontSize: 18,
//                     fontWeight: 500,
//                   }}
//                 >
//                   {page.name}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 0,
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <Tooltip title="Open settings">
//               <Link href="/login">
//                 <PersonOutlineIcon fontSize="large" sx={{ color: "white" }} />
//               </Link>
//             </Tooltip>
//             <Link
//               href="/cart"
//               style={{
//                 textDecoration: "none",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                 }}
//               >
//                 <ShoppingCartIcon
//                   sx={{ fontSize: 30, color: "white", pl: 3 }}
//                 />
//                 <Typography
//                   sx={{
//                     color: "white",
//                   }}
//                 >
//                   My Cart
//                 </Typography>
//               </Box>
//             </Link>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

// import { useContext, useEffect, useState } from "react";

// import {
//   Container,
//   Grid,
//   Badge,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import {
//   Search,
//   SearchIconWrapper,
//   StyledInputBase,
//   Navbar,
//   HeaderDetails,
//   HeaderContent,
//   CtegoryList,
//   LogoBrand,
//   NavbarActions,
// } from "./Styles";

// import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import SearchIcon from "@mui/icons-material/Search";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import HomeIcon from "@mui/icons-material/Home";

// // import Context from "store/Context";

// const Header = () => {
//   // const ProductsCtx = useContext(Context);
//   const [total, setTotal] = useState();

//   const [PaddingVal, setPaddingVal] = useState();
//   const [Slug, setSlug] = useState("all");
//   const [Value, setValue] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   useEffect(() => {
//     // ProductsCtx.GetAllCategoryNames();
//     // ProductsCtx.GetProductsByCategory(Slug);
//   }, []);

//   useEffect(() => {
//     // ProductsCtx.GetProductsByCategory(Slug);
//   }, [Slug]);

//   useEffect(() => {
//     // setTotal(ProductsCtx.TotalFavorites);
//     // }, [total, ProductsCtx.TotalFavorites]
//   }, []);

//   return (
//     <>
//       <Container>
//         <Box xs={{ flexGrow: 1 }}>
//           <Navbar position="fixed">
//             <Toolbar
//               sx={{ justifyContent: "space-between", flexWrap: "no-wrap" }}
//             >
//               <LogoBrand
//                 sx={{
//                   display: { xs: "none", sm: "flex" },
//                   textDecoration: "none",
//                 }}
//                 to="/"
//               >
//                 b<ShoppingBasketIcon />
//                 ket
//               </LogoBrand>
//               <LogoBrand sx={{ display: { xs: "flex", sm: "none" } }} to="/">
//                 <HomeIcon />
//               </LogoBrand>
//               <NavbarActions sx={{ width: { xs: "87%", sm: "50%" } }}>
//                 <IconButton>
//                   <DarkModeOutlinedIcon />
//                 </IconButton>
//                 <IconButton to="/wishlist">
//                   <FavoriteIcon />
//                 </IconButton>
//                 <IconButton to="/cart" onClick={() => window.scrollTo(0, 0)}>
//                   <ShoppingCartCheckoutIcon />
//                 </IconButton>
//               </NavbarActions>
//             </Toolbar>
//           </Navbar>

//           <>
//             <HeaderContent>
//               <Typography variant="h4">popular tech staff .</Typography>
//               <Typography variant="body2">
//                 high quality products with custom offers and fixed price.
//               </Typography>
//               <Search>
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search…"
//                   inputProps={{ "aria-label": "search" }}
//                   onChange={(e) => ProductsCtx.SetSearchValue(e.target.value)}
//                 />
//               </Search>
//             </HeaderContent>
//             <CtegoryList>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Tabs
//                     value={Value}
//                     onChange={handleChange}
//                     scrollButtons
//                     variant="scrollable"
//                     scrollButtons={true}
//                     aria-label="scrollable force navTabs example"
//                   >
//                     <Tab onClick={() => {}} />
//                   </Tabs>
//                 </Grid>
//               </Grid>
//             </CtegoryList>
//           </>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Header;
