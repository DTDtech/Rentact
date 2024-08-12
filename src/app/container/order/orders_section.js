'use client'

import UpdateOrderStatus from "@/app/actions/orders/updateOrderStatus";

const OrdersSection = ({ orders }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table bg-secondary text-neutral">
                <thead>
                    <tr className="text-base font-medium text-white">
                        <th className="text-center">Tên</th>
                        <th className="text-center">Thiết bị thuê</th>
                        <th className="text-center">Ngày thuê</th>
                        <th className="text-center">Ngày trả</th>
                        <th className="text-center">Đã thanh toán</th>
                        <th className="text-center">Còn nợ</th>
                        <th className="text-center">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td className="text-center">{order.name}</td>
                            <td className="flex flex-wrap gap-x-3 gap-y-1">
                                {order.itemsForRent.map((itemsInfo, index) => (
                                    <span key={index} className="p-2 rounded-xl bg-info">
                                        {itemsInfo.name} x {itemsInfo.quantity}
                                    </span>
                                ))}
                            </td>
                            <td className="text-center">{order.rent_date.toLocaleDateString("es-US")}</td>
                            <td className="text-center">{order.return_date.toLocaleDateString("es-US")}</td>
                            <td className="text-center">{order.paid.toLocaleString()}</td>
                            <td className="text-center">{order.debt.toLocaleString()}</td>
                            <td className="text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <button className={
                                        `${order.status === "completed" ?
                                            'w-12 rounded-md p-2 bg-lime-600 hover:bg-slate-500' :
                                            'w-12 rounded-md p-2 bg-gray-500 hover:bg-lime-800 text-white'}`
                                    }
                                        onClick={() => UpdateOrderStatus(order._id, order.status)}
                                    >
                                        {order.status === "completed" ? (
                                            <span className="flex justify-center items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </span>
                                        ) : (
                                            <span className="flex justify-center items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
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
    );
}

export default OrdersSection;

