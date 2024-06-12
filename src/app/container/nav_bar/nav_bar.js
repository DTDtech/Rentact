'use client'

import { useRouter } from "next/navigation";

const NavBar = () => {

    const router = useRouter();

    return (
        <div className="navbar h-full p-2 lg:p-4 rounded-lg bg-base-300 shadow-md flex-row lg:flex-col justify-center lg:justify-start gap-5">
            <button type="button" className="btn w-32 lg:h-20 lg:w-full rounded-2xl lg:rounded-md bg-base-100" onClick={() => router.push('/')}>Đơn thuê</button>
            <button type="button" className="btn w-32 lg:h-20 lg:w-full rounded-2xl lg:rounded-md bg-base-100" onClick={() => router.push('/inventory')}>Kho thiết bị</button>
        </div>
    )
}

export default NavBar;