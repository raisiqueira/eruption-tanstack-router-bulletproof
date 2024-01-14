import { ReactElement } from 'react'

import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
  createMemoryHistory,
} from '@tanstack/react-router'
import { render } from '@testing-library/react'

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  const rootRoute = new RootRoute()
  const testingRoute = new Route({
    getParentRoute: () => rootRoute,
    path: route,
    component: () => ui,
  })
  const routeTree = rootRoute.addChildren([testingRoute])
  const router = new Router({
    routeTree,
    history: createMemoryHistory({ initialEntries: [route] }),
  })

  return render(<RouterProvider router={router} />)
}

export { renderWithRouter }
