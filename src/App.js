import React from "react";
import { useScroll } from "./utils";
import { Header, Landing, Introduction, AboutPartner, Footer, OrderItem, } from './components';
import ByeAndSell from "./components/ByeAndSell";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Documents01 from "./Documents/Documents01";


function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>


         

          <Route path="/landing" element={<Landing />} />
          <Route path="/Documents01" element={<Documents01 />} />









        </Routes>
      </BrowserRouter>





     
      {/* <Landing/> */}
      {/* <Documents01/> */}








      <Footer />






    </div>
  );
}

export default App;
