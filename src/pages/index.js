import OnboardingHeader from "../app/components/Onboarding/Header/header.component";
import OnboardingProcess from "../app/components/Onboarding/Process/process.component";
import Head from "next/head";

export default function Home() {
  return (
    <div className="index-page">
      <Head>
        <title>Buyfood Application | Momoh Nobert</title>
        <meta
          name="description"
          content="Created with Next & React. Hosted on Vercel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="index-page-banner">
        <img src="index/bg.png" alt="bg" />
      </div>
      <div className="index-page-content">
        <OnboardingHeader />
        <OnboardingProcess />
      </div>
    </div>
  );
}
