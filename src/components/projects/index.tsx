"use client";

import { fetchProjectsData } from "@/app/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";

import { faFileLines, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface IProject {
    id: number;
    name: string;
    description: string;
    homepage: string;
    html_url: string;
    topics: string[];
    language: string;
    pushed_at: string;
}

const Projects = ({ log }: { log: (data: string) => void }) => {
    const [sortProjects, setSortProjects] = useState("pushed");
    const [projects, setProjects] = useState<IProject[]>([]);

    const loadProjectsData = async () => {
        const projects = await fetchProjectsData(sortProjects);
        setProjects(projects);
        log("Projetos carregados!");
    };

    useEffect(() => {
        log("Carregando projetos...");
        loadProjectsData();
    }, []);

    const formatData = (data: string) => {
        const date = new Date(data);
        return date.toLocaleDateString();
    };

    return (
        <div className="flex flex-wrap justify-center gap-8 ">
            {projects.map((project) => (
                <Card key={project.id} className="w-[40%] min-w-[320px]">
                    <CardHeader>
                        <CardTitle>
                            <Link
                                href={project.html_url}
                                target="_blank"
                                className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-100"
                            >
                                {project.name}
                                <FontAwesomeIcon className="ml-2" icon={faUpRightFromSquare} />
                            </Link>
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="w-[100%]">
                            <Image
                                src={
                                    "https://cdn.seeklearning.com.au/media/images/career-guide/module/developer-module.jpg"
                                }
                                alt="image"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="mt-4 h-[55px]">
                            <div className="overflow-auto flex">
                                {project.topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200 mb-2  whitespace-nowrap"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="w-[100%]">
                            <div className="flex flex-row-reverse justify-between mb-2 items-center">
                                <Link href={`/project/${project.name}`}>
                                    Detalhes
                                    <FontAwesomeIcon className="ml-2" icon={faFileLines} />
                                </Link>
                                {project.language && (
                                    <div className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-purple-200 rounded-full dark:bg-purple-700 dark:text-gray-200">
                                        {project.language}
                                    </div>
                                )}
                            </div>
                            <div className="font-normal text-xs text-gray-700 dark:text-gray-400">
                                <div>
                                    Ultima atualização: <span>{formatData(project.pushed_at)}</span>
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default Projects;
