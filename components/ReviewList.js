'use client'

import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/utils/constant";
import ReviewCard from "@/components/ReviewCard";

export default function ReviewList({appId}) {
  const [reviews, setReviews] = useState([])
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async (p) => {
    if (!appId || loading) return;
    setLoading(true);
    const res = await axios.post(BASE_URL + `/apk/reviews?appId=${appId}&page=${p}&size=${10}`)
    setLoading(false)
    if (p === 0)
      setReviews(res.data)
    else if (p > 0) {
      setReviews([...reviews, ...res.data])
    }
  }

  useEffect(() => {
    fetchData(0)
  }, [appId])

  return (
    <div className={'flex flex-col space-y-8'}>
      {reviews.map(e => (
        <ReviewCard {...e} key={e.reviewId}/>
      ))}
      <button
        className="btn btn-success text-white font-bold w-fit"
        onClick={() => {
          fetchData(page + 1)
          setPage(page + 1)
        }}
      >
        Hiển thị nhiều hơn
      </button>
    </div>
  )
}