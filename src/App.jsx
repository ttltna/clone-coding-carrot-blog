import carrotLogo from "./assets/carrot.jpg";
import office from "./assets/office.avif";
import worker1 from "./assets/worker1.avif";
import worker2 from "./assets/worker2.avif";
import teamCulture from "./assets/teamCulture.avif";
import together from "./assets/together.avif";
import github from "./assets/emoji/github.jpg";
import carootblog from "./assets/emoji/carootblog.jpg";
import facebook from "./assets/emoji/facebook.jpg";
import instagram from "./assets/emoji/instargram.jpg";

function App() {
  return (
    <>
      <header className="w-screen">
        <div className="inner mx-auto mt-4 mb-20 max-w-6xl">
          <nav className="flex flex-row justify-between">
            <a href="#">
              <img src={carrotLogo} alt="당근마켓 로고" />
            </a>
            <ul className="flex flex-row justify-self-stretch font-bold items-center">
              <li className="mx-7">
                <a href="#">팀문화</a>
              </li>
              <li className="mx-7">
                <a href="#">서비스</a>
              </li>
              <li className="mx-7">
                <a href="#">채용공고</a>
              </li>
              <li className="mx-7">
                <a href="#">블로그</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="w-screen">
        <div className="inner mx-auto max-w-6xl">
          <h1 className="font-bold text-5xl mb-20 leading-normal whitespace-pre-line">
            이웃과 더 가까워지는
            <br />
            따뜻한 동네를 만들어요.
          </h1>
          <section className="companyPurpose my-10">
            <img className="mb-10" src={office} alt="사무실 풍경" />
            <p className="text-2xl whitespace-pre-line font-bold leading-normal my-20">
              월평균 1,800만 명의 사용자, 하루 평균 사용 시간 20분, 1억
              <br />
              2천만 번의 연결. 중고 직거래로 시작한 당근마켓은 국내
              <br />
              최대의 지역 생활 커뮤니티 서비스로 나아가고 있어요. 이웃이
              <br />
              알려주는 진짜 우리 동네 정보, 내 근처에 숨어있는 좋은
              <br />
              가게를 발견하고, 이웃과 함께 소소한 일상을 나눌 수 있는
              <br />
              따뜻하고 풍요로운 동네 생활을 꿈꿔요.
            </p>
          </section>
          <section className="teamPurpose flex flex-row">
            <div className="team flex flex-col font-bold w-1/2 my-20 mr-8">
              <span className="text-2xl mb-6">당근마켓 팀</span>
              <h1 className="whitespace-pre-line text-4xl leading-normal">
                사용자 가치를
                <br />
                최우선으로 생각해요
              </h1>
            </div>
            <div className="effort text-xl whitespace-pre-line w-1/2 my-20">
              우리는 동네 안에서 연결되지 못한 가치 있는 정보를 발견하고, 지역
              <br />
              생활 속의 불편함을 해결하기 위해 모였어요. 만드는 사람이
              <br />
              불편할수록, 쓰는 사람은 편하다는 믿음으로 언제나 사용자 관점에서
              <br />
              생각하며 지속적인 테스트를 통해 답을 찾아요. 지역 커뮤니티와
              <br />
              이웃에 대한 공감, 동료를 향한 신뢰를 바탕으로 모두의 생활에
              <br />
              없어서는 안 될 최고의 서비스를 만들기 위해 노력해요.
            </div>
          </section>
          <section className="worker vision">
            <div className="worker img flex flex-row mb-10">
              <img className="w=1/2 mr-8" src={worker1} alt="회사원1"></img>
              <img className="w=1/2" src={worker2} alt="회사원2"></img>
            </div>
            <div className="vision flex flex-row whitespace-pre-line mb-10">
              <div className="w-1/2 flex flex-col mr-8">
                <span className="text-2xl font-bold leading-normal mb-5">
                  건설적인 비판과 피드백을 줄 수 있는 동료와 일하고 있어요.
                  <br />
                  모두가 자기가 제일 잘하는 분야에서 권한과 책임을 가진
                  리더에요.
                  <br />
                  하나의 서비스를 만들기 위해, 형식보단 일에 집중할 수 있는 환경
                  속에서 빠르게 성장하고 있어요.
                </span>
                <span className="">Summer / Business Development Manager</span>
              </div>
              <div className="w-1/2 flex flex-col">
                <span className="text-2xl font-bold leading-normal mb-5">
                  뛰어난 동료들과 최대한의 역량을 발휘하며 일하고 있어요.
                  <br />
                  이 과정에서 프로덕트의 성장뿐만 아니라 개인의 성장까지
                  이뤄내고 있어요.
                  <br />
                  서비스 측면에서 시도해보고 싶은 기능을 자유롭게 제시하고
                  실현시킬 수 있는 곳이 당근마켓이에요.
                </span>
                <span className="">David / Software Engineer</span>
              </div>
            </div>
            <div className="workerPageMove my-20">button</div>
          </section>
          <section className="teamCulture flex flex-row my-20">
            <div className="flex flex-col w-1/2">
              <h1 className="font-bold text-2xl">팀 문화</h1>
              <span className="whitespace-pre-line font-bold text-4xl my-5 leading-snug">
                우리는 함께
                <br />
                성장할 수 있다고 믿어요
              </span>
              <span className="font-bold text-xl">
                자세히 보기{" "}
                <a href="#" alt="팀 문화 자세히 보기">
                  btn
                </a>
              </span>
            </div>
            <img className="w-1/2" src={teamCulture} alt="팀 문화"></img>
          </section>
        </div>
        <img
          className="my-20"
          src={together}
          alt="함께 얘기하는 팀원들 모습"
        ></img>
        <div className="inner mx-auto max-w-6xl">
          <div className="Recruitment flex flex-col">
            <h1 className="font-bold text-4xl text-center my-5">
              지금, 당근마켓의 여정에 함께하세요.
            </h1>
            <span className="font-bold text-2xl text-center mb-20">
              채용공고 보러 가기&nbsp;
              <a href="#" alt="채용공고 보러 가기">
                btn
              </a>
            </span>
          </div>
        </div>
      </main>
      <hr className="my-20"></hr>
      <footer>
        <div className="inner mx-auto max-w-6xl">
          <nav className="flex flex-row justify-between mb-10">
            <ul className="w-1/2 flex flex-row justify-between text-xs">
              <li>
                <a href="#" className="font-bold">
                  개인정보처리방침arrow
                </a>
              </li>
              <li>
                <a href="#">브랜드 리소스arrow</a>
              </li>
              <li>
                <a href="#">자주 묻는 질문</a>
              </li>
              <li>
                <a href="#">IR</a>
              </li>
            </ul>
            <ul className="snsEmoji w-1/3 flex flex-row  justify-end">
              <li>
                <a
                  href="https://github.com/daangn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="깃허브 이모티콘"></img>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/daangn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="ml-4"
                    src={carootblog}
                    alt="당근마켓 테크 블로그 이모티콘"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/daangn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="ml-4"
                    src={facebook}
                    alt="페이스북 이모티콘"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/daangnmarket/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="ml-4"
                    src={instagram}
                    alt="인스타그램 이모티콘"
                  ></img>
                </a>
              </li>
            </ul>
          </nav>
          <span className="text-sm whitespace-pre-line text-gray-500">
            주소 : 서울특별시 서초구 강남대로 465, 교보강남타워 11층 (IR
            관련문의 :{" "}
            <a className="underline" href="#" alt="관련문의 이메일 주소">
              ir@daangn.com
            </a>
            )
            <br />
            (채용 관련 문의 :{" "}
            <a className="underline" href="#">
              recruit@daangn.com
            </a>
            )
          </span>
          <p className="text-sm text-gray-500 mt-5 mb-20 font-bold">
            © 당근마켓
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
