import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SocialMenu() {
  const t = useTranslations('Home');
  return (
    <div className='absolute text-gray-400 m-0 p-6'>
      <br /><br /><br />
      <p className='rotate-90 w-40 -ml-16'>
        {t('social')}
      </p>
      <br /><br />
      <a
        href='https://dev.to/rodrigobruner'
        target="_new"
        className=' hover:text-yellow-500'>
        <button>
          <FontAwesomeIcon icon={faDev}
            className="border-slate-800 ml-1 className='rotate-0'"
            style={{ fontSize: 25 }} />
        </button>
      </a>

      <br /><br />
      <a
        href='https://github.com/rodrigobruner'
        target="_new"
        className=' hover:text-yellow-500'>
        <button>
          <FontAwesomeIcon icon={faGithub}
            className="border-slate-800 ml-1 className='rotate-0'"
            style={{ fontSize: 25 }} />
        </button>
      </a>
      <br /><br />
      <a
        href='https://www.linkedin.com/in/rodrigobruner/'
        target="_new"
        className=' hover:text-yellow-500'>
        <button>
          <FontAwesomeIcon icon={faLinkedin}
            className="border-slate-800 ml-1 className='rotate-0'"
            style={{ fontSize: 25 }} />
        </button>
      </a>
    </div>
  );
}
