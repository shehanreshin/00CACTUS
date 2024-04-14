import type {Metadata} from "next";
import "./globals.css";
import fonts from "@/utils/Fonts";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "00CACTUS",
    description: "00CACTUS is a fashion and streetwear brand based in Colombo founded by designer Shehan Reshin. Shop online and get delivered right to your doorstep.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${fonts.dharma.className} font-bold min-h-screen antialiased`}>
        {children}
        </body>
        </html>
    );
}
