
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Products.jsx";

import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Vision from "./pages/Vision.jsx";
import Mission from "./pages/Mission.jsx";
import Products from "./pages/Products.jsx";
import Mangesh from "./pages/Mangesh.jsx";
import Blog from "./pages/Blog.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route index element={<Home />} />

      <Route path="about" element={<About />}/>
      <Route path="product" element={<Products/>} />
      <Route path="blog" element={<Blog/>} />



      

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
