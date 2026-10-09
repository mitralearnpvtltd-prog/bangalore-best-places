import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">TravelBites</Link>
      <nav className="nav" aria-label="Main">
        <NavLink to="/food/bangalore/">Food</NavLink>
        <NavLink to="/bus-food/">Bus food</NavLink>
        <NavLink to="/bus/bangalore/">Bus</NavLink>
        <NavLink to="/places/bangalore/">Travel</NavLink>
        <NavLink to="/recipes/karnataka/">Recipes</NavLink>
      </nav>
    </header>
  );
}
