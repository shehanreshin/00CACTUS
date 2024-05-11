import Header from "@/components/client/header/Header";
import Home from "@/components/client/home/Home";
import fonts from "@/utils/Fonts";

export default function Page() {
    return (
        <div className={`min-h-screen flex flex-col py-5`}>
            <div className={`container mx-auto flex flex-col gap-14 px-16`}>
                <Header />
                <Home />
            </div>

        </div>
    );
}