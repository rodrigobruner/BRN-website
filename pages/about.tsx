import { useTranslations } from 'next-intl';

function About() {
  const t = useTranslations('About');
  return <div className="w-screen h-screen text-white bg-white-800">
    <h1 className="text-yellow-500 py-7 text-4xl font-extrabold text-center font-mono">About</h1>

  </div>
}

export default About