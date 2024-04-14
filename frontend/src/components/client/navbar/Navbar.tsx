import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className={`flex gap-14 text-xl`}>
                <Link href={`/catalog`}>
                    <li>CATALOG</li>
                </Link>
                <Link href={`/new-arrivals`}>
                    <li>NEW ARRIVALS</li>
                </Link>
                <Link href={`/promotions`}>
                    <li>PROMO</li>
                </Link>
                <Link href={`/company`}>
                    <li>COMPANY</li>
                </Link>
            </ul>
        </nav>
    );
}