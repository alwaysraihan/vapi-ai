import LandingPage from "@/features/landing-page/landing-page";
import Navbar from "@/features/shared/navbar/navbar";
import Footer from "@/features/shared/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}
