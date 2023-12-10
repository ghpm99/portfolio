import Menu from '@/components/menu'
import Image from 'next/image';

export default function Home() {
	return (
		<main className='bg-darker'>
			<header className='flex flex-col items-center justify-center min-h-screen text-center'>
            <Menu />
				<div>
					Logo
				</div>
			</header>
			<div className='text-nosferatu'>Guilherme</div>
		</main>
	);
}
