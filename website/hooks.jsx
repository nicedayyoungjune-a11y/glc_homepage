// Shared responsive hook — loaded before all components
(function () {
  function useBreakpoint() {
    const [width, setWidth] = React.useState(
      typeof window !== 'undefined' ? window.innerWidth : 1200
    );
    React.useEffect(() => {
      const handler = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handler);
      return () => window.removeEventListener('resize', handler);
    }, []);
    return {
      isMobile:  width < 768,
      isTablet:  width >= 768 && width < 1100,
      isDesktop: width >= 1100,
      width,
    };
  }
  window.useBreakpoint = useBreakpoint;
})();
