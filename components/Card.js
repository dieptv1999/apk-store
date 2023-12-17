'use client'

export default function Card({children, className, key, ...props}) {
  return <div className={`hover:bg-[#f3f3f3] active:bg-[#f8f8f8] p-3 rounded-lg cursor-pointer ${className}`} key={key} {...props}>
    {children}
  </div>
}