import Hero from "@/components/client/home/hero/Hero";
import Featured from "@/components/client/home/featured/Featured";

export default function Home() {
    return (
        <main className={`flex flex-col gap-14`}>
            <Hero/>
            <Featured/>
        </main>
    );
}