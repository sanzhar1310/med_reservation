import Head from 'next/head';
import { FC } from 'react';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/** Header */}
      {props.children}
      {/** Footer */}
    </div>
  );
};
