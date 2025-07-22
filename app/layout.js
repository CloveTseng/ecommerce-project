import { Noto_Sans_TC  } from "next/font/google";
import "../styles/globals.scss";
import { IoPersonOutline } from "react-icons/io5";
import Link from 'next/link';
import Button from '../components/Button';

const notoSansTC = Noto_Sans_TC({
  subset: ['latin'],
  preload: false,
}) 

export const metadata = {
  title: "URBNSTYLE Shoe E-Shop",
  description: "since 2025 URBNSTYLE Shoe Shop",
};

export default function RootLayout({ children }) {
  let header = (
    <header className='container'>
      <nav>
        <div className='d-flex'>
          <Link href='/'><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/8719e07a34f05b853e98e1402ed748446fdd8ef3/2025-week1/logo.svg" alt="logo" /></Link>
          <ul className='nav-list'>
            <li><Link href='/products' className='list-item'>商品列表</Link></li>
            <li><Link href='/story' className='list-item'>品牌故事</Link></li>
          </ul>
        </div>
        <IoPersonOutline className='p-3'/>
      </nav>
    </header>
  )

  let footer = (
    <>
      <div className='cta'>
        <h5 className='cta-text'>加入會員取得 9 折優惠</h5>
        <Button text="馬上註冊" className="btn-dark" />
      </div>
      <footer>
        <div className='footer-link container'>
          <Link href='/'><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/8719e07a34f05b853e98e1402ed748446fdd8ef3/2025-week1/logo.svg" alt="logo" /></Link>
          <ul className='footer-list'>
            <li><Link href='/products' className='list-item'>商品列表</Link></li>
            <li><Link href='/story' className='list-item'>品牌故事</Link></li>
          </ul>
        </div>
        <div className="copyright container">
          <p>Copyright &copy; 2025 URBNSTYLE</p>
          <p>All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )

  return (
    <html lang="zh-Hant-TW" >
      <body className={ notoSansTC.variable }>
        {header}
        { children }
        {footer}
      </body>
    </html>
  );
}
