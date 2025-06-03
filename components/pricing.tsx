"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

export default function Pricing() {
    const plans = [
        {
            name: "Paket Basic",
            desc: "Mulai hemat dengan berbagi akses ke aplikasi premium favorit Anda bersama teman atau keluarga.",
            price: 50000, // <- Diubah menjadi angka penuh (Rp 50.000)
            isMostPop: false,
            features: [
                "Sharing maksimal 3 orang per grup akun",
                "Akses ke pilihan aplikasi esensial populer",
                "Buat atau gabung ke grup sharing publik",
                "Dukungan pelanggan standar via email & chat",
            ],
        },
        {
            name: "Paket Advanced",
            desc: "Pilihan populer untuk akses lebih luas ke beragam aplikasi dan fleksibilitas lebih besar untuk Anda dan grup Anda.",
            price: 150000, // <- Diubah menjadi angka penuh (Rp 150.000)
            isMostPop: true,
            features: [
                "Sharing maksimal 5 orang per grup akun",
                "Akses ke katalog aplikasi yang lebih banyak, termasuk beberapa tools profesional",
                "Buat atau gabung ke grup sharing publik & privat (khusus undangan)",
                "Prioritas dalam antrian dukungan pelanggan",
                "Notifikasi ketersediaan slot di grup favorit Anda",
                "Statistik penggunaan dasar untuk grup Anda",
            ],
        },
        {
            name: "Paket Pro",
            desc: "Pengalaman maksimal SyncLab dengan batas sharing tertinggi, akses terlengkap, dan fitur eksklusif untuk pengguna aktif.",
            price: 300000, // <- Diubah menjadi angka penuh (Rp 300.000)
            isMostPop: false,
            features: [
                "Sharing maksimal 10 orang per grup akun",
                "Akses ke semua aplikasi di katalog SyncLab, termasuk yang paling premium dan rilisan baru",
                "Buat atau gabung grup sharing publik & privat dengan kontrol admin penuh",
                "Dukungan pelanggan VIP dengan respons cepat dan jalur khusus",
                "Kesempatan request aplikasi baru untuk ditambahkan ke SyncLab",
                "Akses lebih awal ke fitur-fitur beta SyncLab",
                "Tidak ada batasan jumlah grup yang bisa diikuti/dibuat",
                "Laporan penggunaan tingkat lanjut untuk optimasi sharing",
            ],
        },
    ];

    return (
        <motion.section
            id="pricing"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                bounce: 0,
            }}
            className="max-w-screen-xl w-full mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
        >
            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
                    Temukan Paket SyncLab Ideal Anda
                </h3>
                <p className="max-w-xl text-muted-foreground text-center">
                    Pilih dari beberapa opsi fleksibel kami dan mulailah
                    menikmati akses aplikasi premium dengan lebih hemat hari
                    ini!
                </p>
            </div>
            <div className="mt-16 gap-10 grid lg:grid-cols-3 place-content-center">
                {plans.map((item, idx) => (
                    <Card
                        key={idx}
                        shadow="none"
                        className={`relative rounded-[20px] p-[3px] will-change-transform ${
                            item.isMostPop ? "sm:scale-110" : ""
                        }`}
                    >
                        {item.isMostPop ? (
                            <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#016FEE_70%,#C7DBFB_100%)]" />
                        ) : (
                            <span className="absolute inset-[-1000%] bg-border" />
                        )}
                        <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-5">
                            <CardBody className="w-full flex items-start gap-3">
                                <div className="flex flex-col">
                                    <h4 className="text-xl font-light">
                                        {item.name}
                                    </h4>
                                    <span className="text-muted-foreground text-sm font-light">
                                        {item.desc}
                                    </span>
                                </div>
                                <span className="text-2xl font-light">
                                    {item.price.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </span>

                                <Divider />

                                <div className="flex flex-col gap-5 pb-5">
                                    <span className="text-muted-foreground text-sm font-light">
                                        Includes
                                    </span>
                                    <ul className="flex flex-col gap-2">
                                        {item.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="text-sm font-light"
                                            >
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardBody>
                            <CardFooter className="p-0">
                                <Button
                                    className="w-full"
                                    variant="solid"
                                    color={
                                        item.isMostPop ? "primary" : "default"
                                    }
                                >
                                    Get Started
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </motion.section>
    );
}
