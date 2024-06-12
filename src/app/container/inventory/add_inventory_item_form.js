'use client'

import AddInventoryItem from "@/app/actions/inventory/addInventoryItem";
import { useRouter } from "next/navigation";

const AddInventoryItemForm = () => {

    const router = useRouter();

    return (
        <form className="w-full h-full rounded-md bg-base-100 p-3 space-y-4" action={AddInventoryItem}>
            <div className="space-y-2">
                <label htmlFor="name" className="text-base-content font-medium"> Tên thiết bị: </label>
                <input type="text" id="name" name="name" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>
            <div className="space-y-2">
                <label htmlFor="price" className="text-base-content font-medium"> Giá thuê: </label>
                <input type="number" id="price" name="price" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>
            <div className="space-y-2">
                <label htmlFor="quantity" className="text-base-content font-medium"> Số lượng: </label>
                <input type="number" id="quantity" name="quantity" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>
            <div className="flex flex-row justify-between items-center">
                <button type="button" className="btn w-24 bg-gray-200" onClick={() => router.back()}>Hủy</button>
                <button type="submit" className="btn w-32 bg-success">Xác nhận</button>
            </div>
        </form>
    )
}

export default AddInventoryItemForm;