import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const App = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  )
}

export { App }
