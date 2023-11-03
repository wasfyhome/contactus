export const metadata = {
  title: "about page",
  description: "about page info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
