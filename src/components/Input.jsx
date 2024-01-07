export default function Input({ ...props }) {
  return (
    <input
      type={props.type}
      name={props.nameInput}
      placeholder={props.placeHolder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
