'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMedium from "@/components/CardMedium";
import Slider from "react-slick";

export default function CardHorizontal({className, title}) {
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
  const listApk = [
    {
      image: 'https://play-lh.googleusercontent.com/dwZFBhMpEiKmSSRWAXBi9lr7bBfiXtn_8VYq845pIba6IoKWByGIybcB1ASujAquK9s=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/RUob8tGSyPX0fZ7-H9Mee8m38RxChBx1uc4wEVNR67nUuyVvRG7I_Hwv5kT90Ts7I10=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/dwZFBhMpEiKmSSRWAXBi9lr7bBfiXtn_8VYq845pIba6IoKWByGIybcB1ASujAquK9s=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/dwZFBhMpEiKmSSRWAXBi9lr7bBfiXtn_8VYq845pIba6IoKWByGIybcB1ASujAquK9s=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/RUob8tGSyPX0fZ7-H9Mee8m38RxChBx1uc4wEVNR67nUuyVvRG7I_Hwv5kT90Ts7I10=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/dwZFBhMpEiKmSSRWAXBi9lr7bBfiXtn_8VYq845pIba6IoKWByGIybcB1ASujAquK9s=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/dwZFBhMpEiKmSSRWAXBi9lr7bBfiXtn_8VYq845pIba6IoKWByGIybcB1ASujAquK9s=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/RUob8tGSyPX0fZ7-H9Mee8m38RxChBx1uc4wEVNR67nUuyVvRG7I_Hwv5kT90Ts7I10=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/dwZFBhMpEiKmSSRWAXBi9lr7bBfiXtn_8VYq845pIba6IoKWByGIybcB1ASujAquK9s=s256-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
  ]

  return <div className={`flex flex-col space-y-4 w-full ${className}`}>
    <div className={'text-black font-bold tracking-wide text-2xl'}>{title}</div>
    <Slider {...settings}>
      {listApk.map((apk, index) => (
        <CardMedium {...apk}/>
      ))}
    </Slider>
  </div>
}