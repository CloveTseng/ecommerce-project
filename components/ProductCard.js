import Link from 'next/link';

const ProductCard = ({ items = [] }) => {
  return (
  <>
      { items.map((item, index) => (
      <Link key={index} href={`/products/${item.slug}`}>
        <img src={ item.imgUrl } alt={item.label} />
        <h6 className='product-item-title'>{ item.label}</h6>
        <p className='product-item-price'>NT${item.price}</p>
      </Link>
    )) } 
    </>
  )
}
export default ProductCard;