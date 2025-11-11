import "@/styles/globals.css";
import "@/styles/theme.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Clientes ePayco",
  description: "Aplicación para Demo de Monedero Electrónico",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
};