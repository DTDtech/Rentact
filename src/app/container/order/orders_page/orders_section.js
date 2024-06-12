'use client'

import { useRouter } from "next/navigation";
import UpdateOrderStatus from "@/app/actions/orders/updateOrderStatus";

const OrdersSection = ({ orders }) => {

    const router = useRouter();

    return (
        <>
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

            <div className="overflow-x-auto">
                <table className="table bg-secondary text-neutral">
                    <thead>
                        <tr className="text-base font-medium text-white">
                            <th className="text-center">Thiết bị thuê</th>
                            <th className="text-center">Ngày thuê</th>
                            <th className="text-center">Ngày trả</th>
                            <th className="text-center">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td className="flex flex-wrap gap-x-3 gap-y-1">
                                    {order.itemsForRent.map((itemsInfo, index) => (
                                        <span key={index} className="p-2 rounded-xl bg-info">
                                            {itemsInfo.name} x {itemsInfo.quantity}
                                        </span>
                                    ))}
                                </td>
                                <td className="text-center">{order.rent_date.toLocaleDateString("es-US")}</td>
                                <td className="text-center">{order.return_date.toLocaleDateString("es-US")}</td>
                                <td className="text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <button className={
                                            `${order.status === "completed" ?
                                                'w-full rounded-md p-2 bg-slate-400 hover:bg-slate-500 grow' :
                                                'w-full rounded-md p-2 bg-red-700 hover:bg-red-800 text-white grow'}`
                                        }
                                            onClick={() => UpdateOrderStatus(order._id, order.status)}
                                        >
                                            {order.status === "completed" ? (
                                                <span className="flex justify-center items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                    Đã hoàn thành
                                                </span>
                                            ) : (
                                                <span className="flex justify-center items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                    Đánh dấu đã hoàn thành
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default OrdersSection;

