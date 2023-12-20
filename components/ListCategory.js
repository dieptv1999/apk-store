export default function ListCategory() {
  const listCategories = [
    'Ngoại tuyến',
    'Giáo dục'
  ]
  return (<div className={'flex flex-wrap gap-2'}>
    {
      listCategories.map(e => (
        <div className={'border border-primary rounded px-3 pt-2 pb-1 cursor-pointer'} key={e}>
          {e}
        </div>
      ))
    }
  </div>)
}