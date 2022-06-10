
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faFileSignature,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";


function Home() {
  const t = useTranslations('Home');
  const triangle = {
    width: 0,
    height: 0,
    position: "absolute",
    bottom: "0px",
    right: "0px",
    borderWidth: "0 0 52vw 55vw",
    borderColor: "transparent transparent #FFFFFF transparent",
    borderStyle: "solid"
  }

  return <div className="-mt-11 w-screen h-screen text-white border-0 m-0 bg-slate-800">
    <br />
    <h1 className="mt-10 mb-14 text-yellow-500 text-5xl underline font-extrabold text-center">
      {t('resume')}
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className=" p-5">
        <h3 className="text-3xl mt-6">
          {t('salutation')}
        </h3>
        <h2 className="text-5xl mt-8">
          {t("jobRole")}
        </h2>
        <p className="text-xl mt-6">
          {t("description")}
        </p>
        <br />
      </div>

      <div className="z-10 text-center p-8">
        <Image
          src="/images/bruner_avatar.png"
          layout="intrinsic"
          width="685"
          height="400"
          className="
          rounded-full 
          absolute
          "
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
              style={{ fontSize: 25 }}
            />
            <span>
              &nbsp;
              {t("btLinkdIn")}
            </span>
          </button>
        </a>
      </div>
    </div>

    <div style={triangle} className="z-0"></div>

  </div >
}

export default Home 