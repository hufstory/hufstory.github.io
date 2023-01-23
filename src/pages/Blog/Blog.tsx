import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="ml-36 mr-36 mt-8 md:px-5 md:py-5 md:flex-row items-center">
        <div className="flex mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="mt-4 block">
            <h1 className="block font-bold text-3xl mb-5 font-nanumBold">
              Blog
            </h1>
            <p className="mx-auto mb-6 font-nanumRegular">
              Blog 미구현 상태입니다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
