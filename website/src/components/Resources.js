import { Swiper, SwiperSlide } from 'swiper/react';
import NewsBox from './NewsBox';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

export default () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className='resources'>
      <h1 className="resourcestitle">Resources</h1>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
      >
        <SwiperSlide><NewsBox imagelink={"slider/buisness.png"} headlines={'Metascreen Launches First-Ever NFT Ticket Collection'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/FinancialExpress.png"} headlines={'Remembering Pancham Da-Metascreen launches first-ever NFT collection as tribute to RD Burman'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/NFTevening.png"} headlines={'Meta screen Releases First-Ever NFT Ticket Collection Celebrating the Indian Cinema'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/mint.webp"} headlines={'SquirrelVerse announces Metascreen to showcase Maithili film using NFT ticket'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/medium.png"} headlines={'Things you do not know about Metaverse'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/Economic.png"} headlines={'SquirrelVerse launches NFT commerce platform'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/AgencyReporter.png"} headlines={"Squirrel Solutions launced India's first children's book NFT'7 Colors of Holi's authored by Tulika Singh"}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/msn.jpg"} headlines={'Remembering Pnacham Da - Meta screen launches first-ever NFT collection as tribute to RD Burman'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/medium.png"} headlines={'Future of Retail and eCommerce in Metaverse'}/></SwiperSlide>
        <SwiperSlide><NewsBox imagelink={"slider/mint.webp"} headlines={'Why metaverse is the subject of corporate interest'}/></SwiperSlide>

        ...
      </Swiper>
    </div>
  );
};