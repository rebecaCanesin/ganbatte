import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import './dist/global-styles.css'
import { NextSeo } from 'next-seo';
import { SEOConfig } from '@/utils/seoConfig';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

const seo = SEOConfig(
  'Ganbatte Project Home',
  'Ganbatte Project initial page.',
  'https://www.ganbatte.vercel.app/'
);

export const metadata: Metadata = {
  title: "Ganbatte",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className} id="root">
          <header className="header">
            <Link href={'/'}><Image src='/assets/GANBATTE.svg' alt='logo'/></Link>
          </header>
          <div><Image src='/assets/Sream-de-Animes-3.jpg' alt='banner' className="banner_img" /></div>

          {children}
        <footer className="footer"><p>Desenvolvido com ❤️ por <a href="https://github.com/rebecaCanesin">Rebeca Canesin</a></p></footer>
        </body>
      </html>
    </>
  );
}
