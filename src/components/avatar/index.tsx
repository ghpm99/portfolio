"use server";

import { fetchUserData } from "@/app/lib/data";
import Image from "next/image";

const Avatar = async () => {
    const userData = await fetchUserData();

    return (
        <div className="grid justify-items-center w-72">
            <Image className="rounded-full w-full" src={userData.avatar} alt={userData.name} width={200} height={200} />
            <div className="text-[24px]">{userData.name}</div>
        </div>
    );
};

export default Avatar;
