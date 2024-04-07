import React, { useEffect } from "react";
import { About } from "../components/About";
import { Consulting } from "../components/Consulting";
import { ContactUs } from "../components/ContactUs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../Hero";

function AgriculturePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-center text-3xl font-bold max-sm:text-center tracking-tighter sm:text-5xl max-sm:text-3xl mt-6 mb-10 ">
        Agriculture
      </h1>
      <div className="flex flex-wrap items-start  max-sm:flex-col mb-16 gap-4 px-4 md:px-6">
        <p className="ml-6 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
          <img
            className="mb-6 ml-8 aspect-video overflow-hidden rounded-xl object-cover object-center max-sm:w-full lg:h-[350px] float-right"
            src="./agriculture.webp"
            alt="Agriculture in Morocco"
          />
          The Moroccan agricultural sector is a significant contributor to the
          country's economy, accounting for approximately 15% of GDP and
          employing over 40% of the workforce, according to data from the
          Moroccan Ministry of Agriculture (2021). Morocco is also one of the
          largest producers and exporters of fruits and vegetables in the
          region, with citrus fruits, olives, and tomatoes being key export
          crops.
          <br />
          <br />
          Research from the International Food Policy Research Institute (IFPRI)
          in 2023 underscores Morocco's potential for increasing agricultural
          productivity through modernization and technological advancements. The
          Moroccan government's Green Morocco Plan, launched in 2008, aims to
          enhance agricultural productivity, improve rural livelihoods, and
          ensure food security for the nation. Under this plan, significant
          investments have been made in irrigation infrastructure, land
          consolidation, and agricultural research and development.
          <br />
          <br />
          Companies specializing in agricultural technology, irrigation systems,
          and sustainable farming practices have ample opportunities to
          collaborate with Moroccan stakeholders and drive innovation in the
          sector. With Morocco's commitment to sustainable agriculture and
          growing demand for high-quality produce both domestically and
          internationally, the agricultural market presents promising prospects
          for companies looking to expand their presence in Morocco.
          <br />
          <br />
          At New Venture, we leverage our expertise and industry insights to
          guide investors/companies in capitalizing on Morocco's agricultural
          potential. Whether it's identifying investment opportunities,
          navigating regulatory requirements, or fostering strategic
          partnerships, we are dedicated to helping our clients achieve success
          and sustainable growth in the Moroccan agricultural market.
        </p>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default AgriculturePage;
