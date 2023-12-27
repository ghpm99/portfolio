'use client';


const Terminal = ({data} : {data: string[]}) => {

	return (
		<div className='m-8'>
			<div>
				<div className='text-white'>portfolio@ghpm99:~</div>
			</div>
			<div className='bg-[#303030] text-[#EFEFEF] p-8 rounded-md'>
				{data && data.map((log: string, index: number) => (
					<div key={index}>{log}</div>
				))}
			</div>
		</div>
	);
};

export default Terminal;
