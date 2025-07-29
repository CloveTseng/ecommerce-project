'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const productImages = [
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image.png?raw=true', alt: 'image' },
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image-1.png?raw=true', alt: 'image-1' },
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image-2.png?raw=true', alt: 'image-2' },
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image-3.png?raw=true', alt: 'image-3' },
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image-4.png?raw=true', alt: 'image-4' },
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image-5.png?raw=true', alt: 'image-5' },
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image-6.png?raw=true', alt: 'image-6' },
{ src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/image-7.png?raw=true', alt: 'image-7' }
]

const ProductGallery = () => {
  const isDesktop = useMediaQuery(768);
  if (isDesktop) {
    return (
      <div className='product-grid'>
        { productImages.map((image, index) => (
          <div key={ index } className='grid-item'>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <Swiper spaceBetween={8} slidesPerView={1} pagination={{clickable: true}} navigation modules={[Pagination]} >
      { productImages.map((image, index) => (
        <SwiperSlide key={ index } >
          <img src={ image.src} alt={image.alt} style={{width: '100%'}} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default ProductGallery