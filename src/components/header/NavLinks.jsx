import { contentNav } from "../../Contents/ContentsNav";
import { Link } from "react-router-dom";

const NavLinks = ({ variant = "mobile" }) => {
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
          className="text-white text-[17px] hover:scale-105 hover:text-(--color-blue) transition-transform duration-250"
        >
          {v.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
