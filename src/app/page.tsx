import React from 'react';
import DataContainer from "@/components/DataContainer";
import { NextSeo } from 'next-seo';
import { SEOConfig } from '../utils/seoConfig';

const seo = SEOConfig(
  'Ganbatte Project Home',
  'Ganbatte Project initial page.',
  'https://www.ganbatte.vercel.app/'
);

export default async function Home() {
  return (
    <>
      <NextSeo {...seo} />
      <DataContainer />
    </>
  );
};