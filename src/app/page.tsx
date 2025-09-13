export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-red-500">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-red-900 mb-4">
              Hello, World! 👋
            </h1>
            <p className="text-lg text-red-700">
              Welcome to your simple Next.js application
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-red-600">Built with Next.js & Tailwind CSS</span>
            </div>
            
            <div className="pt-4 border-t border-red-200">
              <p className="text-sm text-red-400">
                Ready to build something amazing?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}