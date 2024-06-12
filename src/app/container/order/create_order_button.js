'use client'

import { useRouter } from "next/navigation";

const CreateOrderButton = () => {

    const router = useRouter();

    return (
        <div className="flex justify-between mb-4">
            <button className="btn rounded-full bg-accent" onClick={() => router.push('/create_order')}>
                <span className="flex items-center text-neutral leading-6 gap-1">
                    Tạo đơn thuê mới
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default CreateOrderButton;