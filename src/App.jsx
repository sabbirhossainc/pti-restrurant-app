import Navcomp from "./components/Navcomp";
// import Navcompo from "./components/Navcompo";
import Pagelink from "./components/Pagelink";
import Footer from "./components/Footer";
// import { getCategorys } from "./Pages/Category";
// import { useLoaderData } from "react-router-dom";


// export async function loader() {
//   const category = await getCategorys();
//   return { category };
// }

export default function App() {
  // const { category } = useLoaderData();
  return (
    <>
    <div className=" bg-gray-200">

      <Navcomp />
      <Pagelink />
      {/* <Navcompo /> */}
      
      <Footer />
    </div>
    </>
  );
}
