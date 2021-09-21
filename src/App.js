import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import OrderScreen from "./screens/OrderScreen";
// sendOrderDetails
import Mod from "./Model";
import Brandmod from "./Brandmod";
import Prodmod from "./Prodmod";
import OrderItems from "./screens/OrderItems";
import SearchBar from "./components/SearchBar";
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // const callme = () => {
  //   console.log(`i am here`);
  // };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          {/* <div>
            <Link className="brand" to="/">
              e-Comm
            </Link>
          </div> */}
          <div><Link to="/">
        <img
          className="header_logo"
          src="data:image/png;base64,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"
        />
      </Link></div>

          {/* <div className="Search">
            <SearchMaster/>
          </div> */}
          <div className="searchbar">
            <SearchBar/>
            </div>

          <div className="header_option">
            <span className="header_option_LineOne"></span>
            <span className="header_option_LineTwo">
              <Mod />
            </span>
          </div>

          <div className="header_option">
            <span className="header_option_LineOne"></span>
            <span className="header_option_LineTwo">
              <Brandmod />
            </span>
          </div>

          <div className="header_option">
            <span className="header_option_LineOne"></span>
            <span className="header_option_LineTwo">
              <Prodmod />
            </span>
          </div>

          <div>
            <Link to="/cart">
              Cart -{<span className="badge">{cartItems.length}</span>}
            </Link>
          </div>

          <div>
            <Link to="/orderItems">History</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/products/:id" component={ProductScreen}></Route>
          <Route path="/order/:id?" component={OrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route exact path="/orderItems" component={OrderItems}></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
