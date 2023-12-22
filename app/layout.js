import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Formulário de Pesquisa de Satisfação",
  description: "Teste Fidelimax",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
