import Link from 'next/link';

const Button = ({text, className, type, icon, href, disabled = false, checked = false}) => {
  const buttonClasses = `btn ${className || ''} ${disabled ? 'disabled' : ''} ${checked ? 'active' : ''}`.trim();
  const buttonHref = `${href || '/'}`.trim();
  return (
    <Link className={ buttonClasses } type={ type } href={buttonHref}>
      { icon && <span className='btn-icon'>{ icon }</span>}
      <span className='btn-text'>{ text }</span>
    </Link>
  )
}
export default Button;