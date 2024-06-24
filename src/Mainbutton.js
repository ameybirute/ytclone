import './Mainbutton.css';

function Button(props) {
  return (
    <button 
      onMouseEnter={props.onMouseEnter} 
      onClick={props.onClick} 
      className="button" 
      type="button"
    >
      {props.label}
    </button>
  );
}

export default Button;
