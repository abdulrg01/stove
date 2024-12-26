import "./globals.css";

export const metadata = {
  title: "Stove",
  description: "Meet Stove, the best way to cook your food.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
