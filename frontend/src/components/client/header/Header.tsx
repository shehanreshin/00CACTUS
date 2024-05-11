import fonts from "@/utils/Fonts";
import Image from "next/image";
import searchIcon from "@/assets/client/icons/common/search.svg";
import cartIcon from "@/assets/client/icons/common/cart.svg";
import profileIcon from "@/assets/client/icons/common/profile.svg";
import Navbar from "@/components/client/navbar/Navbar";

export default function Header() {
    return (
        <header className={`flex justify-between items-center ${fonts.vanchrome.className}`}>
            <button className={`text-5xl`}>00CACTUS</button>
            <Navbar/>
            <div className={`flex gap-5 w-4/12 justify-end text-xl items-center`}>
                <div className={`w-7/12 flex items-center`}>
                    <input className={`bg-gallery w-full ps-5 pe-12 pt-5 pb-5 rounded-xl`} type="text"
                           placeholder="SEARCH..."/>
                    <Image className={`relative right-9 text-lg w-5 h-5`} src={searchIcon} alt="cart"
                           quality={100}/>
                </div>
                <button>
                    <Image className={`w-6 h-6`} src={cartIcon} alt="cart" quality={100}/>
                </button>
                <button>
                    <Image className={`w-6 h-6`} src={profileIcon} alt="profile" quality={100}/>
                </button>
            </div>
        </header>
    );
}