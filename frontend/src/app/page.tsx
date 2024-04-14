import fonts from "@/utils/Fonts";
import Image from "next/image";

import cartIcon from "@/assets/icons/common/cart.svg";
import profileIcon from "@/assets/icons/common/profile.svg";

export default function Page() {
  return (
      <div className={`min-h-screen min-w-screen`}>
        <div className={`container`}>
            <header className={`${fonts.vanchrome.className}`}>
                <nav className={`flex justify-between items-center`}>
                    <div className={`text-5xl`}>00CACTUS</div>
                    <ul className={`flex gap-5`}>
                        <li>CATALOG</li>
                        <li>NEW ARRIVALS</li>
                        <li>PROMO</li>
                        <li>COMPANY</li>
                    </ul>
                    <div className={`flex gap-5 w-4/12 justify-end`}>
                        <div className={`bg-primary w-full`}>
                            <input className={`bg-gallery w-full`} type="text" placeholder="SEARCH..."/>
                        </div>
                        <Image src={cartIcon} alt="cart" quality={100} />
                        <Image src={profileIcon} alt="profile" quality={100} />
                    </div>
                </nav>
            </header>
        </div>
        <div>Hello</div>
      </div>
  );
}