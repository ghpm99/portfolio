'use server';

import About from '@/components/about';
import Footer from '@/components/footer';
import Menu from '@/components/menu';
import Projects from '@/components/projects';
import Terminal from '@/components/terminal';
import User from '@/components/user';
import Image from 'next/image';
import { fetchUserData } from './lib/data';
import Avatar from '@/components/avatar';

const Home = async () => {
	const userData = await fetchUserData();

	return (
		<main className='bg-darker'>
			<header className='flex flex-col items-center justify-center text-center'>
				<Menu />
			</header>
			<div className='text-nosferatu container mx-auto'>
				<div className='grid grid-flow-col gap-24 mt-5 text-dracula-100'>
					<div className='col-start-1 w-72'>
						<Avatar url={userData.avatar_url} name={userData.name} />
					</div>
					<div className='col-start-2 border-solid border-2 border-nosferatu-800 rounded-md p-4'>
						<User name={userData.name} />
						<hr className='h-px my-8 bg-nosferatu-800 border-0' />
						<Terminal />
						<hr className='h-px my-8 bg-nosferatu-800 border-0' />
						<Projects />
						<About />
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
};

export default Home;
