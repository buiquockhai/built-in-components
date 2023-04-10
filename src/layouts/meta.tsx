import Head from 'next/head'

export type MetaProps = {
  title?: string
  description?: string
  image?: any
  pathname?: string
  keywords?: string
}

export function Meta({
  title,
  description,
  image,
  pathname = '',
  keywords = '',
}: MetaProps) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      <meta
        name='thumbnail'
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${image}`}
      />
      <meta name='keywords' content={`${keywords}`} />
      <meta name='description' content={description} />
      <meta
        property='og:url'
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}
      />
      <meta property='og:site_name' content={`${title} | Bui Quoc Khai`} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${image}`}
      />
      <meta
        property='og:image:url'
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${image}`}
      />
      <meta
        property='og:image:secure_url'
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${image}`}
      />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='Khai Developer' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${image}`}
      />
    </Head>
  )
}
