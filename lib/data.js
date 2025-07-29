export function getProducts() {
  return productItems;
}
export function getProductBySlug(slug) {
  return productItems.find(product => product.slug === slug)
}
const productItems = [
  {
    slug: 'platform-404-black',
    label: 'PLATFORM 404',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product.png?raw=true',
    originalPrice: '3,200',
    price: '2,600'
  },
  {
    slug: 'platform-404-brown',
    label: 'PLATFORM 404',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-1.png?raw=true',
    originalPrice: '3,200',
    price: '2,600'
  },
  {
    slug: 'vm001',
    label: 'VM001',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-2.png?raw=true',
    originalPrice: '3,200',
    price: '2,600'
  },
  {
    slug: 'melty-kiss',
    label: 'Melty Kiss',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-3.png?raw=true',
    originalPrice: '5,000',
    price: '4,000'
  },
  {
    slug: 'boomblok-white',
    label: 'BOOMBLOK',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-4.png?raw=true',
    originalPrice: '4,000',
    price: '3,200'
  },
  {
    slug: 'boomblok-blue',
    label: 'BOOMBLOK',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-5.png?raw=true',
    originalPrice: '4,000',
    price: '3,200'
  },
  {
    slug: 'r-uner',
    label: 'R:UNER',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-6.png?raw=true',
    originalPrice: '5,000',
    price: '4,000'
  },
  {
    slug: 'sugar-snap',
    label: 'Sugar Snap',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-7.png?raw=true', 
    originalPrice: '5,000',
    price: '4,000'
  },
  {
    slug: 'neofoam',
    label: 'Neofoam',
    imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week2/product-8.png?raw=true',
    originalPrice: '5,000',
    price: '4,000'
  }
]