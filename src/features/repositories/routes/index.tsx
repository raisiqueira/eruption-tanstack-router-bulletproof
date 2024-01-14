import { Route } from '@tanstack/react-router'

import { rootRoute } from '@/routes'

import { getRepositories } from '../api/getRepositories'
import { Repositories } from './Repositories'

const repositoriesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'repositories',
  component: Repositories,
  loader: ({ abortController }) => getRepositories({ signal: abortController.signal }),
})

export { repositoriesRoute }
