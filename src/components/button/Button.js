// button
const Button = ({handleClick,text,type,classes}) => {
  return (
    <button onClick={handleClick} type={type} className={classes}>{text}</button>
  )
}

export default Button