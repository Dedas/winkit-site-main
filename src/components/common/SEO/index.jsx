import React from 'react';
import Helmet from 'react-helmet';

// Metadata from Contentful
import { contentfulMetadata } from 'data/contentful-metadata'

export const SEO = ({ metaData = contentfulMetadata(), location = '' }) => {

  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${metaData.legalName}",
		"url": "${metaData.url}",
		"logo": "${metaData.logo}",
		"foundingDate": "${metaData.foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${metaData.legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${metaData.email}",
			"telephone": "${metaData.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${metaData.city}",
			"addressRegion": "${metaData.region}",
			"addressCountry": "${metaData.country}",
			"postalCode": "${metaData.zipCode}"
		},
		"sameAs": [
			"${metaData.twitter}",
			"${metaData.google}",
			"${metaData.youtube}",
			"${metaData.linkedIn}",
			"${metaData.instagram}",
			"${metaData.gitHub}"
		]
    }`;

  return (

    <Helmet>
      <meta name="description" content={metaData.defaultDescription} />
      <meta name="image" content={metaData.thumbnail} />

      <meta property="og:url" content={`${metaData.url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.defaultDescription} />
      <meta property="og:image" content={metaData.thumbnail} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.defaultDescription} />
      <meta name="twitter:image:src" content={metaData.thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{metaData.title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
