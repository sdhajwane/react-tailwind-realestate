import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import slider1 from '../../public/deskban4.jpg';
import slider2 from '../../public/deskban3.jpg';

export default function ImageSlider() {
    return (
<div className="absolute top-30 border left-0 right-0 lg:right-[300px]"> {/* Removed right margin for small devices */}
  <Swiper
    modules={[Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    className="w-full h-[600px]"
  >
    <SwiperSlide>
      <img
        src={slider1}
        alt="Slide 1"
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src={slider2}
        alt="Slide 2"
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  </Swiper>
</div>

      
  );
}