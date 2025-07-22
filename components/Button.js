const Button = ({text, className}) => {
  const buttonClasses = `btn ${className || ''}`.trim();
  return (
    <button className={buttonClasses}>{text}</button>
  )
}
export default Button;