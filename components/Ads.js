'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";
import axios from "axios";
import {BASE_URL} from "@/utils/constant";

const xOffset = 100;
const variants = {
  enter: direction => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: {delay: 0.5}
  },
  exit: direction => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0
  })
};

export default function Ads({ads, delay = 100}) {
  const router = useRouter()
  const [count, setCount] = useState(0)
  const [activate, setActivate] = useState(ads[0])
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    let interval;
    setTimeout(() => {
      interval = setInterval(() => {
        setCount(c => {
          if (c >= ads.length - 1) {
            return 0;
          } else return c + 1
        })
      }, 4000)
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, []);

  useEffect(() => {
    if (ads[count])
      setActivate(ads[count])
  }, [count])

  return (
    <div>
      <div className="carousel w-full">
        <AnimatePresence
          initial={false}
          custom={direction}
        >
          <motion.div
            key={activate.id}
            variants={variants}
            initial="enter"
            animate="active"
            exit="exit"
            drag="x"
            id={activate.id}
            className="carousel-item w-full"
            custom={direction}
          >
            <Link href={activate.link} target={'_blank'} className={'w-full'} onClick={() => {
              console.log('click')
              axios.get(BASE_URL + '/apk/click-ads?id=' + activate.id)
            }}>
              <img src={activate.cover}
                   className="w-full object-cover rounded-lg h-[160px]"
                   alt={'carousel ads'}/>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}