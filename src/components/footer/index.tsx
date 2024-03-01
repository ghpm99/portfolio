import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<div className='flex items-center justify-center'>
				Caso tenha interesse em me conhecer melhor, acesse minhas redes
				<Link href={'https://github.com/ghpm99'}>
					<FontAwesomeIcon
						className='w-[27px] h-[27px] ml-1.5'
						icon={faGithub}
					/>
				</Link>
				<Link
					href={'https://www.linkedin.com/in/guilherme-henrique-b75176a2/'}
				>
					<FontAwesomeIcon
						className='w-[27px] h-[27px] ml-1.5'
						icon={faLinkedin}
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
