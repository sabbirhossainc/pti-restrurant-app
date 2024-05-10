import { Route, Routes } from "react-router-dom";
import Account from "../Pages/Account";
import Category from "../Pages/Category";
import Details from "../Pages/Details";
import Favorites from "../Pages/Favorites";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Navcomp from "./Navcomp";
import Error from "../Pages/ErrorPage";

export default function Pagelink() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navcomp />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="category" element={<Category />} />
          <Route path="my-favorites" element={<Favorites />} />
          <Route path="profile" element={<Profile />} />
          <Route path="accounts" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
