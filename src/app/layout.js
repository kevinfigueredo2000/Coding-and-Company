'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/iso.svg" />
      <title>Coding&Company</title>
      <body>{children}
      </body>
    </html>
  )
}
