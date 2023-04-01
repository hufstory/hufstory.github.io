import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Recruit = () => {
  const url =
    "https://docs.google.com/forms/d/e/1FAIpQLSfHGlTMNlkoKvlUVVD_p9VFaX8JEFH3u8TuKHJOc_TXiNfm4Q/viewform"

  return (
    <div className="bg-white">
      <Header />
      <div className="bg-white">
        <div className="w-4/5 mx-auto md:px-3 md:py-3 md:flex-row items-center">
          <div className="flex mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
            <div className="mt-4 block">
              <h1 className="block font-bold text-lg md:text-3xl mb-5 font-nanumBold">
                2023-1 훕스토리 신입 모집
              </h1>
              <p className="mx-auto mb-6 text-sm md:text-base font-nanumRegular">
                한국외국어대학교 글로벌캠퍼스 학생 IT자치기구 훕스토리
                신입회원을 모집합니다! <br></br>
                신청은 서울, 글로벌 상관 없이 한국외국어대학교 학생이면 누구나
                가능합니다!
              </p>
              <button
                onClick={() => window.open(url, "_blank")}
                className="inline-flex mr-auto text-white bg-sky-500 border-0 py-2 px-6 hover:bg-sky-600 rounded text-lg animate-bounce mt-[2px] font-nanumRegular"
              >
                지원하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Recruit
