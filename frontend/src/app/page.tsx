import Header from "@/components/client/header/Header";
import Home from "@/components/client/home/Home";
import fonts from "@/utils/Fonts";

export default function Page() {
    return (
        <div className={`min-h-screen min-w-screen flex flex-col`}>
            <div className={`container pt-5`}>
                <Header />
                <Home />
            </div>

        </div>
    );
}