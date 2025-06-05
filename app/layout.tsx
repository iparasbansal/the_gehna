import React, { ReactNode } from "react";

export const metadata = {
  title: "THE GEHNA - 1 Gram Gold Jewellery",
  description: "Explore elegant and affordable 1 gram gold jewellery from THE GEHNA.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}