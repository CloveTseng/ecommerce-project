const SizePickerButton = ({ text, className, name, id, value, disabled = false, checked = false }) => {
  const buttonClasses = `btn ${className || ''} ${disabled ? 'disabled' : ''} ${checked ? 'active' : ''}`.trim();
  return (
    <li className={ buttonClasses }>
      <input type="radio" name={ name } id={ id } value={ value }  className='visually-hidden' />
      <label htmlFor={id}>{text}</label>
    </li>
  )
}
export default SizePickerButton;