import Link from 'next/link';
const Breadcrumb = ({items = []}) => {
  return (
    <nav>
      <ul className="breadcrumb">
        {items.map ((item, index) => (
          <li key={index}>
            <Link href={item.href} className='breadcrumb-item'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Breadcrumb;