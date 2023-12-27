'use server';

import Avatar from '@/components/avatar'
import LayoutWrapper from '@/components/layoutWrapper'
import User from '@/components/user'

const Home = () => {
	return (
		<main>
			<LayoutWrapper avatar={<Avatar />} user={<User />}/>
		</main>
	);
};

export default Home;

