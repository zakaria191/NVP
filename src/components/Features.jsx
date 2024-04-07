import React from 'react'

function Features() {
  return (
<div  class=" p-4 min-h-screen">
  <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="w-full mt-12 text-center">
      <h2 className="my-8 text-2xl font-bold md:text-4xl">Features</h2>
      {/* <p className="text-gray-900">We have built many products and some of them are below</p> */}
    </div>
    <div
      className="mt-16 grid divide-x divide-y overflow-hidden  rounded-3xl border text-gray-900 sm:grid-cols-2 lg:grid-cols-5  lg:divide-y-0 xl:grid-cols-5">
      <div className="group relative transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
        <div className="relative flex flex-col items-center text-center space-y-8 py-6 p-8">
          <span className='bg-[#172656] rounded-full p-4'><img src="./networking.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full text-white" /></span>
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gray-950 transition group-hover:text-secondary">NETWORKING</h5>
            <p className="text-gray-900 text-justify">New Venture network spans over different sectors. The network contains high ranked and influential agents. And the most important it expands by the day.</p>
          </div>
        </div>
      </div>
      <div className="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative flex flex-col items-center text-center space-y-8 py-6 p-8">
        <span className='bg-[#172656] rounded-full p-4'><img src="./laptop-search.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full text-white" /></span>
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gray-950 transition group-hover:text-secondary">CONSULTING / RESEARCH</h5>
            <p className="text-gray-900 text-justify">New Venture provides you with the data analytics as the operational intelligence for best practices.</p>
          </div>
        </div>
      </div>
      <div className="group relative transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
        <div className="relative flex flex-col items-center text-center space-y-8 py-6 p-8">
        <span className='bg-[#172656] rounded-full p-4'><img src="./export1.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full text-white" /></span>
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gray-950 transition group-hover:text-secondary">EXPORT / BROKERAGE</h5>
            <p className="text-gray-900 text-justify">We deliver high quality products from the worldwide recognized "SOUSS" Region. New Venture sources the clients and assists you till the deal is closed and sealed.</p>
          </div>
        </div>
      </div>
      <div className="group relative transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
        <div className="relative flex flex-col items-center text-center space-y-8 py-6 p-8">
        <span className='bg-[#172656] rounded-full p-4'><img src="./market.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full text-white" /></span>
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gray-950 transition group-hover:text-secondary">MARKET ENTRY/PROMOTION</h5>
            <p className="text-gray-900 text-justify">New Venture provides its resources to let you penetrate the market. We put also our resources to support you for promotion</p>
          </div>
        </div>
      </div>
      <div className="group relative transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
        <div className="relative flex flex-col items-center text-center space-y-8 py-6 p-8">
        <span className='bg-[#172656] rounded-full p-4'><img src="./deal.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full text-white" /></span>
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gray-950 transition group-hover:text-secondary">DEAL CLOSED</h5>
            <p className="text-gray-900 text-justify">New Venture support just goes on. We keep in touch. And we get ready for the next deal.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Features