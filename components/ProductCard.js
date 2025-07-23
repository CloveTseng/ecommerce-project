const ProductCard = ({items = []}) => {
  return (
  <>
    {items.map((item, index) => (
      <div key={index}>
        <img src={ item.imgUrl } alt={item.label} />
        <h6 className='product-item-title'>{ item.label}</h6>
        <p className='product-item-price'>NT${item.price}</p>
      </div>
    )) } 
    </>
  )
}
export default ProductCard;