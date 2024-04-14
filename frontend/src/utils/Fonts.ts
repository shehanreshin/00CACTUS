import localFont from "next/font/local";

const vanchrome = localFont({
    src: "./../../public/fonts/vanchrome/VanchromeFront.otf",
    display: "swap",
});

const dharma = localFont({
    src: [
        {
            path: "./../../public/fonts/dharma-gothic-e/DharmaGothicE_ExLight_R.otf",
            weight: "200",
        },
        {
            path: "./../../public/fonts/dharma-gothic-e/DharmaGothicE_Light_R.otf",
            weight: "300",
        },
        {
            path: "./../../public/fonts/dharma-gothic-e/DharmaGothicE_Regular_R.otf",
            weight: "400",
        },
        {
            path: "./../../public/fonts/dharma-gothic-e/DharmaGothicE_Bold_R.otf",
            weight: "700",
        },
        {
            path: "./../../public/fonts/dharma-gothic-e/DharmaGothicE_ExBold_R.otf",
            weight: "800",
        },
        {
            path: "./../../public/fonts/dharma-gothic-e/DharmaGothicE_Heavy_R.otf",
            weight: "900",
        },
    ],
    display: "swap",
    variable: "--font-dharma",
});

export const fonts = {
    vanchrome: vanchrome,
    dharma: dharma,
};

export default fonts;