import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import SeoPage from "./pages/SeoPage.jsx";
import { seoPages } from "./data/seoPages.js";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="content">
      <h1>Page not found</h1>

      <p className="intro">
        That page does not exist.{" "}
        <Link to="/">Go to the home page</Link>.
      </p>
    </section>
  );
}

export default function App() {
  const homeChefsPage = seoPages.find(
    (page) => page.url === "/food/home-chefs/bangalore/"
  );

  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          {/* Homepage: Home Chefs in Bangalore */}
          <Route
            path="/"
            element={
              homeChefsPage ? (
                <SeoPage page={homeChefsPage} />
              ) : (
                <NotFound />
              )
            }
          />

          {/* Keep all existing SEO page routes */}
          {seoPages.map((page) => (
            <Route
              key={page.url}
              path={page.url}
              element={<SeoPage page={page} />}
            />
          ))}

          {/* Handle unknown URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}