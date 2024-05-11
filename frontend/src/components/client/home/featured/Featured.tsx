import featuredCardImage1 from "@/assets/client/img/home/featured-1.jpg";
import featuredCardImage2 from "@/assets/client/img/home/featured-2.jpg";
import Image from "next/image";
import fonts from "@/utils/Fonts";

export default function Featured() {
    return (
        <section className={`grid grid-cols-12 h-[65vh] gap-5 ${fonts.vanchrome.className} text-background text-6xl`}>
            <div className={`col-span-8`}>
                <div className={`h-full w-full bg-primary relative rounded-2xl`}>
                    <Image className={`object-top rounded-2xl`} src={featuredCardImage1} alt="featured image 1" quality={100} objectFit={`cover`} layout={`fill`} />
                    <div className={`inline-block relative top-[82%] ps-12`}>#DOUBLE 0 CACTUS SZN</div>
                </div>
            </div>
            <div className={`col-span-4`}>
                <div className={`h-full w-full bg-primary relative rounded-2xl`}>
                    <Image className={`object-top rounded-2xl`} src={featuredCardImage2} alt="featured image 1"
                           quality={100}
                           objectFit={`cover`} layout={`fill`}/>
                    <div className={`inline-block relative top-[82%] ps-12`}>EXPLORE #DROP</div>
                </div>
            </div>
        </section>
    );
}