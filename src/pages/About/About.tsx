import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const About = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              "훕스토리"는 좋은 사람들과 좋은 프로그램이 함께 합니다.<br></br>
              다양한 프로젝트 경험을 쌓을 수 있고, 멘토링을 통하여 다양한 기술을
              학습할 수 있습니다.<br></br> 본인이 원할 시 다대일 멘토링을 통하여
              다양한 기술을 학습할 수 있으며, 동아리원들과 함께 성장할 수
              있습니다.<br></br>
              행사 기획,디자인 등 다양한 분야에서의 활동과 개발자와의 협업은
              다른 곳에선 경험하지 못할 경험이라고 자신합니다.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-title-color mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              한국외국어대학교 학생 IT 자치 기구
            </h2>
            <p className="text-gray-500">Hufstory</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
