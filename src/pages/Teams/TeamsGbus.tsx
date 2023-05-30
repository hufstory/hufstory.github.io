import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

const Teams_Gbus = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      <div className="bg-white w-4/5 mx-auto mt-8 md:px-5 md:py-5 md:flex-row text-center items-center font-nanumRegular flex-grow">
        <div className="flex flex-col mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1 font-nanumRegular">
            Teams
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-nanumBold">
            2022 - 현재 진행 팀
          </h1>
          <div className="flex flex-wrap lg:flex-row place-content-center mt-8">
            <Link to="/Teams">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                훕포메이션
              </button>
            </Link>
            <Link to="/TeamsOechul">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                외출: 외대생 솔로 탈출 프로젝트
              </button>
            </Link>
            <Link to="/TeamsGbus">
              <button className="text-gray-600 bg-white border-b-2 border-sky-400 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                G버스: 버스 위치 정보 서비스
              </button>
            </Link>
            <Link to="/TeamsHufsSpetition">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                외청: 외대 청원
              </button>
            </Link>
          </div>

          <div className="mt-8">
            <h1 className="text-xl sm:text-2xl mb-4">
              G버스 : 버스 위치 정보 서비스
            </h1>
            <p className="mb-2 text-sm sm:text-base">
              글로벌캠퍼스의 빨간 버스 및 셔틀 버스 위치 정보 서비스
            </p>

            <p className="text-sm sm:text-base">
              1. 빵차 위치와 광역버스 위치를 한 뷰에 제공<br></br>
              2. A정류장에서 B정류장으로 가는데 광역버스와 빵차 시간을 계산하여
              더 빠른 방법 제공<br></br>
              3. 광역버스 차고지, 빨버, 빵차 등 출발시간표를 함께제공(현재
              시각을 기준으로)
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Teams_Gbus
