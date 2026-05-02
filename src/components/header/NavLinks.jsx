import { contentNav } from "../../contents/ContentsNav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavLinks = ({ variant = "mobile" }) => {
  const location = useLocation();
  const classNav =
    variant === "mobile"
      ? "flex flex-col items-center justify-center gap-5"
      : "flex flex-row justify-center items-center gap-10 h-12 px-12 w-full";

  return (
    <div className={classNav}>
      {contentNav.map((v, i) => (
        <Link
          key={i}
          to={v.path}
          className={` ${v.path === location.pathname ? "text-white" : "text-[#ffffffa2]"} text-[15px] hover:text-white hover:font-bold transition duration-250`}
        >
          {v.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
