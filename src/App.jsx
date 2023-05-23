import carrotLogo from "./assets/carrot.jpg";
import office from "./assets/office.avif";

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
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
