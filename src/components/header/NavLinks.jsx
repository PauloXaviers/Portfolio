import { contentNav } from "../../contents/headerData";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavLinks = ({ className }) => {
  const location = useLocation();

  return (
    <ul className={className}>
      {contentNav.map((v) => (
        <li key={v.name}>
          <Link
            to={v.path}
            aria-current={v.path === location.pathname ? "page" : undefined}
            className={` ${
              v.path === location.pathname ? "text-white" : "text-[#ffffffa2]"
            } text-[15px] md:text-[17px] hover:text-white hover:font-bold transition duration-250`}
          >
            {v.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
