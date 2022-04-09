export default function ArrowUp() {
  return (
    <a href="#top">
      <aside className="bg-glass fixed bottom-5 right-5 z-50 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </aside>
    </a>
  );
}
