'use client'
import {formatDistance} from "date-fns/fp";
import {vi} from 'date-fns/locale'

export const dateDistance = (fromDate) => {
  return formatDistance(fromDate, new Date(), {addSuffix: true, locale: vi})
}

export const transformContent = (check = false, content, showMore = () => {}) => {
  if (!check) return <span>{content}</span>
  if (!content) return null
  if (content?.length > 180) return <span>{content.substring(0, 170) + '...'} <span className={'cursor-pointer underline text-blue-500 hover:text-blute-700'} onClick={showMore}>Xem thêm</span></span>
  return content;
}

export default {
  dataDistance: dateDistance,
}