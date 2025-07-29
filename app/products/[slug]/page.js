
'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import ColorPickerCard from '@/components/ColorPickerCard';
import ProductGallery from '@/components/ProductGallery';
import SizePickerButton from '@/components/SizePickerButton';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import { BsHandbag } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { getProducts } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { use } from 'react';

export default function ProductPage({ params }) {
  const resolvedParams = use(params)
  const slug = resolvedParams.slug;
  const product = getProductBySlug(slug)
  const products = getProducts();
  if (!product) {
    notFound();
  }
  const breadcrumbItems = [
    { label: '首頁', href: '/' },
    { label: '女鞋', href: '/products' },
    { label: '滑板鞋', href: '/products'},
    { label: `${product.label}`, href: '/products'}
  ]
  return (<>
    <section className='product-detail container'>
      <ProductGallery />
      <div className='detail-content'>
        <div className="product-intro">
          <Breadcrumb items={ breadcrumbItems } />
          <h1 className='product-detail-title'>{ product.label }</h1>
          <h6 className="product-price">NT${ product.price }<span>NT${product.originalPrice}</span></h6>
          <p className='product-detail-intro'>Platform 404 以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。</p>
          <p className='product-detail-intro'>鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。</p>
        </div>
        <form className='form-style'>
          <div className='product-color'>
            <p>顏色</p>
            <ul className='product-color-picker'>
              <ColorPickerCard text="藍色" imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product.png?raw=true" alt="platform-404-black" name="pick-color" id="platform-404-black" value="platform-404-black" />
              <ColorPickerCard text="卡其色" imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-1.png?raw=true" alt="platform-404-brown" name="pick-color" id="platform-404-brown" value="platform-404-brown" />
            </ul>
          </div>
          <div className='product-sizes'>
            <p>尺寸</p>
            <ul className='size-lists'>
              <SizePickerButton text="35(22.5cm)" className='btn-outline-primary' name="pick-size" id="size-35" value="35(22.5cm)" checked/>
              <SizePickerButton text="36(23.0cm)" className='btn-outline-primary' name="pick-size" id="size-36" value="36(23.0cm)" />
              <SizePickerButton text="37(23.5cm)" className='btn-outline-primary' name="pick-size" id="size-37" value="37(23.5cm)" />
              <SizePickerButton text="38(24.0cm)" className='btn-outline-primary' name="pick-size" id="size-38" value="38(24.0cm)" />
              <SizePickerButton text="39(24.5cm)" className='btn-outline-primary' name="pick-size" id="size-39" value="39(24.5cm)" />
              <SizePickerButton text="40(25.0cm)" className='btn-outline-primary' name="pick-size" id="size-40" value="40(25.0cm)" />
              <SizePickerButton text="41(26.0cm)" className='btn-outline-primary' name="pick-size" id="size-41" value="41(26.0cm)" />
              <SizePickerButton text="42(26.5cm)" className='btn-outline-primary' name="pick-size" id="size-42" value="42(26.5cm)" disabled/>
              <SizePickerButton text="43(27.0cm)" className='btn-outline-primary' name="pick-size" id="size-43" value="43(27.0cm)" disabled/>
            </ul>
            <p className='quantity'>僅剩 3 雙</p>
          </div>
          <div className='button-group'>
            <Button type="submit" text="門市預約試穿" icon={ <BsHandbag /> } className="btn-dark btn-add-cart" />
            <Button type="button" text="加入收藏" icon={ <BsHeart /> } className="btn-white btn-add-favorites" />
          </div>
        </form>
        <div className='product-info'>
          <div className='info-section'>
            <h6>商品材質</h6>
            <p>鞋面：合成皮革（Synthetic Leather）<br/>內裡：透氣網布材質，提升舒適與排汗性<br/>鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果<br/>鞋帶：聚酯纖維，耐拉扯不易鬆脫</p>
          </div>
          <div className='info-section'>
            <h6>購買須知</h6>
            <p>商品顏色因螢幕顯示可能略有差異，請以實品為準。<br/>建議首次穿著前試穿確認尺寸，避免影響退換貨權益。<br/>本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。</p>
          </div>
          <div className='info-section'>
            <h6>保養方式</h6>
            <p>建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。<br/>收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。<br/>若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。</p>
          </div>
        </div>
      </div>
    </section>
    <section className='product-slider'>
      <h5>你可能也喜歡...</h5>
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
        { products.map((item, index) => (
        <SwiperSlide key={index} className='slide-card'>
          <img src={ item.imgUrl } alt={item.label} />
          <Link href={`/products/${item.slug}`}>
            <h6 className='product-item-title'>{ item.label}</h6>
            <p className='product-item-price'>NT${item.price}</p>
          </Link>
        </SwiperSlide>
      ))}
      </Swiper>
    </section>
  </>)
}