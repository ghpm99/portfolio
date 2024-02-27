'use server';

import Avatar from '@/components/avatar';
import LayoutWrapper from '@/components/layoutWrapper';
import User from '@/components/user';

const Home = () => {
	return (
		<div className='bg-zinc-950 dark:bg-white'>
			<main>
				<LayoutWrapper avatar={<Avatar />} user={<User />} />
			</main>
		</div>
	);
};

export default Home;
