export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Balatrix",
    "alternateName": "A2 Cloud Solutions",
    "url": "https://balatrix.com",
    "logo": "https://balatrix.com/og-image.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-844-225-2435",
      "contactType": "customer service",
      "areaServed": ["US", "CA"],
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/balatrix",
      "https://twitter.com/balatrix"
    ]
  };
};

export const generateProductSchema = (productName, description, price) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productName,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Balatrix"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://balatrix.com/pricing",
      "priceCurrency": "USD",
      "price": price,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };
};

export const generateBreadcrumbSchema = (items) => {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
};

export const generateFAQSchema = (faqs) => {
  const mainEntity = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };
};
