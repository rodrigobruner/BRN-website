import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');

  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <>
      <div className="z-10 text-right pt-5 pr-5 bg-slate-800 border-0 p-0 m-0">
        <Link href={route} locale={otherLocale}>
          <a>
            <Image
              src={["/images/", t("code"), ".png"].join("")}
              alt={t("language")}
              layout="fixed"
              width="35"
              height="30"
            />
          </a>
        </Link>
      </div>
    </>
  );
}