import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <p className="text-7xl font-extrabold text-[#00C9A7]">404</p>
        <p className="mt-2 text-lg font-semibold text-[#1A2332]">
          Page not found
        </p>
        <p className="mt-1 text-sm text-gray-500">
          The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-5 rounded-lg bg-[#00C9A7] px-5 py-2 text-sm font-semibold text-white hover:bg-[#00A88A]"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
