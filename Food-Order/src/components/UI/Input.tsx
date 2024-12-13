interface CheckoutInputProps {
  label: string;
  id: string;
  type: string;
}

export default function Input({
  label,
  id,
  type,
  ...props
}: CheckoutInputProps) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required {...props} />
    </p>
  );
}
