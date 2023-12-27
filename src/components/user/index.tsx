'use server'

import { fetchUserData } from '@/app/lib/data'

const User = async() => {

    const userData = await fetchUserData();

    return (
        <div>
            {userData.name}
        </div>
    )
}

export default User