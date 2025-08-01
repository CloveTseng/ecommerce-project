'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const ideaImages = [
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-1.png?raw=true', alt: 'inspiration-1'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-2.png?raw=true', alt: 'inspiration-2'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-4.png?raw=true', alt: 'inspiration-4'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-5.png?raw=true', alt: 'inspiration-5'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-10.png?raw=true', alt: 'inspiration-10'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-3.png?raw=true', alt: 'inspiration-3'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-6.png?raw=true', alt: 'inspiration-6'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-7.png?raw=true', alt: 'inspiration-7'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-8.png?raw=true', alt: 'inspiration-8'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-9.png?raw=true', alt: 'inspiration-9'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-11.png?raw=true', alt: 'inspiration-11'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/inspiration-12.png?raw=true', alt: 'inspiration-12'
  }
]

const IndexIdeaBento = () => {
  const isDesktop = useMediaQuery(768);
  if (isDesktop) {
    return (
      <div className='index-idea-bento'>{ ideaImages.map((image) => (
        <img src={ image.src} alt={image.alt} style={{width: '100%'}} />
      )) }</div>
    )
  }
  return (
    <Swiper spaceBetween={8} slidesPerView={1.2} pagination={{clickable: true}} navigation >
      { ideaImages.map((image, index) => (
        <SwiperSlide key={ index } >
          <img src={ image.src} alt={image.alt} style={{width: '100%'}} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default IndexIdeaBento;