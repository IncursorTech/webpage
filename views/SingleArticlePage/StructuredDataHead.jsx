import Head from 'next/head';
import { jsonLdScriptProps } from 'react-schemaorg';
import { EnvVars } from 'env';
export default function StructuredDataHead(props) {
    const { slug, title, date, description, tags, author } = props;
    const currentSiteUrl = EnvVars.URL + 'blog/' + slug;
    const ogImageUrl = EnvVars.OG_IMAGES_URL + `${slug}.png`;
    const domainName = EnvVars.URL.replace('https://', '');
    const logoUrl = EnvVars.URL + 'logo.png';
    return (<Head>
      <script {...jsonLdScriptProps({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        mainEntityOfPage: `${currentSiteUrl}#content`,
        headline: title,
        datePublished: date,
        dateModified: date,
        author: {
            '@type': 'Person',
            name: author,
        },
        description: description,
        dependencies: tags,
        proficiencyLevel: 'Beginner',
        publisher: {
            '@type': 'Organization',
            name: domainName,
            logo: {
                '@type': 'ImageObject',
                url: logoUrl,
            },
        },
        image: {
            '@type': 'ImageObject',
            url: ogImageUrl,
        },
    })}/>

      <script {...jsonLdScriptProps({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: domainName,
        alternateName: domainName,
        url: EnvVars.URL,
    })}/>
    </Head>);
}
