const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPES = {
    getStart: 'get-start',
    getStartWhite: 'get-start-white',
    contact: 'btn-contact',
  }
  return (
    <button className={BUTTON_TYPES[buttonType]} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
