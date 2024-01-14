import { Link } from '@tanstack/react-router'

import { repositoriesRoute } from '.'
import '../assets/repositories.css'

const Repositories = () => {
  const data = repositoriesRoute.useLoaderData()
  return (
    <>
      <h1>Repositories</h1>
      <Link to="/">
        <button>Go back to the home page</button>
      </Link>
      <ul className="repositories-list">
        {data.map((repository) => (
          <li key={repository.name}>
            <a href={repository.html_url} target="_blank" rel="noreferrer">
              {repository.full_name} - ⭐️{repository.stargazers_count}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export { Repositories }
