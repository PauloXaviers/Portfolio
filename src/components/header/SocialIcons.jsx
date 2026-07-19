import { iconsList } from "../../contents/headerData";

const SocialIcon = ({ className }) => {

  return (
    <div className={className}>
      <div className="flex gap-3 justify-center">
        {iconsList.map((v, i) => (
          <a href={v.url} key={i} target="_blank" rel="noopener noreferrer" aria-label={`Visite o perfil no ${v.alt}`}>
            <img
              src={v.path}
              alt={v.alt}
              className="h-6 hover:cursor-pointer hover:scale-110 duration-250"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default SocialIcon;
