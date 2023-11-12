import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../SectionTitle/SectionTitle';


const OnlineOrder = () => {
    return (
        <div className=''>
            <SectionTitle
                heading={'From 11:00am to 10:00pm'}
                subheading={'ORDER ONLINE'}>
            </SectionTitle>

            <section className=' max-w-6xl mx-auto'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className=' border '>
                        <img className='w-full' src={img1} alt="" />
                        <p className='text-white -mt-32 pb-10 text-4xl font-bold border text-center'>Salad</p>
                    </SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img2} alt="" /><p className='text-white -mt-32 text-4xl font-bold border text-center'>Pizza</p></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img3} alt="" /><p className='text-white -mt-32 text-4xl font-bold border text-center'>Soupe</p></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img4} alt="" /><p className='text-white -mt-32 text-4xl font-bold border text-center'>Salad</p></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img5} alt="" /><p className='text-white -mt-32 text-4xl font-bold border text-center'>Salad</p></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img3} alt="" /><p className='text-white -mt-32 text-4xl font-bold border text-center'>Salad</p></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img4} alt="" /><p className='text-white -mt-32 text-4xl font-bold border text-center'>Salad</p></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={img5} alt="" /><p className='text-white -mt-32 text-4xl font-bold border text-center'>Salad</p></SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default OnlineOrder;