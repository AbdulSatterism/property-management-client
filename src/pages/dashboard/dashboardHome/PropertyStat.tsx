

export const PropertyStat = () => {
  return (
    <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
      <div className="stats shadow  hover:bg-gradient-to-tl hover:from-gray-900 hover:to-transparent ">
        <div className="stat">
          <div className="stat-title uppercase">Total Properties</div>
          <div className="stat-value text-indigo-600">1000+</div>
          <div className="stat-desc">30% Apartment, 30 House, 40 Land</div>
        </div>
      </div>
      <div className="stats shadow  hover:bg-gradient-to-tl hover:from-gray-900 hover:to-transparent">
        <div className="stat">
          <div className="stat-title ">Total Property Price</div>
          <div className="stat-value text-indigo-600">$480000+</div>
          <div className="stat-desc">We provide best services</div>
        </div>
      </div>
      <div className="stats shadow  hover:bg-gradient-to-tl hover:from-gray-900 hover:to-transparent">
        <div className="stat">
          <div className="stat-title">Total Clients</div>
          <div className="stat-value text-indigo-600">100+</div>
          <div className="stat-desc">Our clients satisfy about our services</div>
        </div>
      </div>
    </div>
    </div>
  )
}
