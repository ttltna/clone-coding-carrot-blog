import office from "../assets/office.avif";
import worker1 from "../assets/worker1.avif";
import worker2 from "../assets/worker2.avif";
import worker3 from "../assets/worker3.avif";
import worker4 from "../assets/worker4.avif";
import worker5 from "../assets/worker5.avif";
import worker6 from "../assets/worker6.avif";
import teamCulture from "../assets/teamCulture.avif";
import together from "../assets/together.avif";
import { FiArrowRightCircle } from "react-icons/fi";
import { CgArrowTopRight } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { SiMedium, SiInstagram, SiFacebook } from "react-icons/si";
import { useRef, useState, useEffect } from "react";

import META from "../utils/consts/consts";

const WorkerSpeech = () => {
  const turn = [0, 1, 2, 3, 4, 5];
  const workers = [worker1, worker2, worker3, worker4, worker5, worker6];
  const speech = [
    META.HOME.VALUE.INTERVIEW.FIRST,
    META.HOME.VALUE.INTERVIEW.SECOND,
    META.HOME.VALUE.INTERVIEW.THIRD,
    META.HOME.VALUE.INTERVIEW.FOURTH,
    META.HOME.VALUE.INTERVIEW.FIFTH,
    META.HOME.VALUE.INTERVIEW.SIXTH,
  ];
  const workerName = [
    META.HOME.VALUE.POSITION.FIRST,
    META.HOME.VALUE.POSITION.SECOND,
    META.HOME.VALUE.POSITION.THIRD,
    META.HOME.VALUE.POSITION.FOURTH,
    META.HOME.VALUE.POSITION.FIFTH,
    META.HOME.VALUE.POSITION.SIXTH,
  ];
  return (
    // 이미지가 1200해상도부턴 가로 556px 고정
    // 992해상도 2개 이미지가 나오는데 452
    // 991해상도부터 이미지 1개 가장 이미지가 클때이고 943px
    // 265해상도부터 217.047px 고정

    //320해상 272
    //375 327
    //425 377
    //768 720 md
    //1024 468 lg
    //1440 556

    // mobile_S:w-[272px] mobile_M:w-[327px] mobile_L:w-[377px] md:w-[720px] lg:w-[468px] Laptop_L:w-[556px]
    <>
      {turn.map((num) => (
        <>
          <li className="flex flex-col mr-9">
            <img
              className="min-w-[217px] max-w-[943px]"
              src={workers[num]}
              alt={`직원` + (num + 1)}
            />
            <p className="text-[1.625rem] font-bold leading-normal my-[31px] overflow-auto tracking-tight">
              {speech[num]}
            </p>
            <p className="mb-[85px] text-[1.25rem] font-light">
              {workerName[num]}
            </p>
          </li>
        </>
      ))}
    </>
  );
};

const RootPage = () => {
  const [windowScreen, setWindowScreen] = useState({
    width: window && window.innerWidth,
    height: window && window.innerHeight,
  });

  const handleResize = () => {
    setWindowScreen((prev) => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowScreen]);

  const carousel = useRef();

  const btn1 = () => {
    console.log(windowScreen);
    carousel.current.className.match("translate")
      ? (carousel.current.className = `flex flex-row  translate-x-0 duration-500`)
      : (carousel.current.className += ` translate-x-0 duration-500`);
  };
  const btn2 = () => {
    carousel.current.className.match("translate")
      ? (carousel.current.className = `flex flex-row  translate-x-[-1190px] duration-500`)
      : (carousel.current.className += ` translate-x-[-1190px] duration-500`);
  };
  const btn3 = () => {
    carousel.current.className.match("translate")
      ? (carousel.current.className = `flex flex-row  translate-x-[-2380px] duration-500`)
      : (carousel.current.className += ` translate-x-[-2380px] duration-500`);
  };
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
          <ul className="flex flex-row" ref={carousel}>
            <WorkerSpeech />
          </ul>
          <div className="flex flex-row justify-center gap-8">
            <button
              className="relative rounded-full border-6 border-solid border-black"
              onClick={btn1}
            ></button>
            <button
              className="relative rounded-full border-6 border-solid border-black"
              onClick={btn2}
            ></button>
            <button
              className="relative rounded-full border-6 border-solid border-black"
              onClick={btn3}
            ></button>
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
      <footer className="mt-[10rem] pt-[4.375rem] pb-4 border-t-2 border-solid">
        <section className="px-6">
          <nav className="max-w-[75rem] m-auto flex flex-row items-center justify-between">
            <ul className="flex flex-row text-[0.8125rem] w-[458px] justify-between">
              <li>
                <a className="flex flex-row font-bold" href="/">
                  {META.HOME.FOOTER.POLICY}
                  <CgArrowTopRight />
                </a>
              </li>
              <li>
                <a className="flex flex-row" href="/">
                  {META.HOME.FOOTER.RESOURCE}
                  <CgArrowTopRight />
                </a>
              </li>
              <li>
                <a href="/">{META.HOME.FOOTER.QNA}</a>
              </li>
              <li>
                <a href="/">{META.HOME.FOOTER.IR}</a>
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
                {META.HOME.FOOTER.ADDRESS}
                <a className="underline" href="#" alt="관련문의 이메일 주소">
                  {META.HOME.FOOTER.IREMAILADDRESS}
                </a>
                )
              </p>
              <p>
                {META.HOME.FOOTER.JOBQNA}
                <a className="underline" href="#">
                  {META.HOME.FOOTER.JOBEMAILADDRESS}
                </a>
                )
              </p>
            </section>
            <p className="text-[0.8125rem] text-gray-500 mt-5 mb-20 font-bold">
              {META.HOME.FOOTER.COMPANY}
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default RootPage;
