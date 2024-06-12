'use client'

import { useRouter } from "next/navigation";

const InventorySection = ({ items }) => {

  const router = useRouter();

  return (
    <>
      <div className="flex justify-between mb-4">
        <button className="btn rounded-full bg-accent" onClick={() => router.push('/add_inventory_item')}>
          <span className="flex items-center text-neutral leading-6 gap-1">
            Thêm thiết bị
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
              <th>Tên thiết bị</th>
              <th>Giá thuê</th>
              <th>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price.toLocaleString()}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default InventorySection;