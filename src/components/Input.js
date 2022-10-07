const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={`input ${props.className}`}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
