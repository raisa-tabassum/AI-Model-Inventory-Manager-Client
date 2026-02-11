import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ModelSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 4000 }}
      loop={true}
      navigation={true}
      className="rounded-xl"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <img
          src="https://thumbs.dreamstime.com/b/hands-holding-tablet-displaying-ai-powered-inventory-management-warehouse-setting-tablet-displays-ai-powered-inventory-419205070.jpg"
          className="w-full  md:h-[650px] object-cover"
          alt="slide 1"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <img
          src="https://cdn.prod.website-files.com/67c68c93736617d0ce4e4f7b/67eed72de17b37c2ccd86622_675d37dc70219f4ef5baefbb_26.%2520Best%252011%2520Open%2520Source%2520Inventory%2520Management%2520Software%2520in%25202024.webp"
          className="w-full h-[500px] md:h-[650px] object-cover"
          alt="slide 1"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <img
          src="https://www.bombaysoftwares.com/_next/image?url=https%3A%2F%2Fbs-cms-media-prod.s3.ap-south-1.amazonaws.com%2FAi_for_inventory_management_aecee81333.png&w=1200&q=75"
          className="w-full h-[500px] md:h-[650px] object-cover"
          alt="slide 1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ModelSlider;
