"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Citra Ayu",
            role: "Desainer Grafis Freelance",
            avatar: "https://i.pravatar.cc/150?img=1", // Avatar bisa Anda sesuaikan nanti jika perlu
            content:
                "SyncLab benar-benar mengubah cara saya mengakses software desain premium! Saya bisa mendapatkan semua tools canggih untuk proyek saya dengan biaya yang jauh lebih murah. Ini sangat membantu anggaran saya!",
            rating: 5,
        },
        {
            name: "Budi Santoso",
            role: "Pengembang Aplikasi Indie",
            avatar: "https://i.pravatar.cc/150?img=3",
            content:
                "Berkat SyncLab, saya jadi bisa langganan semua tools pengembangan dan testing yang saya impikan. Proses cari dan gabung akun bersama juga gampang banget. Produktivitas saya melonjak drastis!",
            rating: 5,
        },
        {
            name: "Rina Wulandari",
            role: "Konsultan Pemasaran Digital",
            avatar: "https://i.pravatar.cc/150?img=5",
            content:
                "Awalnya saya ragu soal akun bersama, tapi platform SyncLab ini transparan dan dikelola dengan baik. Penghematan untuk tools marketing dan SEO penting buat agensi kecil saya luar biasa banget!",
            rating: 5,
        },
        {
            name: "Agus Setiawan",
            role: "Mahasiswa & Calon Pengusaha",
            avatar: "https://i.pravatar.cc/150?img=15",
            content:
                "Dulu susah banget langganan software belajar dan bisnis satu per satu dengan uang saku mahasiswa. SyncLab bikin semuanya jadi terjangkau. Wajib punya buat yang baru mulai!",
            rating: 5,
        },
        {
            name: "Dewi Lestari",
            role: "Kreator Konten Online",
            avatar: "https://i.pravatar.cc/150?img=17",
            content:
                "Tim support SyncLab oke banget! Mereka bantu saya memaksimalkan penggunaan software edit video dan streaming via akun bersama. Sekarang saya bisa bikin konten profesional tanpa biaya mahal.",
            rating: 5,
        },
        {
            name: "Rizky Pratama",
            role: "Blogger & Reviewer Teknologi",
            avatar: "https://i.pravatar.cc/150?img=19",
            content:
                "Untuk review, saya butuh akses ke banyak software. SyncLab menyediakan akses yang andal dan terjangkau ke berbagai aplikasi premium. Pekerjaan saya jadi jauh lebih mudah dan detail.",
            rating: 5,
        },
        {
            name: "Siska Amelia",
            role: "Produser Podcast",
            avatar: "https://i.pravatar.cc/150?img=21",
            content:
                "Dengan SyncLab, saya bisa pakai tools edit audio premium dan layanan hosting yang dulu cuma mimpi. Kualitas podcast saya meningkat pesat, pendengar juga sadar bedanya!",
            rating: 5,
        },
        {
            name: "Hendra Gunawan",
            role: "Pemilik Toko Online Kecil",
            avatar: "https://i.pravatar.cc/150?img=23",
            content:
                "Mulai pakai SyncLab gampang banget! Saya cepat dapat akses ke tools analisis e-commerce dan layanan pelanggan penting lewat akun bersama. Ini bantu bisnis kecil saya bersaing.",
            rating: 5,
        },
    ];

    const StarIcon = () => (
        <svg
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    return (
        <section id="testimonials" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-20 flex flex-col gap-3"
                >
                    <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
                        Disukai Ribuan Pengguna di Seluruh Indonesia
                    </h2>
                    <p className="mx-auto max-w-xl text-muted-foreground text-center">
                        Mereka telah merasakan kemudahan akses ke berbagai
                        aplikasi premium dengan biaya jauh lebih ringan.
                        Sekarang giliran Anda mencoba!
                    </p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.05,
                                ease: "easeOut",
                            }}
                            className="break-inside-avoid mb-8"
                        >
                            <div className="p-6 rounded-xl bg-card border border-border transition-colors duration-300">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <StarIcon key={i} />
                                        )
                                    )}
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-sm font-medium border border-primary/20">
                                        {testimonial.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
