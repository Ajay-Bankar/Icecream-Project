import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NaivedyaFooter from "./components/NaivedyaFooter";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />

        {/* <NaivedyaFooter/> */}
      </div>
    </>
  );
}

export default App;
