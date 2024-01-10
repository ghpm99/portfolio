'use server';

import Avatar from '@/components/avatar'
import DetailWrapper from '@/components/detailWrapper'
import User from '@/components/user'

const ProjectDetail = ({ params }: { params: { name: string } }) => {
    return (
		<main>
			<DetailWrapper avatar={<Avatar />} user={<User />} name={params.name}/>
		</main>
	);
};

export default ProjectDetail;
