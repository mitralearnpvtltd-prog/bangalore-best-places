import { Helmet } from "react-helmet-async";

const SITE = "https://yourdomain.com"; // change after deployment

export default function SeoHead({ title, description, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE}${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE}${url}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
