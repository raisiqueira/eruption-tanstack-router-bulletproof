import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithRouter } from '@/test/testUtils'

import { Home } from './Home'

describe('App', () => {
  test('should return the correct text', async () => {
    renderWithRouter(<Home />)

    await waitFor(() =>
      expect(screen.queryByText(/Visit the repositories page/i)).toBeInTheDocument(),
    )
    expect(screen.getByText('Vite + React/TS = EruptionJS')).toBeInTheDocument()
  })

  test('should return 1 when the user click one time at button', async () => {
    renderWithRouter(<Home />)

    await waitFor(() =>
      expect(screen.queryByText(/Visit the repositories page/i)).toBeInTheDocument(),
    )
    const buttonElement = screen.getByRole('button', { name: 'count is 0' })
    expect(buttonElement).toBeInTheDocument()

    userEvent.click(buttonElement)

    waitFor(() => expect(screen.queryByText('count is 1')).toBeInTheDocument())
  })
})
