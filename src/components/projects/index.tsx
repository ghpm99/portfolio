'use client';

import { fetchProjectsData } from '@/app/lib/data'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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

const Projects = ({log}: {log: (data: string) => void}) => {
	const [sortProjects, setSortProjects] = useState('pushed');
	const [projects, setProjects] = useState<IProject[]>([]);

	const loadProjectsData = async () => {
		const projects = await fetchProjectsData(sortProjects);
		setProjects(projects);
		log('Projetos carregados!')
	};

	useEffect(() => {
		log('Carregando projetos...')
		loadProjectsData();
	}, []);

	const formatData = (data: string) => {
		const date = new Date(data);
		return date.toLocaleDateString();
	}

	return (
		<div>
			<div id='projects'>Projetos</div>
			<div className='flex flex-wrap justify-center'>
				{projects.map((project) => (
					<div
						key={project.id}
						className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4 w-[300px] h-[600px]'
					>
						<Link
							href={project.html_url}
							target='_blank'
							className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dracula-100'
						>
							{project.name}
						</Link>
						<div className='font-normal text-gray-700 dark:text-gray-400'>
							{project.description}
						</div>
						{project.homepage && (
							<div>
								Url:{' '}
								<Link href={project.homepage} target='_blank'>
									{project.homepage}
								</Link>
							</div>
						)}
						<div className='mt-4'>
							{project.topics.map((topic) => (
								<span
									key={topic}
									className='inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200 mb-2'
								>
									{topic}
								</span>
							))}
						</div>
						<div>
							<div>
							{project.language}
							</div>
							<span>Ultima atualização: {formatData(project.pushed_at)}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
