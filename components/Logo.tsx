export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#FF6FA5" />
      <path d="M20 38c0-8 5-14 12-14s12 6 12 14" stroke="#FFF8F4" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="21" r="6" fill="#F2B705" stroke="#FFF8F4" strokeWidth="2" />
      <path d="M18 38h28c0 5.5-4.5 10-10 10H28c-5.5 0-10-4.5-10-10Z" fill="#FFF8F4" />
      <path d="M23 44v3M29 45.5v3M35 45.5v3M41 44v3" stroke="#FF6FA5" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
