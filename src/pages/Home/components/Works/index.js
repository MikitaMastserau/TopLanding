import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "./styles.scss";

export const Works = () => {
   return (
      <section className="works">
         <div className="container">
            <div className="works__hat">
               <h2>Some of the latest works.</h2>
               <p>Our business card is the excellent results of projects launched by us, as well as designs.</p>
            </div>
         </div>
         <Swiper
            loop={true}
            spaceBetween={-70}
            grabCursor={true}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
         >
            <SwiperSlide>
               <div className="works__1"></div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="works__2"></div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="works__3"></div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="works__4"></div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="works__5"></div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="works__6"></div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="works__7"></div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="works__8"></div>
            </SwiperSlide>
         </Swiper>
      </section>
   )
};