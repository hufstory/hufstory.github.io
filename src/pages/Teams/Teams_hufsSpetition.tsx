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
            <Link to="/Teams_HufsSpetition">
              <button className="text-gray-600 bg-white border-b-2 border-sky-400 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-sm sm:text-base md:text-lg">
                외청: 외대 청원
              </button>
            </Link>
          </div>

          <div className="mt-8">
            <h1 className="text-xl sm:text-2xl mb-4">외청: 외대 청원</h1>
            <p className="mb-2 text-sm sm:text-base">
              외대생들의 청원을 위해 만들어진 사이트
            </p>

            <p className="text-sm sm:text-base">
              외대의 청원시스템을 만들어 기존 학우분들의 불만이나 의견을 청원을
              통해 접수 받는 방향입니다.<br></br>
              기존의 질문, 건의 게시판같은 경우 올려도 큰 효력을 발휘 못하는
              경우도 있고<br></br> 많은 학우분들이 원하는 건의이지만 어느정도의
              수치성을 파악이 안되어 심각한건지등등 을 모르는 경우가 많았습니다.
              <br></br>
              이를 외청을 통해 해결을 목표로 만들어진 사이트 입니다.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Teams_Hubigo
