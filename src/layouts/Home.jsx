import office from "../assets/office.avif";

import teamCulture from "../assets/teamCulture.avif";
import together from "../assets/together.avif";
import { FiArrowRightCircle } from "react-icons/fi";

import META from "../utils/consts/contents";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="mt-100px px-6">
        <section className="">
          <div className="box-border m-auto max-w-75">
            <h1 className="mb-88px text-3.375 leading-4.5625 font-bold whitespace-pre-line">
              {META.HOME.INTRODUCE.TITLE}
            </h1>
            <img className="mb-12" src={office} alt="사무실 풍경" />
            <p className="whitespace-pre-line text-1.625 leading-2.4375 box-border m-auto font-bold tracking-tight">
              {META.HOME.INTRODUCE.DESCRIPTION}
            </p>
          </div>
        </section>
        <section className="mt-[160px]  box-border m-auto max-w-75 flex flex-row">
          <div className="team  font-bold w-[340px] flex flex-col mr-[38px]">
            <span className="text-xl mb-[24px] h-[31px]">
              {META.HOME.VALUE.TEAM}
            </span>
            <h1 className="whitespace-pre-line text-2.625 leading-[3.5625rem] mb-8 tracking-tighter">
              {META.HOME.VALUE.TARGET}
            </h1>
          </div>
          <div className="effort text-[1.125rem] whitespace-pre-line w-[340px] mb-[2.5rem] leading-[1.875rem] tracking-tight">
            {META.HOME.VALUE.DESCRIPTION}
          </div>
        </section>
        <section className="  m-auto max-w-75 overflow-hidden">
          <ul className="flex flex-row"></ul>
          <div className="flex flex-row justify-center gap-8">
            <button className="relative rounded-full border-6 border-solid border-black"></button>
            <button className="relative rounded-full border-6 border-solid border-black"></button>
            <button className="relative rounded-full border-6 border-solid border-black"></button>
          </div>
        </section>
        <section className="w-full max-w-75 ">
          <div className="h-[500px] flex mt-[160px]">
            <div className=" h-full flex flex-col">
              <h1 className="mb-[1.5rem] w-[340px] h-[31px] text-[1.25rem] leading-[1.9375rem] font-bold">
                {META.HOME.CULTURE.TEAMCULTURE}
              </h1>
              <span className="w-[340px] whitespace-pre-line text-[2.625rem] leading-[3.5625rem] mb-8 font-bold">
                {META.HOME.CULTURE.DESCRIPTION}
              </span>
              <span className="flex flex-row">
                <a
                  className="font-bold text-[1.25rem] leading-[1.9375rem]"
                  href="/culture"
                  alt="팀 문화 자세히 보기"
                >
                  {META.HOME.CULTURE.DETAIL}
                </a>
                <a href="/culture" alt="팀 문화 자세히 보기">
                  <FiArrowRightCircle className="w-[32px] h-[32px] ml-[0.5em]" />
                </a>
              </span>
            </div>
            <img
              className="w-full h-full"
              src={teamCulture}
              alt="팀 문화"
            ></img>
          </div>
        </section>
      </main>
      <div>
        <section>
          <img
            className="w-[768px] h-[240px] mt-[160px]"
            src={together}
            alt="함께 얘기하는 팀원들 모습"
          />
        </section>
        <section className="">
          <div className="m-auto flex flex-col py-[100px]">
            <h1 className="text-[2.625rem] leading-[3.5625rem] text-center font-bold tracking-thighter mb-[32px] whitespace-pre-line">
              {META.HOME.JOB.DESCRIPTION}
            </h1>
            <span className="flex flex-row justify-center text-[1.25rem] leading-[1.9375rem] font-bold">
              <a href="/" alt="채용공고 보러 가기">
                {META.HOME.JOB.DETAIL}
              </a>
              <a href="/jobs" alt="채용공고 보러 가기">
                <FiArrowRightCircle className="w-[32px] h-[32px] ml-[0.5em]" />
              </a>
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
