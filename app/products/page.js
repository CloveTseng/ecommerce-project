import Link from 'next/link';
import Pagination from '@/components/Pagination';

export default function Products() {
  return (
    <>
      <section className='products container'>
        <ul className="breadcrumb">
          <li><Link href="/">首頁</Link></li>
          <li><Link href="/products">女鞋</Link></li>
          <li><Link href="/products">所有商品</Link></li>
        </ul>
        <h3>女鞋</h3>
        <div className='d-flex'>
          <div className="products-navbar">
            <ul>
              <li><Link href="/products">所有商品</Link></li>
              <li><Link href="/products">慢跑鞋</Link></li>
              <li><Link href="/products">滑板鞋</Link></li>
              <li><Link href="/products">厚底鞋</Link></li>
              <li><Link href="/products">限定 / 聯名企劃</Link></li>
            </ul>
          </div>
          <div className="products-list">
            <div>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product.png?raw=true"/>
              <h6>PLATFORM 404</h6>
              <p>NT$2,600</p>
            </div>
            <div>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product.png?raw=true"/>
              <h6>PLATFORM 404</h6>
              <p>NT$2,600</p>
            </div>
            <div>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product.png?raw=true"/>
              <h6>PLATFORM 404</h6>
              <p>NT$2,600</p>
            </div>
            <div>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product.png?raw=true"/>
              <h6>PLATFORM 404</h6>
              <p>NT$2,600</p>
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </>
  )
}