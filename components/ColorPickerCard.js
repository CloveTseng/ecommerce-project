const ColorPickerCard = ({ text, imgUrl, alt, name, id, value, checked = false, disabled = false }) => {
  const cardClassName = `color-picker-card ${disabled ? 'disabled' : ''}${checked ? 'active' : ''}`;
  return (
    <li className={ cardClassName }>
      <label htmlFor={id}></label>
      <input type="radio" name={ name } id={ id } value={value} className='visually-hidden' />
      <img src={ imgUrl } alt={ alt } />
      <p className='color-label'>{ text }</p>
    </li>
  )
}
export default ColorPickerCard