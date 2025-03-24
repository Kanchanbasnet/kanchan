import { Helmet } from "react-helmet";
import favIcon from '../../public/favicon.png'

const Seo = ({
  title = "Kanchan Basnet | Software Engineer",
  description = "Backend developer skilled in Node.js, React.js, and TypeScript. Building reliable and efficient applications with clean, maintainable code.",
  keywords = "Kanchan Basnet, Software Engineer, Node.js, React.js, TypeScript, Backend Developer, Portfolio",
  ogImage = favIcon,
  ogUrl = "https://www.kanchanbasnet.com.np/",
  pathName = "",
}) => {
  const url = `${ogUrl}${pathName}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;
