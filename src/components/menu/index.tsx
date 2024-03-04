"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { faBook, faBookOpenReader, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Menu = () => {
    const { setTheme } = useTheme();
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link className="flex items-center px-2 py-2 text-sm" href={"/"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FontAwesomeIcon className="w-[16px] mr-1" icon={faBookOpenReader} />
                            Inicio
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className="flex items-center px-2 py-2 text-sm" href={"/#projects"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FontAwesomeIcon className="w-[16px] mr-1" icon={faBook} />
                            Projetos
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className="flex items-center px-2 py-2 text-sm" href={"/#about"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FontAwesomeIcon className="w-[16px] mr-1" icon={faCircleInfo} />
                            Sobre
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </NavigationMenu>
    );
};

export default Menu;
