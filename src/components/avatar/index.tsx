'use client'

import Image from 'next/image'

const Avatar = ({url, name}: {url: string, name: string}) => {

    return (
        <div className='grid justify-items-center w-72'>
            <Image className='rounded-full w-full' src={url} alt={name} width={200} height={200} />
            <div className='text-[24px]'>
                {name}
            </div>
        </div>
    )
}

export default Avatar