export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Boilerplate</h1>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
              ✓
            </span>
            <span className="text-gray-700 underline">
              <a href="https://bun.sh/blog/bun-v1.2#bun-is-a-javascript-bundler">
                bun's new bundler
              </a>
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
              ✓
            </span>
            <span className="text-gray-700">
              Live reload page on file changes
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
              ✓
            </span>
            <span className="text-gray-700">React</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
              ✓
            </span>
            <span className="text-gray-700">Tailwind</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
