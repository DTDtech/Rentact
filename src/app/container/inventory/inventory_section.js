'use client'

const InventorySection = ({ items }) => {

  return (
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
  )
}

export default InventorySection;