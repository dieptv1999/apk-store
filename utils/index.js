'use client'
import {formatDistance} from "date-fns/fp";
import {vi, enUS} from 'date-fns/locale'
import {format} from "date-fns";

export const dateDistance = (fromDate) => {
  return formatDistance(fromDate, new Date(), {addSuffix: true, locale: vi})
}

export const formatDate = (d, locale = 'vi') => {
  if (!d) return ''
  let l = vi
  if (locale === 'en') l = enUS
  return format(new Date(d), 'dd MMMM yyyy', { locale: l })
}


export const transformContent = (check = false, content, showMore = () => {}) => {
  if (!check) return content
  if (!content) return ''
  if (content?.length > 180) return content.substring(0, 400) + '...'
  return content;
}

export default {
  dataDistance: dateDistance,
  formatDate,
}