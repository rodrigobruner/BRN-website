import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { ReactNode } from 'react';
import LocaleSwitcher from './LocaleSwitcher';

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LocaleSwitcher />
      <div>
        {children}
      </div>
    </>
  );
}
