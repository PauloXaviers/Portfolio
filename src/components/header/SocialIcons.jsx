import { iconsList } from "../../Contents/ContentsNav";

const SocialIcon = ({ variant = "mobile" }) => {
  const classDiv =
    variant === "mobile" ? "flex flex-col gap-3 mt-2" : "flex flex-row gap-5";
  const classBtn =
    `flex items-center justify-center text-center border shadow-[0px_0px_5px_#1FC8EE] border-[#1FC8EE] text-white h-10 md:w-40 text-[10px] w-50 xl:text-[12px] rounded-2xl hover:cursor-pointer hover:bg-[#1997b4] duration-500 mb-2`;

  return (
    <div className={classDiv}>
      <button className={classBtn}>Entre em contato</button>
      <div className="flex gap-3 justify-center">
        {iconsList.map((v, i) => (
          <img
            key={i}
            src={v.path}
            alt={v.alt}
            className="h-8 hover:cursor-pointer hover:scale-110 duration-250"
          />
        ))}
      </div>
    </div>
  );
};
export default SocialIcon;
