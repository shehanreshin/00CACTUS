import Header from "@/components/header/Header";

export default function Page() {
    return (
        <div className={`min-h-screen min-w-screen`}>
            <div className={`container pt-5`}>
                <Header />
            </div>
            <section>Hello</section>
        </div>
    );
}