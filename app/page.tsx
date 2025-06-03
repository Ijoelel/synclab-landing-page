import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="flex flex-col min-h-dvh">
            <NavBar />
            <Hero />
            <Partners />
            <Stats />
            <Pricing />
            <Testimonials />
            <Footer />
        </main>
    );
}
