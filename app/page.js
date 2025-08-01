'use client'
import Button from '@/components/Button';
import Link from 'next/link';
import { getProducts } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import IndexIdeaBento from '@/components/IndexIdeaBento';
export default function Home() {
  const products = getProducts();
  const topSaleProduct = products.filter(product => product.isTop === true);
  return (
    <main>
      <div></div>
      <section className='index-banner'>
        <div className='index-banner-content'>
          <h1>URBNSTEP</h1>
          <p>Your Step, Your Statement</p>
          <Button type="button" className="btn-primary" text="立即選購" href="/products" />
        </div>
      </section>
      <section className='index-new-products container'>
        <div className='title-group'>
          <h2 className='title'>New Arrival</h2>
          <h2 className='sub-title'>新品上市</h2>
        </div>
        <div className="new-product-list">
          <Link href="/products">
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/new-1.png?raw=true" alt="new1" />
            <h6>Monoverse</h6>
            <p>NT$2,600</p>
          </Link>
          <Link href="/products">
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/new-2.png?raw=true" alt="new2" />
            <h6>PLATFORM 404</h6>
            <p>NT$2,600</p>
          </Link>
          <Link href="/products">
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/new-3.png?raw=true" alt="new3" />
            <h6>URBN Force</h6>
            <p>NT$3,200</p>
          </Link>
          <Link href="/products">
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/new-4.png?raw=true" alt="new4" />
            <h6>Mode90</h6>
            <p>NT$4,000</p>
          </Link>
        </div>
      </section>
      <section className='index-top-sale'>
        <h2>熱銷補貨</h2>
        <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        className="product-slider-container"
        breakpoints={ {
          768: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24
          }
        }}
        >
        { topSaleProduct.map((item, index) => (
        <SwiperSlide key={index} className='slide-card'>
          <Link href={`/products/${item.slug}`}>
            <img src={ item.imgUrl } alt={item.label} />
            <span className='top-sale-tag'>人氣 No.1</span>
          </Link>
        </SwiperSlide>
        )) }
        </Swiper>
        
      </section>
      <div className='index-cta'>
        <div>
          <div className='cta-title-group'> 
            <h3 className='cta-title'>URBNSTEP</h3>
            <h3 className='cta-mark'>x</h3>
            <h3 className='cta-title'>Kevin Chen</h3>
          </div>
          <div>
            <h4 className='slogan'>跨界聯名，限量發售</h4>
            <p className='sub-slogan'>新銳漫畫家 Kevin Chen 親自操刀設計<span className='slogan-breakpoint'><span className='sign'>，</span>街頭能量全面引爆！</span></p>
            <div className='cta-button'>
              <Button type="button" text="立即搶購" className="btn-primary" href="/products" />
            </div>
          </div>
        </div>
      </div>
      <section className='index-series container'>
        <h2>依系列選購</h2>
        <div className="series-grid">
          <div className='series-item'>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-6.png?raw=true" alt="runner" />
            <div className='image-overlay'></div>
            <span className='series-text'>
              <h6>URBN RUNNER</h6>
              <h6>慢跑系列</h6>
            </span>
          </div>
          <div className='series-item'>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/product-11.png?raw=true" alt="street" />
            <div className='image-overlay'></div>
            <span className='series-text'>
              <h6>STREETMODE</h6>
              <h6>滑板系列</h6>
            </span>
          </div>
          <div className='series-item'>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-4.png?raw=true" alt="chunk" />
            <div className='image-overlay'></div>
            <span className='series-text'>
              <h6>CHUNK DISTRICT</h6>
              <h6>厚底系列</h6>
            </span>
          </div>
          <div className='series-item'>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week3-4/product-10.png?raw=true" alt="collab" />
            <div className='image-overlay'></div>
            <span className='series-text'>
              <h6>COLLAB ZONE</h6>
              <h6>聯名企劃</h6>
            </span>
          </div>
        </div>
      </section>
      <section className='index-idea'>
        <h2>穿搭靈感</h2>
        <IndexIdeaBento />
      </section>
    </main>
  );
}
