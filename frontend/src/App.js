import Checkoutpage from "./Checkoutpage";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productdetails from "./Productdetails";
import Header from "./Header";
import Footer from "./Footer";
import Bannner from "./Bannner";
import ScrolltoTop from "./ScrolltoTop";
import ScrollToTop from "./ScrolltoTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <>
          <Route path="/" Component={Home} />
          <Route path="/checkoutpage" Component={Checkoutpage} />
          <Route path="/productdetails/:id" Component={Productdetails} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
