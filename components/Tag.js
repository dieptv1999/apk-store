export default function Tag({children, selected = true, ...props}) {
  return <div
    className={`text-sm font-semibold ${selected ? 'hover:bg-[#dde9e6] text-[#056449] bg-[#e6f3ef] border-[#e6f3ef]' : 'hover:bg-[#f5f5f5] text-gray2 border-[rgb(218,220,224)]'} rounded-full border border-s ` +
      'px-[16px] pt-[4px] pb-[6px] cursor-pointer'} {...props}>
    {children}
  </div>
}