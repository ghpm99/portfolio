'use client';

import Menu from '@/components/menu';
import { useParams } from 'next/navigation';

const DetailWrapper = ({
	avatar,
	user,
}: {
	avatar: React.JSX.Element;
	user: React.JSX.Element;
}) => {
	const { id } = useParams();

	return (
		<>
			<header className='flex flex-col items-center justify-center text-center'>
				<Menu />
			</header>
			<div className='text-nosferatu container mx-auto'>
				<div className='grid grid-flow-col gap-24 mt-5 text-white'>
					<div className='col-start-1 w-72'>{avatar}</div>
					<div className='col-start-2 border-solid border-2 border-nosferatu-800 rounded-md p-4'>
						{user}
						<hr className='h-px my-8 bg-darker border-0' />
						{id}
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailWrapper;
