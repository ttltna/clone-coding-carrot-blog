import carrotLogo from "./assets/carrot.jpg";
import office from "./assets/office.avif";
import worker1 from "./assets/worker1.avif";
import worker2 from "./assets/worker2.avif";

function App() {
  return (
    <>
      <header className="w-screen bg-red-500">
        <div className="inner mx-auto mt-4 mb-20 max-w-6xl bg-blue-500">
          <div className="flex flex-row justify-between bg-green-500">
            <a href="#">
              <img src={carrotLogo} alt="당근마켓 로고" />
            </a>
            <ul className="flex flex-row justify-self-stretch font-bold items-center bg-gray-500">
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
          </div>
        </div>
      </header>
      <main className="w-screen bg-red-500">
        <div className="inner mx-auto max-w-6xl bg-blue-500">
          <h1 className="font-bold text-5xl mb-20 leading-normal whitespace-pre-line bg-yellow-500">
            이웃과 더 가까워지는
            <br />
            따뜻한 동네를 만들어요.
          </h1>
          <section className="companyPurpose my-10">
            <img className="mb-10" src={office} alt="사무실 풍경" />
            <p className="text-3xl whitespace-pre-line font-bold leading-normal mb-20 pb-20">
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
          <section className="teamPurpose flex flex-row bg-green-500">
            <div className="team flex flex-col font-bold w-1/2">
              <span className="text-2xl">당근마켓 팀</span>
              <h1 className="whitespace-pre-line text-4xl">
                사용자 가치를
                <br />
                최우선으로 생각해요
              </h1>
            </div>
            <div className="effort whitespace-pre-line w-1/2">
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
            <div className="worker img flex flex-row">
              <img src={worker1} alt="회사원1"></img>
              <img src={worker2} alt="회사원2"></img>
            </div>
            <div className="vision flex flex-row whitespace-pre-line">
              <span className="w-1/2">
                건설적인 비판과 피드백을 줄 수 있는 동료와 일하고 있어요. 모두가
                <br />
                자기가 제일 잘하는 분야에서 권한과 책임을 가진 리더에요. 하나의
                <br />
                서비스를 만들기 위해, 형식보단 일에 집중할 수 있는 환경 속에서
                <br />
                빠르게 성장하고 있어요.
              </span>
              <span className="w-1/2">
                뛰어난 동료들과 최대한의 역량을 발휘하며 일하고 있어요. 이<br />
                과정에서 프로덕트의 성장뿐만 아니라 개인의 성장까지 이뤄내고
                <br />
                있어요. 서비스 측면에서 시도해보고 싶은 기능을 자유롭게 제시하고
                <br />
                실현시킬 수 있는 곳이 당근마켓이에요.
                <br />
              </span>
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
