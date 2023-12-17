'use client'

export default function Card({children, className}) {
  return <div className={`hover:bg-[#f3f3f3] p-3 rounded-lg ${className}`}>
    {children}
  </div>
}