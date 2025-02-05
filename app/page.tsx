import HeroSection from '@/app/home-page-components/HeroSection'
import WhyAIAgent from '@/app/home-page-components/WhyAIAgent'
import WhoWeServe from '@/app/home-page-components/WhoWeServe'
import CustomerSuccess from '@/app/home-page-components/CustomerSuccess'
import HowItWorks from '@/app/home-page-components/HowItWorks'
import VentureStudio from '@/app/home-page-components/VentureStudio'
import FinalCall from '@/app/home-page-components/FinalCall'
import Footer from '@/app/home-page-components/Footer'  

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyAIAgent />
      <WhoWeServe />
      <CustomerSuccess />
      <HowItWorks />
      <VentureStudio />
      <FinalCall />
      <Footer />
      {/* Other sections can go here */}
    </main>
  )
}