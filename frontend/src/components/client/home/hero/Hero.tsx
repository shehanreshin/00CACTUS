import fonts from "@/utils/Fonts";

export default function Hero() {
    return (
        <section className={`flex flex-col ${fonts.vanchrome.className} text-9xl`}>
            <div className={`flex gap-10`}>
                <div>EMBRACEYOUR</div>
                <div className={`flex`}>
                    <div className={`w-full h-full bg-foreground rounded-full`}></div>
                </div>
            </div>
            <div>TRUESTSELFWITH</div>
            <div className={`flex gap-10`}>
                <div className={`text-primary`}>00CACTUS</div>
                <div>VIDEO</div>
            </div>
        </section>
    );
}