import Head from 'next/head';
import React from 'react';
import { EnvVars } from 'env';
export default function MetadataHead(props) {
    const { title, description, author } = props;
    return (<Head>
      <title>
        {title} | {EnvVars.SITE_NAME}
      </title>
      <meta name="description" content={description}/>
      <meta name="author" content={author}/>
    </Head>);
}
