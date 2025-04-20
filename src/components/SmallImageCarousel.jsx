import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const smallImages = [
  { src: '/st5club.jpg', title: 'Clubhouse' },
  { src: '/gym.jpg', title: 'Gym' },
  { src: '/banquet.jpg', title: 'Banquet Hall' },
  { src: '/indoorgame.jpg', title: 'Indoor Games' },
  { src: '/infiswimming.jpg', title: 'Infinity Pool' },
  { src: '/libraryg.jpg', title: 'Library' },
  { src: '/minigolf.jpg', title: 'Mini Golf' },
  { src: '/roofjogging.jpg', title: 'Rooftop Jogging' },
  { src: '/squash.jpg', title: 'Squash Court' },
  { src: '/skylounge.jpg', title: 'Sky Lounge' },
  { src: '/steamroom.jpg', title: 'Steam Room' },
  { src: '/swimming.jpg', title: 'Swimming Pool' },
];

export default function SmallImageCarousel({ onBrochureClick }) {
  return (
    <section id='amenities' className="scroll-mt-20">
    <div className="w-full md:w-[calc(100%-300px)] p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
        Amenities of Godrej Horizon Wadala
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {Array.from({ length: Math.ceil(smallImages.length / 2) }).map((_, index) => {
          const img1 = smallImages[index * 2];
          const img2 = smallImages[index * 2 + 1];

          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
                {[img1, img2].map(
                  (img, idx) =>
                    img && (
                      <div key={idx} className="relative w-full h-44 rounded-xl overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.title}
                          onClick={ onBrochureClick }
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent flex items-end px-3 pb-2">
                          <span className="text-white text-sm font-medium">{img.title}</span>
                        </div>
                      </div>
                    )
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div></section>
  );
}