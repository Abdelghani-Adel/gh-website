export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-flex">
        <img src="/logo.png" alt="Logo" className="w-16 h-16" />

        <img
          src="/logo.png"
          alt="Logo ping"
          className="w-16 h-16 absolute top-0 left-0 animate-ping opacity-50"
        />

        <img
          src="/logo.png"
          alt="Logo pulse"
          className="w-16 h-16 absolute top-0 left-0 animate-pulse opacity-80"
        />
      </div>
    </div>
  );
}
