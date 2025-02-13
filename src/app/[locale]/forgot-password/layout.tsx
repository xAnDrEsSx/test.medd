// NextJS
import Translate from "@components/Translate";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "MOAI | Forgot Password",
    description: "Travel app"
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center h-screen">
            <header className="flex bg-primary w-full items-center justify-between p-4">
                <Image
                    src="/logo.png"
                    alt="Moai logo"
                    width={100}
                    height={100}
                />

                <Translate />
            </header>

            {children}
        </main>
    );
}