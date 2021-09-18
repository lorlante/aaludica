import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PageAboutUs from "./pages/AboutUs";
import PageCatalog from "./pages/Catalog";
import PageDetail from "./pages/Detail";
import PageCart from "./pages/Cart";
import PageAdmProducts from "./pages/AdmProducts";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <header>
          <nav className="navbar-default stuckMenu is-primary fixed-top">
            <div className="container">
              <div className="navbar-brand">
                <span className="navbar-item">
                  <Link to="/">
                    <img
                      src="/images/logonavbar.png"
                      className="img-responsive navbar-logo"
                      data-original-title=""
                      alt="logo"
                    />
                  </Link>
                </span>
              </div>
              <div className="navbar-menu">
                <div className="navbar-start">
                  <NavLink
                    className="navbar-item"
                    to="/aboutus"
                    activeClassName="is-active"
                  >
                    <button>Nosotros</button>
                  </NavLink>
                  <NavLink
                    className="navbar-item"
                    to="/catalog"
                    activeClassName="is-active"
                  >
                    <button>Catalogo</button>
                  </NavLink>
                  <NavLink
                    className="navbar-item"
                    to="/cart"
                    activeClassName="is-active"
                  >
                    <button>
                      Carrito
                      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle cart-count">
                        <span className="visually-hidden">2</span>
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="section">
          <div className="">
            <main>
              <Switch>
                <Route exact path="/aboutus">
                  <PageAboutUs />
                </Route>
                <Route exact path="/catalog">
                  <PageCatalog />
                </Route>
                <Route exact path="/detail">
                  <PageDetail />
                </Route>
                <Route exact path="/cart">
                  <PageCart />
                </Route>
                <Route exact path="/admin/products">
                  <PageAdmProducts />
                </Route>

                <Redirect to="/aboutus" />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
