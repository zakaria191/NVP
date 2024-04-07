import React, { useEffect } from "react";
import { About } from "../components/About";
import { Consulting } from "../components/Consulting";
import { ContactUs } from "../components/ContactUs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../Hero";

function WaterManagementPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    // <div>
    //   <Header />
    //   <div>
    //     <h1 className="text-center text-3xl font-bold max-sm:text-center tracking-tighter sm:text-5xl max-sm:text-3xl mt-6 mb-16 ">
    //       Water Management
    //     </h1>
    //   </div>
    //   <img
    //     className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center max-sm:w-full lg:h-[350px]"
    //     src="./water-management.webp"
    //   />
    //   <div className="flex items-center justify-around max-sm:flex-col mb-16 gap-4 px-4 md:px-6 ">
    //     <div>
    //       <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mr-14">
    //         Morocco faces water scarcity challenges due to its semi-arid
    //         climate, making efficient water management crucial for sustainable
    //         development. According to the World Bank (2020), Morocco has made
    //         significant progress in reducing water losses, with a 15% reduction
    //         over the past decade through investments in water infrastructure and
    //         efficiency measures. The Moroccan government's National Water
    //         Strategy, launched in 2009, aims to improve water security, enhance
    //         water quality, and expand access to safe drinking water and
    //         sanitation services. As part of this strategy, Morocco has
    //         implemented large-scale water infrastructure projects such as dams,
    //         reservoirs, and desalination plants. Companies specializing in water
    //         technology, desalination, and wastewater treatment have
    //         opportunities to collaborate with Moroccan counterparts and
    //         contribute to sustainable water management solutions. With
    //         increasing urbanization and industrialization, the demand for
    //         innovative water conservation and reuse technologies is on the rise.
    //         At New Venture, we specialize in providing tailored solutions and
    //         strategic guidance to companies seeking to capitalize on Morocco's
    //         water management opportunities. From conducting feasibility studies
    //         to facilitating partnerships with local stakeholders, we are
    //         committed to helping our clients navigate the complexities of the
    //         Moroccan water market and drive sustainable development outcomes.
    //       </p>
    //     </div>
    //   </div>
    //   <ContactUs />
    //   <Footer />
    // </div>
    <>
      <Header />
      <h1 className="text-center text-3xl font-bold max-sm:text-center tracking-tighter sm:text-5xl max-sm:text-3xl mt-6 mb-10 ">
        Water Management
      </h1>
      <div className="flex flex-wrap items-start  max-sm:flex-col mb-16 gap-4 px-4 md:px-6">
        <p className="ml-6 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
          <img
            className="mb-6 ml-8 aspect-video overflow-hidden rounded-xl object-cover object-center max-sm:w-full lg:h-[350px] float-right"
            src="./water-management.webp"
            alt="water-management in Morocco"
          />
          Morocco faces water scarcity challenges due to its semi-arid climate,
          making efficient water management crucial for sustainable development.
          <br />
          <br />
          According to the World Bank (2020), Morocco has made significant
          progress in reducing water losses, with a 15% reduction over the past
          decade through investments in water infrastructure and efficiency
          measures. The Moroccan government's National Water Strategy, launched
          in 2009, aims to improve water security, enhance water quality, and
          expand access to safe drinking water and sanitation services. As part
          of this strategy, Morocco has implemented large-scale water
          infrastructure projects such as dams, reservoirs, and desalination
          plants.
          <br />
          <br />
          Companies specializing in water technology, desalination, and
          wastewater treatment have opportunities to collaborate with Moroccan
          counterparts and contribute to sustainable water management solutions.
          With increasing urbanization and industrialization, the demand for
          innovative water conservation and reuse technologies is on the rise.
          <br />
          <br />
          At New Venture, we specialize in providing tailored solutions and
          strategic guidance to companies seeking to capitalize on Morocco's
          water management opportunities. From conducting feasibility studies to
          facilitating partnerships with local stakeholders, we are committed to
          helping our clients navigate the complexities of the Moroccan water
          market and drive sustainable development outcomes.
        </p>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default WaterManagementPage;
