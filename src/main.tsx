import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from '@tanstack/react-router'

import { router } from '@/routes'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

if (import.meta.env.MODE === 'test') {
  import('@/__mocks__/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>,
      )
    })
} else {
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// Uncomment if you want to see the Lighthouse report in the console
// import reportWebVitals from './reportWebVitals'
// reportWebVitals(console.log)
