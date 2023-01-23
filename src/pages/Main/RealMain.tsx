import React from "react"
import Header from "../../components/Header"
import MainFooter from "../../components/MainFooter"

import titleLogo from "../../static/images/logo/titleLogo.png"
import titleLogo2 from "../../static/images/logo/titleLogo2.png"
import cat from "../../static/images/assets/cat.png"
import greenMonster from "../../static/images/assets/greenMonster.png"
import child from "../../static/images/assets/child.png"
import clover from "../../static/images/assets/clover.png"
import alphabet from "../../static/images/assets/alphabet.png"

const RealMain = () => {
  return (
    <div>
      <Header />

      <div className="flex max-w-full h-full ml-4 mr-4 md:ml-36 md:flex-row mb-20 font-nanumLight">
        <div className="block mt-8 w-[32rem] md:mr-[52px]">
          <img
            className="block h-[70px] md:w-[511px] md:h-[100px] mb-16 animate-appear"
            src={titleLogo2}
            alt="title2"
          ></img>
          {/* 타이틀 로고 주석 처리 
          <img
            className="block h-[110px] hover:{titleLogo2} mb-16 animate-appear"
            src={titleLogo}
            alt="title"
          ></img>
          */}
          <section>
            <div className="md:w-[32rem]">
              <h2 className="font-nanumRegular md:ml-20 text-sm md:text-base">
                훕스토리란?
              </h2>
              <p className="mt-1 mb-6 md:ml-20 text-sm md:text-base">
                개발, 기획&디자인 팀으로 이루어진 교내 학생 자치기구입니다.
                <br></br>
                개발팀 & 기획 및 디자인 팀으로 구성되어 외대생을 비롯한
                대학생들을 위해 SW 서비스 개발 및 행사 기획을 진행합니다.
                자유로운 의사소통과 팀원 모두의 아이디어를 존중하는 문화를
                추구합니다.
              </p>

              <h2 className="font-nanumRegular md:ml-20 text-sm md:text-base">
                개발(Developer)
              </h2>
              <p className="mt-1 mb-6 md:ml-20 text-sm md:text-base">
                학부 과정에서는 쉽게 경험할 수 없는 다양한 기술을 사용하며{" "}
                <br></br>
                학부생의 실력에 그치지 않는 팀을 지향하고 있습니다.
              </p>

              <h2 className="font-nanumRegular md:ml-20 text-sm md:text-base">
                기획 & 디자인
              </h2>
              <p className="mt-1 mb-6 md:ml-20 text-sm md:text-base">
                주로 컨텐츠, 기획, 디자인을 하며 창의적인 활동을 지향하며 개발
                파트를 맡은 팀원들과 함께 프로젝트를 진행합니다. 개발을 하며
                프로젝트를 진행하며 IT 기획, 프로젝트에 필요한 디자인을 구상하고
                생성하는 역할을 합니다. 기디(기획&디자인)팀은 대외활동, 각종
                팁과 프론트엔드, 기획 스터디까지 다양한 분야에서 학습하게
                됩니다.
              </p>
            </div>
          </section>
        </div>

        <div className="hidden md:flex relative w-full bg-represent-color rounded-[36px]">
          <p className="absolute z-40 left-80 mt-10 text-title-color text-[34px] font-nanumRegular animate-titleMove">
            Come to HUFS,<br></br>Meet the World
          </p>

          <p className="absolute z-40 left-80 mt-40 text-title-color text-[28px] font-nanumLight animate-titleMove">
            외대를 만나면, 세계가 보인다!
          </p>

          {/*
          맥북 기본 화면 위치
          child : absolute z-30 top-[-10px] w-[300px] animate-childMove
          cat : absolute z-30 top-[437px] left-[296px] w-[420px] h-[300px] animate-catMove
          green : absolute z-20 top-[200px] left-[516px] w-[200px] h-[500px] animate-greenMove
          alphabet : absolute z-20 w-[400px] top-[300px] animate-alphabetMove
          clover : absolute z-20 h-[50px] top-[600px] left-[180px] animate-cloverAppear
          */}
          <img
            className="absolute z-30 top-[-10px] w-[300px] animate-childMove"
            src={child}
            alt="child"
          ></img>
          <img
            className="absolute z-30 bottom-[-1px] right-0 w-[420px] h-[300px] animate-catMove"
            src={cat}
            alt="cat"
          ></img>
          <img
            className="absolute z-20 bottom-0 right-0 w-[180px] h-[450px] 2xl:w-[200px] 2xl:h-[480px] animate-greenMove"
            src={greenMonster}
            alt="greenMonster"
          ></img>
          <img
            className="absolute z-20 w-[400px] top-[300px] animate-alphabetMove"
            src={alphabet}
            alt="alphabet"
          ></img>
          <img
            className="absolute z-20 h-[50px] top-[600px] right-3/4 animate-cloverAppear"
            src={clover}
            alt="clover"
          ></img>
        </div>
      </div>

      <MainFooter />
    </div>
  )
}

export default RealMain
