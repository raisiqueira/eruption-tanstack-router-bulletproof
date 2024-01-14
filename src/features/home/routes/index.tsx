import { Route } from '@tanstack/react-router'

import { rootRoute } from '@/routes'

import { Home } from './Home'

const HomeRoute = new Route({ getParentRoute: () => rootRoute, path: '/', component: Home })

export { HomeRoute }
