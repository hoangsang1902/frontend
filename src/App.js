import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";

import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import Productslist from "./components/admin/list/ProductsList";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import Product from "./components/Details/Product";
import UserProfile from "./components/Details/UserProfile";
import Order from "./components/Details/Order";
import ShopCategory from "./components/ShopCategory/ShopCategory";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Dashboard1 from "./components/profile/Dashboard1";
import MyProfile from "./components/profile/MyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iphone" element={<ShopCategory brand="iphone" />} />
            <Route path="/samsung" element={<ShopCategory brand="samsung" />} />
            <Route path="/xiaomi" element={<ShopCategory brand="xiaomi" />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/admin" element={<Dashboard />}>
              <Route path="products" element={<Products />}>
                <Route index element={<Productslist />} />
                <Route path="create-product" element={<CreateProduct />} />
              </Route>
              <Route path="summary" element={<Summary />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="/profile" element={<Dashboard1 />}>
              <Route path="profile" element={<MyProfile />} />
            </Route>
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </div>
        <FooterControlled />
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
}

function FooterControlled() {
  const location = useLocation();
  // Kiểm tra xem trang hiện tại có phải là trang admin không
  const isAdminPage = location.pathname.startsWith("/admin");
  const isProfilePage = location.pathname.startsWith("/profile");
  // Nếu là trang admin, không hiển thị Footer
  if (isAdminPage || isProfilePage) {
    return null;
  }
  return <Footer />;
}

export default App;
