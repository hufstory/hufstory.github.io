import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

const Teams_Oechul = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="bg-white w-4/5 mx-auto mt-8 md:px-5 md:py-5 md:flex-row text-center items-center font-nanumRegular">
        <div className="flex flex-col mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1 font-nanumRegular">
            Teams
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-nanumBold">
            2022 - 현재 진행 팀
          </h1>
          <div className="flex flex-wrap lg:flex-row place-content-center mt-8">
            <Link to="/Teams">
              <button className="text-gray-600 bg-white border-b-2 border-sky-400 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
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
            <Link to="/Teams_hufsSpetition">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                외청: 외대 청원
              </button>
            </Link>
          </div>

          <div className="mt-8">
            <h1 className="text-xl sm:text-2xl mb-4">
              훕포메이션 한국외대 챗봇 서비스
            </h1>
            <p className="mb-2 text-sm sm:text-base">
              훕포메이션은 한국외대 학식 정보를 카카오톡으로 간편하게 조회할 수
              있는 플러스친구 챗봇입니다.
            </p>

            <p className="text-sm sm:text-base">
              2017년 5월부터 개인 프로젝트로 제품 기획/개발이 진행되었습니다.
              <br></br>
              출시 당시: 기존에 인문대 학생들의 ‘외대세끼’라는 플러스친구 기반의
              학식 제공 서비스가 운영 중이었습니다. <br></br>
              사람들의 수작업으로 진행되는 구조라 정보 업데이트가 느렸고 한
              이미지에 모든 식당 정보가 들어가 가독성이 좋지 않았습니다.
              <br></br>
              이를 벤치마킹하여 자동화된 챗봇 개발을 진행하게 되었습니다.
              <br></br>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Teams_Oechul
