import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { routes } from './routes.js';

describe('GLC Vite app', () => {
  it('renders the home route with the core brand promise', () => {
    render(<App initialPath="/" />);

    expect(screen.getByRole('heading', { name: /글로벌리더십센터/i })).toBeInTheDocument();
    expect(screen.getByText(/2026 교육과정 보기/)).toBeInTheDocument();
  });

  it('renders every configured route without falling back to the not found page', () => {
    for (const route of routes) {
      render(<App initialPath={route.path} />);

      expect(screen.getByTestId('page-shell')).toHaveAttribute('data-route', route.id);
      expect(screen.queryByText(/페이지를 찾을 수 없습니다/)).not.toBeInTheDocument();
      cleanup();
    }
  });
});
