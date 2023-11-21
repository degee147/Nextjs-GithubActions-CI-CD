import FooterCTA from "@/components/FooterCTA";
import SwiftAccount from "@/app/swiftAccount";
import LighteningFast from "@/app/lighteningFast";
import Versatile from "@/app/versatile";
import CompanyTrust from "@/app/companyTrust";
import Products from "@/app/products";
import CardSecurity from "@/app/cardSecurity";
import Testimonials from "@/app/testimonials";
import Hero from "@/app/hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <SwiftAccount/>
      <LighteningFast/>
      <Versatile/>
      {/*<CompanyTrust/>*/}
      <Products/>
      <CardSecurity/>
      {/*<Testimonials/>*/}
      <FooterCTA/>
    </div>
  )
}
