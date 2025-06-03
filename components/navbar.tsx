"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/dropdown";
import {
    ChevronDownIcon,
    FaceIcon,
    GlobeIcon,
    OpenInNewWindowIcon,
    PersonIcon,
    TimerIcon,
} from "@radix-ui/react-icons";

export default function NavBar() {
    const menuItems = [
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
    ];

    return (
        <Navbar isBlurred maxWidth="xl">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <a
                        href="/"
                        className="font-light tracking-tighter text-inherit text-lg"
                    >
                        SyncLab
                    </a>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarBrand>
                    <a
                        href="/"
                        className="font-light tracking-tighter text-2xl flex gap-3 justify-center items-center"
                    >
                        SyncLab
                    </a>
                </NavbarBrand>
                <NavbarItem>
                    <Button as={Link} href="#pricing" variant="light" size="sm">
                        Pricing
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#testimonials"
                        variant="light"
                        size="sm"
                    >
                        Testimonials
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                endContent={<ChevronDownIcon />}
                                variant="light"
                                size="sm"
                            >
                                Dropdown
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="ACME features"
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            <DropdownItem
                                key="autoscaling"
                                description="ACME scales apps to meet user demand, automagically, based on load."
                                startContent={<OpenInNewWindowIcon />}
                            >
                                Autoscaling
                            </DropdownItem>
                            <DropdownItem
                                key="usage_metrics"
                                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                startContent={<PersonIcon />}
                            >
                                Usage Metrics
                            </DropdownItem>
                            <DropdownItem
                                key="production_ready"
                                description="ACME runs on ACME, join us and others serving requests at web scale."
                                startContent={<GlobeIcon />}
                            >
                                Production Ready
                            </DropdownItem>
                            <DropdownItem
                                key="99_uptime"
                                description="Applications stay on the grid with high availability and high uptime guarantees."
                                startContent={<TimerIcon />}
                            >
                                +99% Uptime
                            </DropdownItem>
                            <DropdownItem
                                key="supreme_support"
                                description="Overcome any challenge with a supporting team ready to respond."
                                startContent={<FaceIcon />}
                            >
                                +Supreme Support
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            href={item.href}
                            size="lg"
                            color="foreground"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
