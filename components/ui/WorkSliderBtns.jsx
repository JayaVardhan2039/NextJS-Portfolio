"use client";
import { useSwiper } from "swiper/react";
import { HiMiniChevronLeft,HiMiniChevronRight} from "react-icons/hi2"
const WorkSliderBtns = ({ containerStyles,btnStyles,iconsStyles }) => {
  const swiper=useSwiper();
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
            <HiMiniChevronLeft className={iconsStyles}/>
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
            <HiMiniChevronRight className={iconsStyles}/>
        </button>
    </div>
  );
};

export default WorkSliderBtns;