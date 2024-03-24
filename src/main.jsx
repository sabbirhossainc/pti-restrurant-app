import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider,BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import App,{loader as apploader} from "./App.jsx";
// import { ErrorPage } from "./Pages/ErrorPage.jsx";
// import Home from "./Pages/Home.jsx";
// import Details from "./Pages/Details.jsx";
// import Category from "./Pages/Category.jsx";
// import Favorites from "./Pages/Favorites.jsx";
// import Profile from "./Pages/Profile.jsx";
// import Account from "./Pages/Account.jsx";


// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     // loader: apploader,
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "details/:detailsId",
//         element: <Details />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "category/",
//         element: <Category />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "favorites/",
//         element: <Favorites />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "profile/",
//         element: <Profile />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "accounts/",
//         element: <Account />,
//         errorElement: <ErrorPage />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);
