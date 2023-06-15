import office from "../assets/office.avif";

import teamCulture from "../assets/teamCulture.avif";
import together from "../assets/together.avif";

FiArrowRightCircle;
import { FiArrowRightCircle } from "react-icons/fi";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

import META from "../utils/consts/contents";

const Description = () => {
  const { TITLE, DESCRIPTION } = META.HOME.INTRODUCE;

  return (
    <section>
      <div>
        <h1 className="text-6xl font-semibold whitespace-pre-line leading-4.5625">
          {TITLE}
        </h1>
        <div className="mt-24">
          <img className="w-full h-full" src={office} alt="사무실 풍경" />
        </div>
        <div className="w-7/12">
          <p className="w-full mt-10 text-2xl box-border  leading-[39px] font-semibold break-words">
            {DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { TEAM, TARGET, DESCRIPTION } = META.HOME.VALUE;

  return (
    <section className="mt-40 w-full flex justify-between">
      <div className="flex flex-col w-full">
        <div className="text-xl font-semibold">{TEAM}</div>
        <h1 className="mt-8 text-4xl font-semibold leading-[54px] whitespace-pre-line">
          {TARGET}
        </h1>
      </div>
      <div className="w-full text-lg leading-8 text-gray-500">
        {DESCRIPTION}
      </div>
    </section>
  );
};

const Culture = () => {
  const {
    CULTURE: { TEAMCULTURE, DESCRIPTION, DETAIL },
    VALUE: { INTERVIEW },
  } = META.HOME;
  return (
    <>
      <section className="mt-40">
        <div className="flex justify-between gap-10">
          <div className="flex items-center justify-center">
            <TfiArrowCircleLeft size={52} />
          </div>
          <ul className="w-full flex overflow-hidden">
            <div className="flex justify-center gap-20">
              {[
                ...INTERVIEW.map(({ CONTENT, NICKNAME, TITLE, PATH }) => (
                  <li
                    className="w-[600px] flex flex-col"
                    key={`${(NICKNAME, TITLE)}`}
                  >
                    <img src={PATH}></img>
                    <h2>{CONTENT}</h2>
                    <div>
                      <span>{NICKNAME}</span> / <span>{TITLE}</span>
                    </div>
                  </li>
                )),
              ]}
            </div>
          </ul>
          <div className="flex items-center justify-center">
            <TfiArrowCircleRight size={52} />
          </div>
        </div>
      </section>
      <section className="w-full max-w-75 ">
        <div className="h-[500px] flex mt-[160px]">
          <div className=" h-full flex flex-col">
            <h1 className="mb-[1.5rem] w-[340px] h-[31px] text-[1.25rem] leading-[1.9375rem] font-bold">
              {TEAMCULTURE}
            </h1>
            <span className="w-[340px] whitespace-pre-line text-[2.625rem] leading-[3.5625rem] mb-8 font-bold">
              {DESCRIPTION}
            </span>
            <span className="flex flex-row">
              <a
                className="font-bold text-[1.25rem] leading-[1.9375rem]"
                href="/culture"
                alt="팀 문화 자세히 보기"
              >
                {DETAIL}
              </a>
              <a href="/culture" alt="팀 문화 자세히 보기">
                <FiArrowRightCircle className="w-[32px] h-[32px] ml-[0.5em]" />
              </a>
            </span>
          </div>
          <img className="w-full h-full" src={teamCulture} alt="팀 문화"></img>
        </div>
      </section>
    </>
  );
};

const Recruit = () => {
  return (
    <>
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
    </>
  );
};

const Home = () => {
  return (
    <main className="w-screen h-full">
      <div className="mt-28 max-w-75 m-auto">
        <Description />
        <About />
      </div>
      <div className="w-full max-w-[1400px] m-auto">
        <Culture />
        <Recruit />
      </div>
    </main>
  );
};

export default Home;
