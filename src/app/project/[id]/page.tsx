'use server';

import Avatar from '@/components/avatar'
import DetailWrapper from '@/components/detailWrapper'
import User from '@/components/user'

const ProjectDetail = () => {
    return (
		<main>
			<DetailWrapper avatar={<Avatar />} user={<User />}/>
		</main>
	);
};

export default ProjectDetail;
