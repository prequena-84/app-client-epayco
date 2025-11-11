import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Clientes ePayco",
  description: "Aplicación para Demo de Monedero Electrónico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
};