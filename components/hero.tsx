"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { Link } from "@heroui/link"; // Assuming Link is used for navigation buttons

export default function Hero() {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure(); // useDisclosure often provides onClose directly

    return (
        <div className="relative justify-center items-center">
            <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0 }}
                    className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
                >
                    {/* 1. Updated Badge */}
                    <span className="w-fit h-full text-sm bg-card px-3 py-1.5 border border-border rounded-full">
                        🎉 Share & Save on Premium Apps!
                    </span>

                    {/* 2. Updated Headline */}
                    <h1 className="text-4xl pb-4 font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
                        SyncLab: Unlock Premium Apps, Together.
                    </h1>

                    {/* 3. Updated Sub-headline */}
                    <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
                        Access a wide library of premium subscriptions by easily
                        sharing accounts, all in one place. Save money and enjoy
                        more with SyncLab.
                    </p>

                    {/* 4. Updated Call-to-Action Buttons */}
                    <motion.div
                        // whileHover={{ scale: 1.05 }} // Consider applying hover to individual buttons if preferred
                        className="items-center justify-center gap-x-4 space-y-3 sm:flex sm:space-y-0 mt-6" // Added a little top margin
                    >
                        <Button
                            as={Link} // Use Link component for navigation
                            href="/early-access" // Link to your early access/waitlist page
                            color="primary"
                            variant="shadow"
                            size="lg" // Assuming 'lg' size is available in @heroui/button
                        >
                            Get Early Access
                        </Button>
                        <Button
                            onPress={onOpen} // Opens the modal
                            color="secondary" // Or another appropriate color/variant
                            variant="ghost" // Example: ghost or outline variant
                            size="lg"
                        >
                            How It Works?
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 5. Updated Modal Content */}
            <Modal
                isOpen={isOpen}
                placement="center"
                onOpenChange={onOpenChange} // Handles closing via overlay click or Esc
            >
                <ModalContent>
                    <ModalHeader>How SyncLab Works</ModalHeader>
                    <ModalBody>
                        <p className="text-sm text-muted-foreground">
                            {" "}
                            {/* Added some basic styling for modal text */}
                            SyncLab provides a platform where you can easily
                            join or create groups to securely share the costs of
                            your favorite premium application subscriptions.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                            Enjoy full access to a diverse range of tools for
                            productivity, creativity, and entertainment without
                            the burden of multiple full-priced individual
                            subscriptions. It&apos;s smart, simple, and
                            cost-effective!
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onPress={onClose} // useDisclosure typically provides an onClose function
                            color="primary"
                            variant="solid"
                            size="sm"
                        >
                            Got It!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Decorative background element - remains unchanged */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    type: "spring",
                    bounce: 0,
                }}
                className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
            >
                <div className="w-3/4 flex justify-center items-center">
                    <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
                </div>
            </motion.div>
        </div>
    );
}
