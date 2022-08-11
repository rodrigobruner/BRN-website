
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import SocialMenu from './components/SocialMenu';

function Home() {
  const t = useTranslations('Home');

  return <div className="
                -mt-11 
                w-screen 
                h-screen 
                text-white 
                border-0 
                m-0 
                bg-slate-800">
    <br />
    <h1 className="
          mt-10 
          mb-14 
          text-yellow-500 
          text-5xl 
          underline 
          font-extrabold 
          text-center">{t('resume')}</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="pl-36 pr-36">
        <h3 className="text-3xl mt-6">{t('salutation')}</h3>
        <h2 className="text-5xl mt-8">{t("jobRole")}</h2>
        <p className="text-xl mt-6">{t("description")}</p>
        <br />
      </div>

      <div className="z-10 text-center pr-10">
        <Image
          src="/images/bruner_avatar.png"
          layout="intrinsic"
          width="685"
          height="400"
          alt='Bruner avatar'
          className="
            rounded-full 
            absolute"
        />
        <br />
        <a href="https://www.linkedin.com/in/rodrigobruner/" target="_new">
          <button
            className="
              absolute
              cursor-pointer
              -mt-16
              -ml-20
              bg-yellow-500 
              hover:bg-yellow-600 
              text-gray-800 
              text-2xl 
              font-bold 
              py-2 
              px-4 
              rounded-full 
              inline-flex 
              items-center">
            <FontAwesomeIcon
              icon={faIdCard}
              className="border-slate-800"
            />
            <span>&nbsp;{t("btLinkdIn")}</span>
          </button>
        </a>
      </div>

      <SocialMenu />
      <div className="
            absolute 
            -bottom-3 
            right-0 
            border-solid 
            border-transparent 
            border-b-white   
            border-t-0  
            border-r-0 
            border-b-[52vw] 
            border-l-[55vw] 
            w-0 
            h-0" >
      </div>
    </div >
  </div>
}

export default Home 