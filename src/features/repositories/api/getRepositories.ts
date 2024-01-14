import { type GitHubRepository } from '../types/repositories'

const getRepositories = async (params: RequestInit | undefined) => {
  const response = await fetch('https://api.github.com/users/eruptionjs/repos', params)
  if (!response.ok) throw new Error('Failed to fetch the EruptionJS repositories')
  const repositories = (await response.json()) as GitHubRepository[]
  return repositories
}

export { getRepositories }
