import { Link } from "@heroui/link"; // Menggunakan Link dari @heroui/link

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Placeholder untuk tautan media sosial SyncLab Anda
    // Ganti dengan URL sebenarnya dan pertimbangkan untuk menggunakan ikon
    const socialLinks = [
        {
            name: "Facebook",
            href: "https://facebook.com/synclab",
            label: "SyncLab di Facebook",
        },
        {
            name: "Instagram",
            href: "https://instagram.com/synclab",
            label: "SyncLab di Instagram",
        },
        { name: "X", href: "https://x.com/synclab", label: "SyncLab di X" },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/company/synclab",
            label: "SyncLab di LinkedIn",
        },
    ];

    return (
        <footer className="w-full bg-background border-t border-border text-sm">
            {" "}
            {/* Latar belakang dan border atas */}
            <div className="max-w-screen-xl mx-auto px-4 py-12 md:px-8">
                {" "}
                {/* Padding standar */}
                {/* Bagian Atas: Nama Brand, Tagline, dan Media Sosial */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                    <div className="max-w-md">
                        <Link
                            href="/"
                            className="block text-2xl font-bold text-foreground hover:text-primary transition-colors"
                        >
                            SyncLab
                        </Link>
                        <p className="mt-2 text-muted-foreground">
                            Cara cerdas berbagi akses premium, lebih hemat dan
                            mudah untuk semua kebutuhan digital Anda.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank" // Buka di tab baru
                                rel="noopener noreferrer" // Keamanan untuk target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={social.label} // Untuk aksesibilitas
                            >
                                {/* Anda bisa mengganti teks ini dengan komponen Ikon SVG nantinya */}
                                {social.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Bagian Tengah: Kolom Navigasi Link */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Navigasi
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cara-kerja"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Cara Kerja
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/harga"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Harga
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Perusahaan
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/tentang-kami"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kontak"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Hubungi Kami
                                </Link>
                            </li>
                            {/* <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li> */}
                            {/* <li><Link href="/karir" className="text-muted-foreground hover:text-primary transition-colors">Karir</Link></li> */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/ketentuan-layanan"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Ketentuan Layanan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kebijakan-privasi"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Kebijakan Privasi
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Bantuan
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/pusat-bantuan"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Pusat Bantuan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/status-layanan"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Status Layanan
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Bagian Bawah: Hak Cipta */}
                <div className="text-center pt-8 border-t border-border/60">
                    {" "}
                    {/* Border pemisah yang lebih halus */}
                    <p className="text-muted-foreground">
                        &copy; {currentYear} SyncLab. Semua hak cipta
                        dilindungi.
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1">
                        Dibuat dengan ❤️ untuk kemudahan Anda.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
