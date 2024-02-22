
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
import Product from "./pages/Product.jsx";
import FirstProduct from "./pages/FirstProduct.jsx";
import SecondProduct from "./pages/SecondProduct.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Vision from "./pages/Vision.jsx";
import Mission from "./pages/Mission.jsx";
import Blog from "./pages/Blog.jsx";
import DetailsPage from "./components/DetailsPage.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* all below are children of App..will route in url with slash / ....child will render in Outlet */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="blog" element={<Blog/>} />

        <Route path="detail" element={<DetailsPage/>} />
        
     
      
      
      
      <Route path="contact" element={<Contact />} />
      
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
