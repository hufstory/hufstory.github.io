import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import hufstoryLogo from "../../static/images/logo/HufstoryLogo.png"
import programmerImage from "../../static/images/assets/programming.png"

const Main = () => {
  return (
    <div>
      <Header />

      <div className="ml-36 mr-36 mt-8 md:px-5 md:py-5 md:flex-row items-center">
        <div className="flex mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="mt-8 w-[32rem] block">
            <h1 className="block w-80 font-bold text-3xl mb-5">
              한국외국어대학교 <br></br>학생 IT 자치기구 훕스토리
            </h1>
            <br></br>
            <h2 className="font-bold text-lg">훕스토리란?</h2>
            <p className="mt-1 mb-6">
              개발, 기획&디자인 팀으로 이루어진 교내 학생 자치기구입니다. 개발팀
              & 기획 및 디자인 팀으로 구성되어 외대생을 비롯한 대학생들을 위해
              SW 서비스 개발 및 행사 기획을 진행합니다. 자유로운 의사소통과 팀원
              모두의 아이디어를 존중하는 문화를 추구합니다.
            </p>

            <h2 className="font-bold text-lg">개발(Developer)</h2>
            <p className="mt-1 mb-6">
              학부 과정에서는 쉽게 경험할 수 없는 다양한 기술을 사용하며
              학부생의 실력에 그치지 않는 팀을 지향하고 있습니다.
            </p>

            <h2 className="font-bold text-lg">기획 & 디자인</h2>
            <p className="mt-1 mb-6">
              주로 컨텐츠, 기획, 디자인을 하며 창의적인 활동을 지향하며 개발
              파트를 맡은 팀원들과 함께 프로젝트를 진행합니다. 개발을 하며
              프로젝트를 진행하며 IT 기획, 프로젝트에 필요한 디자인을 구상하고
              생성하는 역할을 합니다. 기디(기획&디자인)팀은 대외활동, 각종 팁과
              프론트엔드, 기획 스터디까지 다양한 분야에서 학습하게 됩니다.
            </p>

            <h1 className="font-bold text-lg">무엇을 할 수 있을까?</h1>
            <p className="mt-1 mb-6">
              "훕스토리"는 좋은 사람들과 좋은 프로그램이 함께 합니다. 다양한
              프로젝트 경험을 쌓을 수 있고, 멘토링을 통하여 다양한 기술을 학습할
              수 있습니다. 본인이 원할 시 다대일 멘토링을 통하여 다양한 기술을
              학습할 수 있으며, 동아리원들과 함께 성장할 수 있습니다. 행사 기획,
              디자인 등 다양한 분야에서의 활동과 개발자와의 협업은 다른 곳에선
              경험하지 못할 경험이라고 자신합니다.
            </p>
          </div>
          <div className="block hover:-translate-y-1 hover:scale-100 duration-300">
            <img src={programmerImage} alt="programmerImage"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
