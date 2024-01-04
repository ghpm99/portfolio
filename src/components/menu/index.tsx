'use client'

import {
	faBook,
	faBookOpenReader,
	faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

const Menu = () => {
	return (
		<div className='w-full bg-gray-950 px-2 '>
			<nav className='flex'>
				<Link className='flex items-center px-2 py-2 text-sm' href={'/'}>
					<FontAwesomeIcon className='w-[16px] mr-1' icon={faBookOpenReader} />
					Inicio
				</Link>
				<Link className='flex items-center px-2 py-2 text-sm' href={'/#projects'}>
					<FontAwesomeIcon className='w-[16px] mr-1' icon={faBook} />
					Projetos
				</Link>
				<Link className='flex items-center px-2 py-2 text-sm' href={'/#about'}>
					<FontAwesomeIcon className='w-[16px] mr-1' icon={faCircleInfo} />
					Sobre
				</Link>
			</nav>
		</div>
	);
};

export default Menu;
