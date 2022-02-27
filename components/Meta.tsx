import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
	noIndex?: boolean;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png`}
          key="icon16"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
				noindex={props.noIndex}
				nofollow={props.noIndex}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: "cs",
          site_name: "Pomáhej Ukrajině",
        }}
      />
    </>
  );
};

export { Meta };
