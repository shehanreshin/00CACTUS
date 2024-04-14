import fonts from "@/utils/Fonts";

export default function Hero() {
    return (
        <section className={`flex flex-col ${fonts.vanchrome.className} 2xl:text-[15.8vw] xl:text-[17vw] lg:text-[17.2vw] md:text-[17.2vw] leading-[0.79] tracking-npx2 justify-center gap-5`}>
            <div className={`flex gap-10`}>
                <div><span className={`me-[9px]`}>EMBRACE</span>YOUR</div>
                <div className={`w-48 bg-foreground rounded-full`}></div>
            </div>
            <div>TRUEST<span className={`me-[9px] ms-[9px]`}>SELF</span>WITH</div>
            <div className={`flex gap-10`}>
                <div className={`text-primary`}>00CACTUS</div>
                <div>VIDEO</div>
            </div>
        </section>
    );
}