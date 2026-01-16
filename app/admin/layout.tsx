import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "(Admin) Motin Films - Filmes de alto impacto",
    description: "Motin Films - Filmes de alto impacto",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='h-screen'>
            {children}
        </main>
    );
}
