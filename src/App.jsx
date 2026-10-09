
import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
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
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {seoPages.map((page) => (
            <Route
              key={page.url}
              path={page.url}
              element={<SeoPage page={page} />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}