import "./globals.css";

export const metadata = {
  title: "Veyron | Discord Ticket Management",
  description:
    "نظام احترافي لإدارة تذاكر الدعم في سيرفرات Discord.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
