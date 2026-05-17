import { useState } from 'react';
import { routes } from '../routes.js';
import wordmark from '../../assets/glc-wordmark.svg';

export default function PublicNav({ activeRoute, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event, path) => {
    event.preventDefault();
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand-link" href="/" onClick={(event) => handleClick(event, '/')}>
        <img src={wordmark} alt="GLC" />
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={isOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="주요 메뉴">
        {routes.map((route) => (
          <a
            key={route.id}
            href={route.path}
            aria-current={activeRoute === route.id ? 'page' : undefined}
            onClick={(event) => handleClick(event, route.path)}
          >
            {route.label}
          </a>
        ))}
      </nav>
      <a className="btn btn-primary header-cta" href="/curriculum" onClick={(event) => handleClick(event, '/curriculum')}>
        교육 상담
      </a>
    </header>
  );
}
