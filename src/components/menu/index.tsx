'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
	faBook,
	faBookOpenReader,
	faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Menu = () => {
	const { setTheme } = useTheme();
	return (
		<div className='w-full bg-gray-950 px-2 '>
			<nav className='flex'>
				<Link className='flex items-center px-2 py-2 text-sm' href={'/'}>
					<FontAwesomeIcon className='w-[16px] mr-1' icon={faBookOpenReader} />
					Inicio
				</Link>
				<Link
					className='flex items-center px-2 py-2 text-sm'
					href={'/#projects'}
				>
					<FontAwesomeIcon className='w-[16px] mr-1' icon={faBook} />
					Projetos
				</Link>
				<Link className='flex items-center px-2 py-2 text-sm' href={'/#about'}>
					<FontAwesomeIcon className='w-[16px] mr-1' icon={faCircleInfo} />
					Sobre
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' size='icon'>
							<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
							<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
							<span className='sr-only'>Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuItem onClick={() => setTheme('light')}>
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('dark')}>
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('system')}>
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>
		</div>
	);
};

export default Menu;
