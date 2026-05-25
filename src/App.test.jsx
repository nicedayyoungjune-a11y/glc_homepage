import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { routes } from './routes.js';

describe('GLC Vite app', () => {
  it('renders the home route with the final brand promise', () => {
    const { container } = render(<App initialPath="/" />);

    expect(screen.getByRole('heading', { name: /교육과 컨설팅으로 사람과 기업의 성장을 만듭니다\./i })).toBeInTheDocument();
    expect(screen.getByText(/강의·프레젠테이션/)).toBeInTheDocument();
    expect(container.querySelectorAll('img[src="/partner-logos/hrdkorea.svg"]')).toHaveLength(2);
  });

  it('renders the home page as an event-style HRD landing page', () => {
    render(<App initialPath="/" />);

    expect(screen.getByRole('navigation', { name: /홈페이지 주요 섹션/i })).toBeInTheDocument();
    expect(screen.getByText(/교육 아카이브 상담/)).toBeInTheDocument();
    expect(screen.getByText(/한 번에 보는 교육 진행 흐름/)).toBeInTheDocument();
    expect(screen.getByText(/기관 맞춤 설계/)).toBeInTheDocument();
  });

  it('renders every configured route without falling back to the not found page', () => {
    for (const route of routes) {
      render(<App initialPath={route.path} />);

      expect(screen.getByTestId('page-shell')).toHaveAttribute('data-route', route.id);
      cleanup();
    }
  });
});
