export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mariabrunn Digital",
    url: "https://mariabrunn-digital.at",
    logo: "https://mariabrunn-digital.at/images/Logo.png",
    description: "Die digitale Medienplattform der Pfarre Mariabrunn",
    contactPoint: {
      "@type": "ContactPoint",
      email: "kontakt@mariabrunn-digital.at",
      contactType: "customer service",
      availableLanguage: "German",
    },
    sameAs: [
      "https://www.youtube.com/@MariaBrunnDigital",
      "https://www.facebook.com/pfarre.mariabrunn",
      "https://www.instagram.com/mariabrunndigital",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ChurchSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Wallfahrtskirche Mariabrunn",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wien",
      addressRegion: "Wien",
      addressCountry: "AT",
    },
    url: "https://mariabrunn-digital.at/kirche",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
