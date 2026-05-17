import { useEffect, useMemo, useState } from 'react';
import { findRoute } from './routes.js';
import PublicNav from './components/PublicNav.jsx';
import PublicFooter from './components/PublicFooter.jsx';
import QuickAction from './components/QuickAction.jsx';
import NotFound from './pages/NotFound.jsx';

function getCurrentPath(initialPath) {
  if (initialPath) return initialPath;
  if (typeof window === 'undefined') return '/';
  return window.location.pathname;
}

export default function App({ initialPath }) {
  const [path, setPath] = useState(getCurrentPath(initialPath));

  useEffect(() => {
    if (initialPath || typeof window === 'undefined') return undefined;

    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [initialPath]);

  const route = useMemo(() => findRoute(path), [path]);
  const Page = route?.component ?? NotFound;

  const navigate = (nextPath) => {
    if (initialPath || typeof window === 'undefined') {
      setPath(nextPath);
      return;
    }

    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell" data-testid="page-shell" data-route={route?.id ?? 'not-found'}>
      <PublicNav activeRoute={route?.id ?? 'not-found'} onNavigate={navigate} />
      <main>
        <Page />
      </main>
      <PublicFooter />
      <QuickAction />
    </div>
  );
}
