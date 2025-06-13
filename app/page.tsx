import LandingPage from "@/features/landing-page/landing-page";
import Footer from "@/features/shared/footer/footer";
import Navbar from "@/features/shared/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage /> <Footer />
    </>
  );
}
