import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Curriculum from './pages/Curriculum.jsx';
import SmallBiz from './pages/SmallBiz.jsx';
import Notices from './pages/Notices.jsx';
import Videos from './pages/Videos.jsx';

export const routes = [
  { id: 'home', path: '/', label: '홈', component: Home },
  { id: 'curriculum', path: '/curriculum', label: '공공기관교육', component: Curriculum },
  { id: 'smallbiz', path: '/smallbiz', label: '소상공인', component: SmallBiz },
  { id: 'videos', path: '/videos', label: '일반공개과정', component: Videos },
  { id: 'notices', path: '/notices', label: '공지사항', component: Notices },
  { id: 'about', path: '/about', label: '회사소개', component: About },
];

export function normalizePath(pathname) {
  if (!pathname || pathname === '/index.html') return '/';
  return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
}

export function findRoute(pathname) {
  const path = normalizePath(pathname);
  return routes.find((route) => route.path === path) ?? null;
}
