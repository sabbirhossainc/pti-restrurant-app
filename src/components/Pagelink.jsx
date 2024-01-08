import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Category from "../Pages/Category";
import Favorites from "../Pages/Favorites";
import Profile from "../Pages/Profile";
import Account from "../Pages/Account";

export default function Pagelink() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:detailsId" element={<Details />} />
        <Route path="/category" element={<Category />} />
        <Route path="/my-favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accounts" element={<Account />} />
      </Routes>
    </>
  );
}
