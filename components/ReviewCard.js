'use client'

import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/utils/constant";
import Image from "next/image";
import StarRatingComponent from "@/components/StarRatingComponent";
import {Icon} from "@iconify/react";
import utils, {formatDate} from "@/utils";

export default function ReviewCard({
                                     appId,
                                     appVersion,
                                     at,
                                     content,
                                     id,
                                     repliedAt,
                                     replyContent,
                                     reviewCreatedVersion,
                                     reviewId,
                                     score,
                                     thumbsUpCount,
                                     userImage,
                                     userName,
                                   }) {

  return (
    <div className={'flex flex-col space-y-4'} key={reviewId}>
      <div className={'inline-flex space-x-3 items-center'}>
        <div className="avatar online">
          <div className="rounded-full h-[32px] w-[32px]">
            {userImage ?
              <Image width={32} height={32} alt={'avatar review'} src={userImage}/>
              : null}
          </div>
        </div>
        <span className={'font-medium'}>{userName}</span>
      </div>

      <div className={'inline-flex space-x-3 items-center'}>
        <StarRatingComponent
          name={"rateReview" + reviewId}
          starCount={5}
          value={score ? score : 0}
          onStarClick={(nextValue, prevValue, name) => {
          }}
          isHalf={true}
          renderStarIconHalf={(nextValue, prevValue, name) => <Icon icon="solar:star-bold-duotone"
                                                                    color="#ffb400"/>}
          renderStarIcon={(nextValue, prevValue, name) => <Icon icon="solar:star-bold"/>}
        />
        <span className={'text-sm text-gray2'}>{utils.formatDate(at)}</span>
      </div>
      <div>{content}</div>
      <div className={'text-sm text-gray2'}>{thumbsUpCount} người thấy bài đánh giá này hữu ích</div>
    </div>
  )
}