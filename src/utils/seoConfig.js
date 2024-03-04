const defaultSEOConfig = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.ganbatte.vercel.app/',
    site_name: 'Ganbatte',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export function SEOConfig(title, description, canonical, image = null) {
  return {
    title,
    description,
    canonical,
    openGraph: {
      ...defaultSEOConfig.openGraph,
      url: canonical,
      title,
      description,
      images: image ? [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title,
        },
      ] : [],
    },
    twitter: {
      ...defaultSEOConfig.twitter,
    },
  };
}
