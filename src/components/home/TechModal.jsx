import { techStackList, variantsModal} from "../../contents/homeData";
import { motion } from "motion/react";

const TechModal = ({selectedId, handleToggleModal}) => {
  const content = techStackList.filter((v) => v.id === selectedId)
  if(content.lenght === 0 ) return
  const {titleName, text, imgUrl, altImg} = content[0]
   return (
     <motion.div
       className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 w-[90vw] md:w-[50vw] bg-[#080808f5] rounded-2xl shadow-[0px_0px_100px_50px_#000] border border-(--cor-branca) p-10 md:p-10 flex flex-col justify-start items-start"
       variants={variantsModal}
       initial="hidden"
       animate="visible"
       exit="exit"
     >
       <svg
         width="34"
         height="34"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         onClick={() => handleToggleModal(null)}
         className="hover:cursor-pointer absolute top-4 right-4"
       >
         <path d="M6 6 L18 18 M18 6 L6 18" />
       </svg>
       <div className="flex flex-col gap-5 items-center justify-start mt-8 w-full">
         <div className="flex flex-row gap-5 items-center">
           <img
             src={imgUrl}
             alt={altImg}
             className="h-10 w-10 md:h-15 md:w-15"
           />
           <h3 className="text-white text-center font-bold text-2xl">{titleName}</h3>
         </div>
         <hr className="w-full h-0.5 rounded-full bg-white shadow-[0px_0px_10px_#FFF]" />
         <p className="text-white text-center w-full">{text}</p>
       </div>
     </motion.div>
   );
}

export default TechModal