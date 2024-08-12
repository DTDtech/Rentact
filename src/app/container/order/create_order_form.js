'use client'

import CreateOrder from "@/app/actions/orders/createOrder";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateOrderForm = ({ items }) => {

    const [itemsForRent, setItemsForRent] = useState([{ name: "", quantity: "" }]);

    const addItemField = () => {
        setItemsForRent([...itemsForRent, { name: "", quantity: "" }]);
    }

    const deleteItemField = (index) => {
        let data = [...itemsForRent];
        data.splice(index, 1);
        setItemsForRent(data);
    }

    const handleItemNameChange = (index, e) => {
        let data = [...itemsForRent];
        data[index].name = e.target.value;
        setItemsForRent(data);
    }

    const handleItemQuantityChange = (index, e) => {
        let data = [...itemsForRent];
        data[index].quantity = e.target.value;
        setItemsForRent(data);
    }

    const router = useRouter();

    return (
        <form className="w-full h-full rounded-md bg-base-100 p-3 space-y-4" action={CreateOrder}>

            <div className="space-y-2">
                <label htmlFor="name" className="text-base-content font-medium"> Tên khách hàng: </label>
                <input type="text" id="name" name="name" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>

            <div className="space-y-2 bg-gray-200 rounded-md p-2">
                <label htmlFor="items" className="text-base-content font-medium"> Thiết bị thuê: </label>

                {itemsForRent.map((item, index) => (
                    <span key={index} className="w-full flex items-center space-x-5">
                        <input list="inventory_items" id="items" className="grow h-9 rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none"
                            required placeholder="Tên" autoFocus onChange={e => handleItemNameChange(index, e)} value={item.name}
                        />
                        <input type="number" id="quantity" name="quantity" className="w-28 h-9 rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none"
                            required placeholder="Số lượng" onChange={e => handleItemQuantityChange(index, e)} value={item.quantity}
                        />
                        <button type="button" className="btn btn-sm btn-outline" onClick={() => deleteItemField(index)}> Xóa </button>
                    </span>
                ))}

                <datalist id="inventory_items">
                    {items.map((item, index) => (
                        <option key={index} value={item.name} >{item.name}</option>
                    ))}
                </datalist>

                <textarea name="itemsForRent" id="itemsForRent" className="hidden" value={JSON.stringify(itemsForRent)} />

                <button type="button" className="btn btn-sm btn-active btn-accent w-full" onClick={addItemField}> Thêm thiết bị </button>

            </div>

            <div className="space-y-2">
                <label htmlFor="rent_date" className="text-base-content font-medium"> Ngày thuê: </label>
                <input type="date" id="rent_date" name="rent_date" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>

            <div className="space-y-2">
                <label htmlFor="return_date" className="text-base-content font-medium"> Ngày trả: </label>
                <input type="date" id="return_date" name="return_date" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>

            <div className="space-y-2">
                <label htmlFor="paid" className="text-base-content font-medium"> Đã thanh toán: </label>
                <input type="number" id="paid" name="paid" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>

            <div className="space-y-2">
                <label htmlFor="debt" className="text-base-content font-medium"> Còn nợ: </label>
                <input type="number" id="debt" name="debt" className="w-full rounded-md border-2 border-info py-1 px-2 text-base-content focus:outline-none" required />
            </div>

            <div className="space-y-2">
                <label htmlFor="status" className="text-base-content font-medium"> Trạng thái: </label>
                <select id="status" name="status" className="select select-bordered w-full rounded-md border-2 border-info py-1 px-2 bg-white text-base-content focus:outline-none" required >
                    <option value="incomplete" selected> Chưa hoàn thành </option>
                    <option value="completed"> Đã hoàn thành </option>
                </select>
            </div>

            <div className="flex flex-row justify-between items-center">
                <button type="button" className="btn w-24 bg-gray-200" onClick={() => router.back()}>Hủy</button>
                <button type="submit" className="btn w-32 bg-success">Xác nhận</button>
            </div>

        </form>
    )
}

export default CreateOrderForm;