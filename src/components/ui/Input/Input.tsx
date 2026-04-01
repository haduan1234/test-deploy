type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label>{label}</label>}
      <input
        {...props}
        className="border px-2 py-1 rounded"
      />
    </div>
  );
}