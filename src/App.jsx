import office from "./assets/office.avif";
import worker1 from "./assets/worker1.avif";
import teamCulture from "./assets/teamCulture.avif";
import together from "./assets/together.avif";

import { FiArrowRightCircle } from "react-icons/fi";
import { CgArrowTopRight } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { SiMedium, SiInstagram, SiFacebook } from "react-icons/si";

// const Mobile_S = () => {
//   return (
//     <div>
//       <header className="w-screen"></header>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <div className="relative">
        <header className="w-screen h-68px bg-white m-0 sticky top-0 z-10">
          <div className="box-border max-w-75 m-auto px-6 h-68px flex flex-row justify-between items-center">
            <a href="/" className="leading-0 text-carrot m-0 cursor-pointer">
              <svg viewBox="0 0 159 32" className="fill-none h-8 m-0">
                <path
                  className="fill-carrot m-0"
                  d="M12.139 5.927C5.436 5.927 0 11.362 0 18.066c0 2.813.966 5.396 2.573 7.454.126.156.248.313.38.465.192.223.385.444.592.65l.018.018A19.631 19.631 0 0 0 12.14 32a19.602 19.602 0 0 0 8.596-5.364c.207-.207.4-.428.591-.65.13-.153.254-.31.38-.466a12.07 12.07 0 0 0 2.573-7.454c-.003-6.704-5.437-12.14-12.142-12.14Zm0 16.782a4.641 4.641 0 1 1 0-9.283 4.641 4.641 0 0 1 0 9.283Z"
                ></path>
                <path
                  className="fill-carrothead m-0"
                  d="M16.092 5.67a1.785 1.785 0 0 0-.38-3.527c-.277 0-.535.067-.768.18A2.857 2.857 0 0 0 12.14 0c-1.396 0-2.551 1-2.802 2.322a1.755 1.755 0 0 0-.767-.179 1.784 1.784 0 0 0-.38 3.527A12.09 12.09 0 0 1 12.143 5c1.386 0 2.709.242 3.949.67Z"
                ></path>
                <path
                  className="fill-carrot m-0"
                  d="M32.944 18.246h7.429c.922 0 1.65-.558 1.65-1.7 0-1.141-.728-1.7-1.65-1.7h-6.457c-.341 0-.534-.194-.534-.51v-2.912c0-.315.193-.51.534-.51h6.457c.922 0 1.65-.558 1.65-1.7 0-1.141-.728-1.7-1.65-1.7h-7.43c-2.523 0-3.713 1.117-3.713 3.23v4.272c0 2.114 1.19 3.23 3.714 3.23ZM42.241 19.606h-7.306c-3.303 0-5.463 1.822-5.463 4.468 0 2.598 2.16 4.418 5.463 4.418h7.306c3.3 0 5.487-1.822 5.487-4.418 0-2.648-2.184-4.468-5.487-4.468Zm0 5.462h-7.306c-.8 0-1.238-.438-1.238-.996 0-.584.435-1.043 1.238-1.043h7.306c.8 0 1.262.461 1.262 1.043 0 .558-.461.996-1.262.996ZM48.432 10.987h-1.165V8.755c0-.972-.85-1.7-2.064-1.7s-2.088.728-2.088 1.7v8.643c0 .97.874 1.7 2.088 1.7 1.213 0 2.064-.728 2.064-1.7v-2.356h1.165c.947 0 1.7-.826 1.7-2.015 0-1.141-.753-2.04-1.7-2.04ZM69.177 20.138H52.208c-.995 0-1.796-.654-1.796-1.845 0-1.116.8-1.822 1.796-1.822h16.97c.995 0 1.795.704 1.795 1.822 0 1.19-.8 1.845-1.796 1.845Zm-3.495-5.971v-2.208c0-.389-.22-.608-.558-.608H53.35c-1.02 0-1.893-.654-1.893-1.892 0-1.19.873-1.942 1.893-1.942h12.673c2.523 0 3.81 1.31 3.81 3.617v3.035c0 .971-.849 1.699-2.064 1.699-1.214 0-2.087-.73-2.087-1.701Zm-9.953 8.375v1.457c0 .291.22.485.558.485H68.4c1.02 0 1.895.68 1.895 1.892 0 1.19-.875 1.893-1.895 1.893H55.412c-2.5 0-3.835-1.069-3.835-3.326V22.54c0-.972.85-1.7 2.065-1.7 1.214.004 2.087.732 2.087 1.702ZM73.092 24.437V10.429c0-1.918.97-2.914 2.961-2.914h5.414c1.991 0 2.961.996 2.961 2.914v14.008c0 1.918-.97 2.914-2.961 2.914h-5.414c-1.991 0-2.961-.996-2.961-2.914Zm7.428-1.335V11.766c0-.267-.145-.438-.388-.438h-2.719c-.242 0-.388.17-.388.438v11.336c0 .266.146.438.388.438h2.72c.242-.002.388-.172.388-.438Zm6.457 3.592V8.875c0-1.019.874-1.821 2.088-1.821 1.213 0 2.064.8 2.064 1.821v5.826h1.166c.946 0 1.699.9 1.699 2.039 0 1.214-.753 2.064-1.7 2.064H91.13v7.89c0 1.02-.85 1.822-2.064 1.822s-2.088-.803-2.088-1.822ZM104.629 11.91h.849V8.706c0-.923.753-1.554 1.893-1.554 1.139 0 1.845.631 1.845 1.554v9.59c0 .922-.704 1.553-1.845 1.553-1.142 0-1.893-.63-1.893-1.554v-2.817h-.849c-.462 0-.874-.219-1.142-.63-1.142 2.525-3.154 4.563-5.948 5.801-.9.389-1.87.146-2.378-.703-.51-.85-.17-1.942.607-2.282 1.262-.557 2.307-1.31 3.108-2.257h-2.039c-.777 0-1.457-.461-1.457-1.48 0-.947.68-1.481 1.457-1.481h3.568c.097-.365.196-.753.243-1.165.049-.316-.122-.535-.412-.535h-3.277c-.922 0-1.577-.534-1.577-1.602 0-1.02.655-1.627 1.577-1.627h3.981c2.646 0 3.86 1.262 3.472 4.103-.024.096-.024.219-.048.315.095-.025.166-.025.265-.025Zm7.428 16.217c-2.523-.534-5.534-1.918-7.501-3.495-1.822 1.796-4.249 3.107-6.798 3.618-.876.17-1.895-.243-2.21-1.311-.292-1.02.218-1.942 1.141-2.185 2.792-.727 5.122-2.354 6.287-4.515.365-.654 1.335-1.092 2.453-.753 1.165.365 1.626 1.457 1.287 2.234l-.023.05c1.626 1.334 4.03 2.379 6.384 2.887.899.196 1.433 1.116 1.141 2.161-.292 1.065-1.264 1.503-2.161 1.31Zm-1.918-9.177V8.61c0-.923.777-1.554 1.942-1.554s1.918.63 1.918 1.553v10.343c0 .923-.753 1.553-1.918 1.553s-1.942-.632-1.942-1.555ZM130.579 14.272h-2.788v8.377h-2.035v-8.377h-2.772v-1.946h7.595v1.946ZM133.97 21.129c.737 0 1.327-.31 1.652-.738l1.534.886c-.694 1.003-1.798 1.577-3.216 1.577-2.478 0-4.042-1.695-4.042-3.894 0-2.198 1.578-3.894 3.894-3.894 2.183 0 3.73 1.725 3.73 3.894 0 .28-.029.53-.073.78h-5.559c.266.977 1.076 1.389 2.08 1.389Zm1.652-2.86c-.237-1.063-1.033-1.49-1.83-1.49-1.017 0-1.711.547-1.932 1.49h3.762ZM146.297 15.275v7.374h-1.902v-.87c-.531.665-1.327 1.077-2.404 1.077-1.961 0-3.584-1.696-3.584-3.894 0-2.198 1.623-3.894 3.584-3.894 1.077 0 1.873.412 2.404 1.077v-.87h1.902Zm-1.902 3.687c0-1.238-.87-2.08-2.051-2.08-1.165 0-2.034.84-2.034 2.08 0 1.24.869 2.08 2.034 2.08 1.181-.002 2.051-.842 2.051-2.08ZM158.964 18.107v4.542h-1.902v-4.41c0-.87-.442-1.402-1.238-1.402-.84 0-1.372.56-1.372 1.666v4.144h-1.903v-4.408c0-.87-.442-1.402-1.238-1.402-.81 0-1.386.56-1.386 1.666v4.144h-1.903v-7.374h1.903v.781c.412-.619 1.106-.988 2.05-.988.915 0 1.593.383 2.005 1.063.458-.664 1.195-1.063 2.197-1.063 1.681.002 2.787 1.197 2.787 3.04Z"
                ></path>
              </svg>
            </a>
            <nav className="m-0 block">
              <ul className="flex flex-row items-center gap-14 relative p-0 m-0">
                <li className="font-bold">
                  <a href="taemCluture">팀문화</a>
                </li>
                <li className="font-bold">
                  <a href="#">서비스</a>
                </li>
                <li className="font-bold">
                  <a href="#">채용공고</a>
                </li>
                <li className="font-bold">
                  <a href="#">블로그</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
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
          <section className="mt-[160px] px-6 flex flex-row">
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
          <section className="px-6">
            <img
              className="mt-[158px] w-full h-[420px]"
              src={worker1}
              alt="직원1"
            />
            <div className="">
              <p className="text-[1.625rem] font-bold leading-normal my-[31px] whitespace-pre-line tracking-tight">
                {`건설적인 비판과 피드백을 줄 수 있는 동료와 일하고 있어요.
                모두가 자기가 제일 잘하는 분야에서 권한과 책임을 가진
                리더에요. 하나의 서비스를 만들기 위해, 형식보단 일에 집중할
                수 있는 환경 속에서 빠르게 성장하고 있어요.`}
              </p>
              <p className="mb-[85px] text-[1.25rem] font-light">
                Summer / Business Development Manager
              </p>
            </div>
            <div className="flex flex-row justify-center gap-8">
              <button className="relative rounded-full border-6 border-solid border-black"></button>
              <button className="relative rounded-full border-6 border-solid border-black"></button>
              <button className="relative rounded-full border-6 border-solid border-black"></button>
              <button className="relative rounded-full border-6 border-solid border-black"></button>
              <button className="relative rounded-full border-6 border-solid border-black"></button>
              <button className="relative rounded-full border-6 border-solid border-black"></button>
            </div>
          </section>
          <section className="px-6">
            <div className="mt-[160px] flex justify-center">
              <div className="flex flex-col mr-[40px]">
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
                    href="/"
                    alt="팀 문화 자세히 보기"
                  >
                    자세히 보기
                  </a>
                  <a href="/" alt="팀 문화 자세히 보기">
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
                <a href="/" alt="채용공고 보러 가기">
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
                  <p>
                    주소 : 서울특별시 서초구 강남대로 465, 교보강남타워 11층
                  </p>
                </div>
                <div>
                  <p>
                    (IR관련문의 :{" "}
                    <a
                      className="underline"
                      href="#"
                      alt="관련문의 이메일 주소"
                    >
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
      </div>
    </div>
  );
}
export default App;
