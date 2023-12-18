'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMedium from "@/components/CardMedium";
import Slider from "react-slick";

export default function CardHorizontal({className, title, listApk}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return <div className={`flex flex-col space-y-4 w-full ${className}`}>
    <div className={'text-black font-bold tracking-wide text-2xl'}>{title}</div>
    <Slider {...settings}>
      {listApk.map((apk) => (
        <CardMedium {...apk} className={'h-full'}/>
      ))}
    </Slider>
  </div>
}