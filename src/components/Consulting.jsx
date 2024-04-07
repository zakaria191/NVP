import React from "react";

export const Consulting = () => {
  return (
    <div id="services" class=" p-4 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="w-full mt-12 text-center">
          <h2 className="my-8 text-2xl font-bold md:text-4xl">Consulting</h2>
        </div>
        <div className="mt-16 grid divide-x divide-y overflow-hidden  rounded-3xl border text-gray-900 sm:grid-cols-2 lg:grid-cols-3  lg:divide-y-0 xl:grid-cols-3">
          <div className="group relative !border transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
            <div className="relative flex flex-col items-center text-center space-y-8 py-8 p-6">
              <div className="space-y-2">
                <h5 className="text-lg font-bold uppercase text-gray-950 transition group-hover:text-secondary">
                  STRATEGY DESIGN
                </h5>
                <p className="text-gray-900 text-sm text-justify">
                  Strategy is at the heart of our work at NEW VENTURE
                  CONSULTING. We build tailored solutions to help our clients
                  allocate their resources effectively and generate superior
                  returns on a sustained basis. We have the analytical toolkits,
                  expertise and capabilities to support our clients throughout
                  their strategic journey (ranging from identifying high impact
                  trends, to identifying concrete growth opportunities or
                  developing actionable portfolio and Business Unit
                  strategies…and driving superior business performance through
                  innovation in products, services, processes and business
                  models)
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center !border text-center space-y-8 py-8 p-6">
            <div className="space-y-2">
              <h5 className="text-lg font-bold uppercase text-gray-950 transition group-hover:text-secondary">
                TRANSFORMATION PROGRAMS
              </h5>
              <p className="text-gray-900 text-sm text-justify">
                Delivering enduring success over the long run is challenging,
                especially in the contexts of scarce Talent like Africa. NEW
                VENTURE Consulting has developed a unique expertise for running
                successful Transformation Programs, thus enabling its clients to
                reach new platforms of growth. Change programs can take many
                forms, from moderate restructurings to full-scale turnarounds,
                depending on clients’ needs. Our approach relies on guiding
                clients to identify, sequence and implement the necessary
                changes and actions that will create lasting impact. Our
                delivery model takes into account our clients’ internal
                constraints and specifics (e.g stop & go between the different
                project’s phases)
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center !border text-center space-y-8 py-8 p-6">
            <div className="space-y-2">
              <h5 className="text-lg font-bold uppercase text-gray-950 transition group-hover:text-secondary">
                strategic due diligence
              </h5>
              <p className="text-gray-900 text-sm text-justify">
                Capital flows and M&A volume deals are increasing steadily in
                the Continent, fuelled by the bright economic prospects. NEW
                VENTURE CONSULTING developed a specific experience in strategic
                due diligences, helping its clients to develop an informed and
                unbiased perspective on the target or the sector they are
                considering for their investment.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center !border text-center space-y-8 py-8 p-6">
            <div className="space-y-2">
              <h5 className="text-lg font-bold uppercase text-gray-950 transition group-hover:text-secondary">
                Organization
              </h5>
              <p className="text-gray-900 text-sm text-justify">
                From Organizations designed for higher performance, to Corporate
                Governance systems better focused on shareholders’ value, NEW
                VENTURE CONSULTING assists its clients in solving their most
                critical organisation challenges. Our span of potential
                assignments include: Organisation design fully aligned with
                strategy & vision and taking advantage of the benefits of scale.
                Management cockpits’ development focusing on the right
                performance levers. Talent management / development of high
                performance environments. Shareholder’s committees design
                bringing better accountability and value creation
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center !border text-center space-y-8 py-8 p-6">
            <div className="space-y-2">
              <h5 className="text-lg font-bold uppercase text-gray-950 transition group-hover:text-secondary">
                Client focus
              </h5>
              <p className="text-gray-900 text-sm text-justify">
                We recognize that our clients are our unique “raison d’être”.
                Our standards require that we always put their interests ahead
                of ours: We put all of our energy to serve them competently,
                with absolute professionalism and commitment and better than the
                situation typically requires. In particular, we seek to be
                catalyst for change, rather than substitutes to their internal
                capabilities. Also, we always seek to build long term client
                relationships, based on mutual trust and respect
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center !border text-center space-y-8 py-8 p-6">
            <div className="space-y-2">
              <h5 className="text-lg font-bold uppercase text-gray-950 transition group-hover:text-secondary">
                Sustainable value
              </h5>
              <p className="text-gray-900 text-sm text-justify">
                Confidentiality – we feel privileged to share the confidences of
                clients, and abide by strict rules of confidentiality regardless
                of the situation Integrity – We are always honest about what we
                can deliver to avoid any form of deception.Also, we seek to
                maintain an independent and unbiased position, being ready to
                express the truth as we see it, regardless of its popularity.
                Ethic – we observe the highest ethical standards to be truthful
                at all times. In particular, we work only for clients with whom
                we share aspirations and values and never trade in the
                securities of any of our clients’ companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
