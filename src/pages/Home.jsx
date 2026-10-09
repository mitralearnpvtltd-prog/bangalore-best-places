import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Journey from "../components/Journey";
import { seoPages } from "../data/seoPages";

export default function Home() {
  const categories = [...new Set(seoPages.map((p) => p.category))];
  return (
    <>
      <Helmet>
        <title>TravelBites – Homemade Food for Your Journey</title>
        <meta
          name="description"
          content="Order fresh homemade food in Bangalore and get it delivered to your home, office or bus stop."
        />
      </Helmet>

      <section className="hero">
        <div className="hero-inner">
          <h1>Homemade food, waiting at your bus stop</h1>
          <p>Order fresh meals from local home chefs in Bangalore and collect them on your way.</p>
          <Link to="/food/bangalore/" className="btn">Order food</Link>
        </div>
        <Journey />
      </section>

      <section className="content">
        {categories.map((cat) => (
          <div key={cat} className="group">
            <h2>{cat}</h2>
            <ul className="related">
              {seoPages
                .filter((p) => p.category === cat)
                .map((p) => (
                  <li key={p.url}><Link to={p.url}>{p.name}</Link></li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
