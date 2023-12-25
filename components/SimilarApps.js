'use client'

import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/utils/constant";
import CardInList from "@/components/CardInList";
import Ads from "@/components/Ads";

export default function SimilarApps({genreId, appId, ads}) {
  const [similarApps, setSimilarApps] = useState([]);

  const fetchSimilarApp = useCallback(async () => {
    if (genreId) {
      const res = await axios.post(BASE_URL + "/apk/similar", {
        genreId: genreId,
        appId: appId,
      })


      if (res.status === 200) {
        setSimilarApps(res.data)
      }
    }
  }, [appId]);

  useEffect(() => {
    fetchSimilarApp()
  }, [appId])

  return (
    <div>
      <span className={'text-black font-bold tracking-wide text-xl mb-2'}>Các ứng dụng tương tự</span>
      <Ads ads={ads} delay={2000}/>
      <div className={'flex flex-col space-y-2'}>
        {similarApps && similarApps.length > 0
          ? similarApps.map((apk, index) => (
            <CardInList {...apk} key={apk.appId} className={'p-2'}/>
          ))
          : <div className={'text-sm text-gray2 px-3'}>Không có ứng dụng tương tự nào</div>}
      </div>
    </div>
  )
}