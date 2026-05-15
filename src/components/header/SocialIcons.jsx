import { iconsList } from "../../contents/headerData";

const SocialIcon = ({ className }) => {
  const handleSocialLinkClick = (url) => {
    window.open(`${url}`, "_blank");
  };

  return (
    <div className={className}>
      <div className="flex gap-3 justify-center">
        {iconsList.map((v, i) => (
          <img
            key={i}
            src={v.path}
            alt={v.alt}
            onClick={() => handleSocialLinkClick(v.url)}
            className="h-6 hover:cursor-pointer hover:scale-110 duration-250"
          />
        ))}
      </div>
    </div>
  );
};
export default SocialIcon;
