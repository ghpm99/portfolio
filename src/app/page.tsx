import About from '@/components/about'
import Footer from '@/components/footer'
import Menu from '@/components/menu'
import Projects from '@/components/projects'
import Image from 'next/image';

export default function Home() {
	return (
		<main className='bg-darker'>
			<header className='flex flex-col items-center justify-center text-center'>
                <Menu />
			</header>
			<div className='text-nosferatu'>
				<Projects />
				<About />
			</div>
			<Footer />
		</main>
	);
}
