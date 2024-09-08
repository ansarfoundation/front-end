import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Home", url: "home" },
    { name: "Compaign", url: "compaign" },
    { name: "Click to Help", url: "help" },
    { name: "Get Involved", url: "involved" },
    { name: "About Us", url: "about-us" },
    { name: "Contact Us", url: "contact-us" },
  ];
  const location = useLocation();
  return (
    <div className="flex gap-3 h-full">
      {links.map((link, index) => (
        <div
          className={`border-t-4 flex items-center ${
            location.pathname == "/" + link.url
              ? "border-keppel-400 text-keppel-400"
              : "border-transparent"
          }`}
        >
          <Link key={index} to={link.url}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default NavLinks;
