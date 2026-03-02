import ImgCurriculo from "../../assets/curriculo_img.png";
import { motion } from "motion/react";



const AboutMe = () => {
    const variantsCurriculo = {
      hidden: {
        y: 100,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 50, // Quanto menor, mais suave
          damping: 15,
        },
      },
    };
    const variantsText = {
        hidden: {
            x: -10,
            opacity: 0
        },
        animate: {
            x: 0,
            transition: {duration: 1},
            opacity: 1
        }
    }
    return (
      <div className="w-full text-white flex flex-col md:flex-row justify-center items-center md:px-20 gap-10">
        <div className="w-[50%] px-5">
          <h1 className="text-3xl pb-5">Sobre mim</h1>
          <motion.p variants={variantsText} initial="hidden" animate="animate" className="text-justify font-light" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            repellendus non consequatur odio? Odit molestias ut unde blanditiis
            dolore tempore expedita minus odio maiores rem beatae dicta, sunt
            quia doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Perspiciatis omnis culpa laborum repellendus quos error ad,
            voluptatem aspernatur saepe corrupti vitae facere nostrum voluptates
            excepturi. Rem corporis eveniet quae ipsum?
          </motion.p>
        </div>
        <div className="w-[40%]">
          <motion.img
            className="relative -z-10 w-full"
            src={ImgCurriculo}
            variants={variantsCurriculo}
            initial="hidden"
            animate="animate"
          />
          <div className="bg-[#1B1B1B] shadow-xs shadow-amber-50 h-50 max-h-75 flex items-center md:-mt-10 xl:-mt-30 w-full rounded-b-2xl">
            <p className="px-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              accusantium voluptatem, harum doloremque quidem assumenda, porro
              et fugit a eius ipsa quisquam sint asperiores animi, cumque unde
              aliquam ducimus dolores.
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutMe