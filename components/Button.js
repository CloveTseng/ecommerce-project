const Button = ({text, className, type, icon, disabled = false, checked = false}) => {
  const buttonClasses = `btn ${className || ''} ${disabled ? 'disabled' : ''} ${checked ? 'active' : ''}`.trim();
  return (
    <button className={ buttonClasses } type={ type }>
      { icon && <span className='btn-icon'>{ icon }</span>}
      <span className='btn-text'>{ text }</span>
    </button>
  )
}
export default Button;