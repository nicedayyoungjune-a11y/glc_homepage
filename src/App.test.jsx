import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { routes } from './routes.js';

describe('GLC Vite app', () => {
  it('renders the home route with the final brand promise', () => {
    render(<App initialPath="/" />);

    expect(screen.getByRole('heading', { name: /교육과 컨설팅으로 사람과 기업의 성장을 만듭니다\./i })).toBeInTheDocument();
    expect(screen.getByText(/강의〮프레젠테이션/)).toBeInTheDocument();
  });

  it('renders the final home page trust copy and footer message', () => {
    render(<App initialPath="/" />);

    expect(screen.getAllByText(/3,000회 이상/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/정부〮공공기관 프로젝트/).length).toBeGreaterThan(0);
    expect(screen.getByText(/콘텐츠를 자산으로/)).toBeInTheDocument();
    expect(screen.getByText(/교육은 실제 삶과 근무 현장,/)).toBeInTheDocument();
    expect(screen.getByText(/공공기관과 기업, 소상공인의 변화를 돕는 교육 파트너입니다\./)).toBeInTheDocument();
  });

  it('renders every configured route without falling back to the not found page', () => {
    for (const route of routes) {
      render(<App initialPath={route.path} />);

      expect(screen.getByTestId('page-shell')).toHaveAttribute('data-route', route.id);
      expect(screen.queryByRole('heading', { name: /페이지를 찾을 수 없습니다/i })).not.toBeInTheDocument();
      cleanup();
    }
  });
});
