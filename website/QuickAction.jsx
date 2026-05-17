function QuickAction() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        position: 'fixed', right: 32, bottom: 32, zIndex: 60,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--green-accent)', color: '#fff',
        border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: pressed
          ? '0 0 6px rgba(0,0,0,0.24), 0 8px 12px rgba(0,0,0,0)'
          : '0 0 6px rgba(0,0,0,0.24), 0 8px 12px rgba(0,0,0,0.14)',
        transform: pressed ? 'scale(0.95)' : 'scale(1)',
        transition: 'all 0.2s ease',
      }}
      aria-label="Quick action — 상담 신청">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>
  );
}
window.QuickAction = QuickAction;
