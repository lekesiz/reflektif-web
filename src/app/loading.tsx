export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary-600 font-bold text-sm">R</span>
        </div>
      </div>
    </div>
  );
}
