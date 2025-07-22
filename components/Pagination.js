import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <ul className='pagination'>
      <li className='pagination-item'><IoIosArrowBack width={20}/></li>
      <li className='pagination-item'>1</li>
      <li className='pagination-item'>2</li>
      <li className='pagination-item'>3</li>
      <li className='pagination-item'>...</li>
      <li className='pagination-item'>10</li>
      <li className='pagination-item'><IoIosArrowForward /></li>
    </ul>
  )
}
export default Pagination;