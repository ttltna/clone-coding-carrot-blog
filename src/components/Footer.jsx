import { CgArrowTopRight } from "react-icons/cg";
import META from "../utils/consts/contents";
import { AiFillGithub } from "react-icons/ai";
import { SiFacebook, SiInstagram, SiMedium } from "react-icons/si";

const Footer = () => {
  const {
    POLICY,
    RESOURCE,
    QNA,
    IR,
    ADDRESS,
    IREMAILADDRESS,
    JOBQNA,
    JOBEMAILADDRESS,
    COMPANY,
  } = META.HOME.FOOTER;

  return (
    <footer className="mt-[10rem] pt-[4.375rem] pb-4 border-t-2 border-solid">
      <section className="px-6">
        <nav className="max-w-[75rem] m-auto flex flex-row items-center justify-between">
          <ul className="flex flex-row text-[0.8125rem] w-[458px] justify-between">
            <li>
              <a className="flex flex-row font-bold" href="/">
                {POLICY}
                <CgArrowTopRight />
              </a>
            </li>
            <li>
              <a className="flex flex-row" href="/">
                {RESOURCE}
                <CgArrowTopRight />
              </a>
            </li>
            <li>
              <a href="/">{QNA}</a>
            </li>
            <li>
              <a href="/">{IR}</a>
            </li>
          </ul>
          <ul className="w-[200px] flex flex-row  justify-between">
            <li>
              <a href="/" alt="깃허브 바로가기">
                <AiFillGithub className="w-[24px] h-[24px]" />
              </a>
            </li>
            <li>
              <a href="/" alt="당근마켓 팀 블로그 바로가기">
                <SiMedium className="w-[24px] h-[24px]" />
              </a>
            </li>
            <li>
              <a href="/" alt="페이스북 바로가기">
                <SiFacebook className="w-[24px] h-[24px]" />
              </a>
            </li>
            <li>
              <a href="/" alt="인스타그램 바로가기">
                <SiInstagram className="w-[24px] h-[24px]" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-[33px]">
          <section className="flex flex-row flex-wrap text-[0.875rem] max-w-[37.5rem] text-[#868b94]">
            <p>
              {ADDRESS}
              <a className="underline" href="#" alt="관련문의 이메일 주소">
                {IREMAILADDRESS}
              </a>
            </p>
            <p>
              {JOBQNA}
              <a className="underline" href="#">
                {JOBEMAILADDRESS}
              </a>
            </p>
          </section>
          <p className="text-[0.8125rem] text-gray-500 mt-5 mb-20 font-bold">
            {COMPANY}
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
