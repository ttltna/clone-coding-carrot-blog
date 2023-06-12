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
import { useRef } from "react";

const WorkerSpeech = () => {
  const turn = [0, 1, 2, 3, 4, 5];
  const workers = [worker1, worker2, worker3, worker4, worker5, worker6];
  const speech = [
    `건설적인 비판과 피드백을 줄 수 있는 동료와 일하고 있어요.
    모두가 자기가 제일 잘하는 분야에서 권한과 책임을 가진 리더에요.
    하나의 서비스를 만들기 위해, 형식보단 일에 집중할 수 있는 환경 속에서 빠르게 성장하고 있어요.`,
    `뛰어난 동료들과 최대한의 역량을 발휘하며 일하고 있어요.
  이 과정에서 프로덕트의 성장뿐만 아니라 개인의 성장까지 이뤄내고 있어요.
  서비스 측면에서 시도해보고 싶은 기능을 자유롭게 제시하고 실현시킬 수 있는 곳이 당근마켓이에요.`,

    `사용자에게 사랑받는 제품을 설계하는 가슴 뛰는 일을 하고 있어요.
  최고의 사용자 경험을 위해 고민하고 어떤 문제를 어떻게 풀지 주도적으로 정할 수 있어요.
  더 큰 비즈니스 임팩트를 내기 위해 치열하게 고민해 볼 수 있는 게 큰 장점이에요.`,

    `플랫폼이 성장하면서 많은 요청을 처리하기 위해 아키텍처가 변화하고 있어요.
  이로 인해 다양한 시도와 학습은 필수적이에요.
  당근마켓 팀은 이런 문제들을 해결하기 위해 끊임없이 학습하고,
  새로운 시도와 개선을 하며 하루하루 성장하고 있어요.`,

    `사용자에게 사랑받는 프로덕트를 만드는 것 만한 재미가 있을까요?
  한국과 글로벌 사용자들이 겪는 문제를 파고들어 해결책을 찾는 과정 자체가 즐거움이자 보상이에요.
  사용자 입장에서 생각하는 동료들과 함께하기에 작은 실패들을 쌓아 큰 성공을 향해가고 있다고 믿을 수 있어요.`,

    `오늘도 마케팅팀은 '우리 사용자들은 어떤 것에 공감할까?'에 대한 끊임없는 고민을 하고 있어요.
  사용자 중심으로 사고하며 당근마켓 브랜드와 사용자 사이에 정서적인 연결을 만들어내는 일.
  이것만큼 마케터에게 지속 성장의 가치와 재미를 전달해주는 일이 있을까요?`,
  ];
  const workerName = [
    `Summer / Business Development Manager`,
    `David / Software Engineer`,
    `Zoe / Product Designer`,
    `Bien / Software Engineer`,
    `Eddie / Global Product Manager`,
    `Nicole / Marketing Lead `,
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
          <li className="flex flex-col w-1/2 mr-9">
            <img
              className=" min-w-[217px] max-w-[943px]"
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
  const carousel = useRef();
  const btn1 = () => {
    carousel.current.className.match("translate")
      ? (carousel.current.className =
          "flex flex-row  translate-x-0 duration-500")
      : (carousel.current.className += " translate-x-0 duration-500");
  };
  const btn2 = () => {
    carousel.current.className.match("translate")
      ? (carousel.current.className =
          "flex flex-row  translate-x-[-105%] duration-500")
      : (carousel.current.className += " translate-x-[-105%] duration-500");
  };
  const btn3 = () => {
    carousel.current.className.match("translate")
      ? (carousel.current.className =
          "flex flex-row  translate-x-[-207%] duration-500")
      : (carousel.current.className += " translate-x-[-207%] duration-500");
  };
  return (
    <>
      <main className="mt-100px">
        <section className="px-6">
          <div className="box-border m-auto max-w-75">
            <h1 className="mb-88px text-3.375 leading-4.5625 font-bold whitespace-pre-line">
              {`이웃과 더 가까워지는
                    따뜻한 동네를 만들어요.`}
            </h1>
            <img className="mb-12" src={office} alt="사무실 풍경" />
            <p className="whitespace-pre-line text-1.625 leading-2.4375 box-border m-auto font-bold tracking-tight">
              {`월평균 1,800만 명의 사용자, 하루 평균 사용 시간 20분, 1억
                      2천만 번의 연결. 중고 직거래로 시작한 당근마켓은 국내
                      최대의 지역 생활 커뮤니티 서비스로 나아가고 있어요. 이웃이
                      알려주는 진짜 우리 동네 정보, 내 근처에 숨어있는 좋은
                      가게를 발견하고, 이웃과 함께 소소한 일상을 나눌 수 있는
                      따뜻하고 풍요로운 동네 생활을 꿈꿔요.`}
            </p>
          </div>
        </section>
        <section className="mt-[160px] px-6 box-border m-auto max-w-75 flex flex-row">
          <div className="team  font-bold w-[340px] flex flex-col mr-[38px]">
            <span className="text-xl mb-[24px] h-[31px]">당근마켓 팀</span>
            <h1 className="whitespace-pre-line text-2.625 leading-[3.5625rem] mb-8 tracking-tighter">
              {`사용자 가치를
                    최우선으로
                    생각해요`}
            </h1>
          </div>
          <div className="effort text-[1.125rem] whitespace-pre-line w-[340px] mb-[2.5rem] leading-[1.875rem] tracking-tight">
            {`우리는 동네 안에서 연결되지 못한 가치
              있는 정보를 발견하고, 지역 생활 속의
              불편함을 해결하기 위해 모였어요. 만드는
              사람이 불편할수록, 쓰는 사람은 편하다는
              믿음으로 언제나 사용자 관점에서
              생각하며 지속적인 테스트를 통해 답을
              찾아요. 지역 커뮤니티와 이웃에 대한 공감,
              동료를 향한 신뢰를 바탕으로 모두의
              생활에 없어서는 안 될 최고의 서비스를
              만들기 위해 노력해요.
            `}
          </div>
        </section>
        <section className=" px-6 m-auto max-w-75 overflow-hidden">
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
        <section className="px-6">
          <div className="mt-[160px] flex flex-row">
            <div className="flex flex-col">
              <h1 className="mb-[1.5rem] w-[340px] h-[31px] text-[1.25rem] leading-[1.9375rem] font-bold">
                팀 문화
              </h1>
              <span className="w-[340px] whitespace-pre-line text-[2.625rem] leading-[3.5625rem] mb-8 font-bold">
                {`우리는 함께
                    성장할 수 있다고 믿어요`}
              </span>
              <span className="flex flex-row">
                <a
                  className="font-bold text-[1.25rem] leading-[1.9375rem]"
                  href="/culture"
                  alt="팀 문화 자세히 보기"
                >
                  자세히 보기
                </a>
                <a href="/culture" alt="팀 문화 자세히 보기">
                  <FiArrowRightCircle className="w-[32px] h-[32px] ml-[0.5em]" />
                </a>
              </span>
            </div>
            <img
              className="w-[340px] h-[290px]"
              src={teamCulture}
              alt="팀 문화"
            ></img>
          </div>
        </section>
        <section>
          <img
            className="w-[768px] h-[240px] mt-[160px]"
            src={together}
            alt="함께 얘기하는 팀원들 모습"
          />
        </section>
        <section className="px-6">
          <div className="m-auto flex flex-col py-[100px]">
            <h1 className="text-[2.625rem] leading-[3.5625rem] text-center font-bold tracking-thighter mb-[32px] whitespace-pre-line">
              {`지금, 당근마켓의 여정에
                    함께하세요.`}
            </h1>
            <span className="flex flex-row justify-center text-[1.25rem] leading-[1.9375rem] font-bold">
              <a href="/" alt="채용공고 보러 가기">
                채용공고 보러 가기
              </a>
              <a href="/jobs" alt="채용공고 보러 가기">
                <FiArrowRightCircle className="w-[32px] h-[32px] ml-[0.5em]" />
              </a>
            </span>
          </div>
        </section>
      </main>
      <footer className="mt-[10rem] pt-[4.375rem] pb-4 border-t-2 border-solid">
        <section className="px-6">
          <nav className="max-w-[75rem] m-auto flex flex-row items-center justify-between">
            <ul className="flex flex-row text-[0.8125rem] w-[458px] justify-between">
              <li>
                <a className="flex flex-row font-bold" href="/">
                  개인정보처리방침
                  <CgArrowTopRight />
                </a>
              </li>
              <li>
                <a className="flex flex-row" href="/">
                  브랜드 리소스
                  <CgArrowTopRight />
                </a>
              </li>
              <li>
                <a href="/">자주 묻는 질문</a>
              </li>
              <li>
                <a href="/">IR</a>
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
              <div>
                <p>주소 : 서울특별시 서초구 강남대로 465, 교보강남타워 11층</p>
              </div>
              <div>
                <p>
                  (IR관련문의 :{" "}
                  <a className="underline" href="#" alt="관련문의 이메일 주소">
                    ir@daangn.com
                  </a>
                  )
                </p>
              </div>
              <div>
                <p>
                  (채용 관련 문의 :
                  <a className="underline" href="#">
                    recruit@daangn.com
                  </a>
                  )
                </p>
              </div>
            </section>
            <p className="text-[0.8125rem] text-gray-500 mt-5 mb-20 font-bold">
              © 당근마켓
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default RootPage;
