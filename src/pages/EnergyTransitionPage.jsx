import React, { useEffect } from "react";
import { About } from "../components/About";
import { Consulting } from "../components/Consulting";
import { ContactUs } from "../components/ContactUs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../Hero";

export default function EnergyTransitionPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <>
      <Header />
      <h1 className="text-center text-3xl font-bold max-sm:text-center tracking-tighter sm:text-5xl max-sm:text-3xl mt-6 mb-10 ">
        Energy Transition
      </h1>
      <div className="flex flex-wrap items-start  max-sm:flex-col mb-16 gap-4 px-4 md:px-6">
        <p className="ml-6 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
          <img
            className="mb-6 ml-8 aspect-video overflow-hidden rounded-xl object-cover object-center max-sm:w-full lg:h-[350px] float-right"
            src="./energy-transition.webp"
            alt="energy-transition in Morocco"
          />
          Morocco has emerged as a regional leader in renewable energy
          deployment, with ambitious targets to achieve 52% renewable energy in
          its power mix by 2030, according to the Moroccan Ministry of Energy,
          Mines, and Environment (2022).
          <br />
          <br />
          Research from the International Renewable Energy Agency (IRENA)
          highlights Morocco's significant progress in renewable energy
          deployment, particularly in solar and wind power generation. The
          Moroccan government's National Energy Strategy aims to accelerate the
          development of renewable energy projects, reduce greenhouse gas
          emissions, and enhance energy security and affordability. Morocco's
          Noor Ouarzazate Solar Complex, one of the largest concentrated solar
          power plants in the world, exemplifies the country's commitment to
          renewable energy and sustainable development.
          <br />
          <br />
          Companies specializing in renewable energy technologies, project
          finance, and energy efficiency have opportunities to invest in clean
          energy projects and contribute to Morocco's sustainable development
          goals. With favorable government policies and incentives, the Moroccan
          energy market offers a conducive environment for foreign investment
          and collaboration.
          <br />
          <br />
          At New Venture, we specialize in providing strategic insights and
          advisory services to investors/companies seeking to capitalize on
          Morocco's energy transition opportunities. Whether it's identifying
          investment opportunities, navigating regulatory frameworks, or
          facilitating partnerships with local stakeholders, we are committed to
          helping our clients drive positive environmental and social impact in
          the Moroccan energy market.
        </p>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}
