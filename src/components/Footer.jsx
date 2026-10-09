
import { Link } from "react-router-dom";

const footerGroups = [
  {
    title: "Food",
    links: [
      { label: "Food Delivery Bangalore", url: "/food/bangalore/" },
      {
        label: "Homemade Food Bangalore",
        url: "/food/homemade-food/bangalore/",
      },
      {
        label: "Home Chefs Bangalore",
        url: "/food/home-chefs/bangalore/",
      },
      { label: "Karnataka Food", url: "/food/karnataka/" },
    ],
  },
  {
    title: "Bus Food",
    links: [
      { label: "Bus Food Delivery", url: "/bus-food/" },
      { label: "Food on Bus", url: "/bus-food/bangalore/" },
      { label: "KSRTC Food", url: "/bus-food/ksrtc/" },
    ],
  },
  {
    title: "Bus",
    links: [
      { label: "Bangalore Bus Tickets", url: "/bus/bangalore/" },
      {
        label: "Bangalore Bus Booking",
        url: "/bus/bangalore/booking/",
      },
    ],
  },
  {
    title: "Bus Routes",
    links: [
      {
        label: "Bangalore to Mysore",
        url: "/bus/bangalore-to-mysore/",
      },
      {
        label: "Bangalore to Chennai",
        url: "/bus/bangalore-to-chennai/",
      },
      {
        label: "Bangalore to Hyderabad",
        url: "/bus/bangalore-to-hyderabad/",
      },
      {
        label: "Bangalore to Mangalore",
        url: "/bus/bangalore-to-mangalore/",
      },
      {
        label: "Bangalore to Goa",
        url: "/bus/bangalore-to-goa/",
      },
    ],
  },
  {
    title: "Travel",
    links: [
      { label: "Bangalore Tourist Places", url: "/places/bangalore/" },
      {
        label: "Best Places Bangalore",
        url: "/places/bangalore/best-places/",
      },
    ],
  },
  {
    title: "Recipes",
    links: [
      { label: "Karnataka Recipes", url: "/recipes/karnataka/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {footerGroups.map((group) => (
            <section className="footer-group" key={group.title}>
              <h3>{group.title}</h3>

              <ul>
                {group.links.map((link) => (
                  <li key={link.url}>
                    <Link to={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}