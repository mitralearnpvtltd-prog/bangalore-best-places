
import { Helmet } from "react-helmet-async";

const SITE = "https://yourdomain.com"; // Replace with your real domain after deployment

export default function SeoHead({ title, description, url }) {
  const canonicalUrl = `${SITE}${url}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Crawling and indexing */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph / social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TravelBites" />

      {/* Twitter sharing */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
