import { getTranslations, setRequestLocale } from "next-intl/server";

import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import Topbar from "@/components/Topbar";
import Work from "@/components/Work";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-60 focus:bg-accent focus:px-4 focus:py-2 focus:font-primary focus:text-sm focus:font-bold focus:text-primary"
      >
        {t("skipToContent")}
      </a>

      <Topbar />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Principles />
        <Services />
        <Work />
        <Approach />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
