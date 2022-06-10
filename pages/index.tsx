import type { NextPage } from 'next'
import { useTranslations } from 'next-intl';

import PageLayout from './components/PageLayout';
import Home from './home'

const Index: NextPage = () => {
  const t = useTranslations('Index');
  return (
    <PageLayout title={t('title')}>
      <Home></Home>
    </PageLayout>
  )
}

// pages/index.js
export async function getStaticProps({ locale }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`./messages/${locale}.json`)).default
    }
  };
}

export default Index
