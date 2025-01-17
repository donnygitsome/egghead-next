import {
  FireIcon,
  BookmarkIcon,
  UserCircleIcon,
  CreditCardIcon,
} from '@heroicons/react/outline'
import cx from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useViewer} from 'context/viewer-context'
import LoginRequired from 'components/login-required'

const userPagesMap = [
  {
    path: '/user/subscription',
    name: 'Subscription',
    icon: CreditCardIcon,
  },
  {
    path: '/user/profile',
    name: 'Profile',
    icon: UserCircleIcon,
  },
  {
    path: '/user/activity',
    name: 'Activity',
    icon: FireIcon,
  },
  {
    path: '/user/bookmarks',
    name: 'Bookmarks',
    icon: BookmarkIcon,
  },
]

export default function UserLayout({children}: any) {
  const {viewer} = useViewer()
  const router = useRouter()
  const currentPath = router.asPath

  return (
    <div className="">
      <LoginRequired>
        <main className="">
          <div className="max-w-screen-xl mx-auto px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div className="sm:px-6 md:px-0 pt-10 pb-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Hello, {viewer?.full_name || viewer?.username}!
              </h1>
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 shadow">
              <div className="divide-y dark:divide-gray-700 divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {userPagesMap.map((page) => {
                      return (
                        <Link key={page.path} href={page.path}>
                          <a
                            className={cx(
                              page.path === currentPath
                                ? 'bg-blue-50 dark:bg-gray-900 border-blue-500 text-blue-700 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700'
                                : 'border-transparent text-gray-900 dark:hover:bg-gray-900 hover:bg-gray-50 hover:text-gray-900',
                              'group border-l-4 px-3 py-2 flex items-center text-sm font-medium dark:text-gray-50',
                            )}
                          >
                            <page.icon
                              className={cx(
                                page.path === currentPath
                                  ? 'text-blue-500 group-hover:text-blue-500 '
                                  : 'text-gray-400 group-hover:text-gray-500',
                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                              )}
                              aria-hidden="true"
                            />
                            <span className="truncate">{page.name}</span>
                          </a>
                        </Link>
                      )
                    })}
                  </nav>
                </aside>
                <section className="divide-y divide-gray-200 lg:col-span-9">
                  <div className="py-6 px-4 sm:p-6 lg:pb-8">{children}</div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </LoginRequired>
    </div>
  )
}
