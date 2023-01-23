import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

const Teams_Hubigo = () => {
  return (
    <div>
      <Header />
      <div className="w-4/5 mx-auto mt-8 md:px-5 md:py-5 md:flex-row text-center items-center font-nanumRegular">
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
            <Link to="/Teams_Oechul">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                외출: 외대생 솔로 탈출 프로젝트
              </button>
            </Link>
            <Link to="/Teams_Gbus">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                G버스: 버스 위치 정보 서비스
              </button>
            </Link>
            <Link to="/Teams_Hubigo">
              <button className="text-gray-600 bg-white border-b-2 border-sky-400 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                HUBIGO: 강의 평가 서비스
              </button>
            </Link>
          </div>

          <div className="mt-8">
            <h1 className="text-xl sm:text-2xl mb-4">
              HUBIGO : 강의 평가 서비스
            </h1>
            <p className="mb-2 text-sm sm:text-base">한줄 요약</p>

            <p className="text-sm sm:text-base">후비고 설명</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Teams_Hubigo
