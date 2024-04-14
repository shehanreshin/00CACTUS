import Header from "@/components/client/header/Header";

export default function Page() {
    return (
        <div className={`min-h-screen min-w-screen flex flex-col`}>
            <div className={`container pt-5`}>
                <Header />
            </div>
            <section>Hello</section>
        </div>
    );
}