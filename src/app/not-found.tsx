import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            ページが見つかりません
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            お探しのページは存在しないか、移動された可能性があります。
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <Link
            href="/"
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Home className="mr-2" size={18} />
            トップページに戻る
          </Link>
          
          <Link
            href="/?search="
            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Search className="mr-2" size={18} />
            求人を検索する
          </Link>
        </div>
      </div>
    </div>
  )
}

