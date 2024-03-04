"use client";

import { useState } from "react";
import Terminal from "../terminal";
import Projects from "../projects";
import About from "../about";
import Footer from "../footer";
import Menu from "../menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LayoutWrapper = ({ avatar, user }: { avatar: React.JSX.Element; user: React.JSX.Element }) => {
    const [terminalData, setTerminalData] = useState<string[]>([]);

    const log = (data: string) => {
        setTerminalData((prev) => [...prev, data]);
    };
    return (
        <>
            <div className="text-nosferatu container mx-auto">
                <div className="flex flex-wrap md:grid md:grid-flow-col md:gap-24 mt-5 text-white ">
                    <div className="col-start-1 w-72 md:block hidden">{avatar}</div>
                    <div className="col-start-2 border-solid border-2 border-nosferatu-800 rounded-md p-4 max-w-[1000px]">
                        <Tabs defaultValue="home">
                            <TabsList className="w-[100%]">
                                <TabsTrigger value="home">Inicio</TabsTrigger>
                                <TabsTrigger value="projects">Projetos</TabsTrigger>
                            </TabsList>
                            <TabsContent value="home">
                                {user}
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <About />
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                Linguagens e Ferramentas:
                                <div>
                                    <Carousel
                                        className="w-[100%]"
                                        plugins={[
                                            Autoplay({
                                                delay: 2000,
                                                stopOnHover: true,
                                                waitForTransition: true,
                                                //disableOnInteraction: true,
                                            }),
                                        ]}
                                    >
                                        <CarouselContent>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="java"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="csharp"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="html"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="css"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="javascript"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="react"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="styled-components"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="java-spring"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="mysql"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="mongdb"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="Heroku"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="spring-boot"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="nextjs"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="postman"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="vscode"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
                                                />
                                            </CarouselItem>
                                            <CarouselItem className="basis-auto">
                                                <Image
                                                    alt="eclipse"
                                                    sizes="100vw"
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "auto", height: "30px" }}
                                                    src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white"
                                                />
                                            </CarouselItem>
                                        </CarouselContent>
                                    </Carousel>
                                    <a href="https://github.com/ghpm99">
                                        <Image
                                            alt="github"
                                            width={300}
                                            height={285}
                                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ghpm99&theme=dracula&hide_langs_below=1"
                                        />
                                    </a>
                                </div>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                {/* <Terminal data={terminalData} /> */}
                            </TabsContent>
                            <TabsContent value="projects">
                                <Projects log={log} />
                            </TabsContent>
                        </Tabs>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutWrapper;
