import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth/register'); // ✅ Correct path
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-4">
      <div className="text-center">
        <h1 className="text-lg text-blue-700 mb-8">
          Start building your Point of Sale system with modern design.
        </h1>
        <button
          onClick={handleGetStarted}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}