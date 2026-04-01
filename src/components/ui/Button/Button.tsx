type Props = {
  children: React.ReactNode;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ loading, children, ...props }: Props) {
  return (
    <button
      {...props}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}