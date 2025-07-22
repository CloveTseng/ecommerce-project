import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  const breadcrumbItems = [
    { label: '首頁', href: '/' },
    { label: '女鞋', href: '/products' },
    { label: '所有商品', href: '/products'}
  ]
  const productItems = [
    { label: 'PLATFORM 404', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product.png?raw=true', price: '2,600' },
    {label: 'PLATFORM 404', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-1.png?raw=true', price: '2,600'},
    {label: 'VM001', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-2.png?raw=true', price: '2,600'},
    {label: 'Melty Kiss', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-3.png?raw=true', price: '4,000'},
    {label: 'BOOMBLOK', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-4.png?raw=true', price: '3,200'},
    {label: 'BOOMBLOK', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-5.png?raw=true', price: '3,200'},
    {label: 'R:UNER', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-6.png?raw=true', price: '4,000'},
    {label: 'Sugar Snap', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-7.png?raw=true', price: '4,000'},
    {label: 'Neofoam', imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-8.png?raw=true', price: '4,000'}
  ]
  return (
    <section className='products container'>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className='products-title'>女鞋</h1>
      <div className='products-content'>
        <div className="products-navbar">
          <ul className='products-list'>
            <li><Link href="/products" className='product-item'>所有商品</Link></li>
            <li><Link href="/products" className='product-item'>慢跑鞋</Link></li>
            <li><Link href="/products" className='product-item'>滑板鞋</Link></li>
            <li><Link href="/products" className='product-item'>厚底鞋</Link></li>
            <li><Link href="/products" className='product-item'>限定 / 聯名企劃</Link></li>
          </ul>
        </div>
        <div className="products-cards">
          <ProductCard items={productItems } />
        </div>
      </div>
      <Pagination />
    </section>
  )
}