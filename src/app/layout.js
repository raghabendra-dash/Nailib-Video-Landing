import './styles/globals.css';

export const metadata = {
  title: 'Nailib Videos',
  description: 'Your ultimate resource for IB success.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}