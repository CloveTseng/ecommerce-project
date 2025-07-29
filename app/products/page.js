import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/data';

export default function Products() {
  const products = getProducts();
  const breadcrumbItems = [
    { label: '首頁', href: '/' },
    { label: '女鞋', href: '/products' },
    { label: '所有商品', href: '/products'}
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
          <ProductCard items={products } />
        </div>
      </div>
      <Pagination />
    </section>
  )
}