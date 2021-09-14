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
import PageContact from "./pages/Contact";
import PageAdmProducts from "./pages/AdmProducts";

function App() {
  return (
    <>
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
                    Nosotros
                  </NavLink>

                  <NavLink
                    className="navbar-item"
                    to="/catalog"
                    activeClassName="is-active"
                  >
                    Catálogo
                  </NavLink>
                  <NavLink
                    className="navbar-item"
                    to="/contact"
                    activeClassName="is-active"
                  >
                    Contacto
                  </NavLink>
                  <NavLink
                    className="navbar-item"
                    to="/contact"
                    activeClassName="is-active"
                  >
                    Carrito
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
                <Route exact path="/contact">
                  <PageContact />
                </Route>
                <Route exact path="/detail">
                  <PageDetail />
                </Route>
                <Route exact path="/admin/products">
                  <PageAdmProducts />
                </Route>

                <Redirect to="/admin/products" />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
