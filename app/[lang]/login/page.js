'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { signIn } from "next-auth/react"
import {useFormik} from "formik";
import {useState} from "react";
import {useSearchParams} from "next/navigation";

export default function Login() {
  const [step, setStep] = useState(1)
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
    },
    onSubmit: async values => {
      try {

      } catch (e) {
        alert("Đăng ký thất bại")
      }
    },
  })

  return (
    <div className={'bg-white w-[100vw] h-[100vh] overflow-hidden'}>
      <form onSubmit={formik.handleSubmit} className={'flex items-center justify-center w-full'}>
        <div className='hero min-h-screen max-w-screen-md overflow-hidden'>
          <AnimatePresence initial={false}>
            {step === 1 && <motion.div
              key={'login-p1'}
              initial={{ marginTop: '-100%', opacity: 0 }}
              animate={{ marginTop: 0, opacity: 1 }}
              exit={{ marginTop: '-100%', opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                ease: 'linear',
                duration: 10,
              }}
              className='hero-content px-2 flex flex-col items-center'
            >
              <img src={'/apk-store-logo.png'} alt={'logo'} className={'w-[200px] object-contain'}/>
              <div className='text-center lg:text-left flex flex-col items-center'>
                <div className={'text-5xl font-semibold'}>Apk Store</div>
                {/*<p className='py-6 text-center'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda*/}
                {/*  excepturi*/}
                {/*  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>*/}
              </div>
              <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <button type={'button'} className={'btn btn-bordered'} onClick={(e) => {
                  e.stopPropagation()
                  signIn("google", { callbackUrl: 'http://localhost:3003' }).then(() => {})
                }}>
                  Login with Google 🚀
                </button>
              </div>
            </motion.div>}
            {
              step === 2 && <motion.div
                key={'login-p2'}
                initial={{ marginBottom: '-100%', opacity: 0 }}
                animate={{ marginBottom: 0, opacity: 1 }}
                exit={{ marginBottom: '-100%', opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  ease: 'linear',
                  duration: 10,
                }}
                className={'w-full px-2 flex flex-col gap-3'}
              >
                <div
                  onClick={() => {
                    window.location.href = '/'
                  }}
                  className={'w-full inline-flex items-center space-x-3 cursor-pointer font-semibold hover:text-blue-500 active:text-blue-700'}>
                  <Icon icon='solar:home-bold-duotone' color='#2b3' />
                  <span>Go to home</span>
                </div>
                <div className={'w-full'}>
                  <label className='label'>
                    <span className='label-text'>What is your name?</span>
                  </label>
                  <input
                    className={'input input-bordered w-full'}
                    placeholder={'Full name'}
                    name={'fullName'}
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className={'w-full'}>
                  <label className='label'>
                    <span className='label-text'>Please input username?</span>
                  </label>
                  <input
                    className={'input input-bordered w-full'}
                    placeholder={'Username'}
                    name={'username'}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </div>
                <button className={'btn btn-bordered'} type={'submit'}>Submit</button>
              </motion.div>
            }
            {step === 3 &&
              <motion.div
                key={'login-p3'}
                initial={{ marginBottom: '-100%', opacity: 0 }}
                animate={{ marginBottom: 0, opacity: 1 }}
                exit={{ marginBottom: '-100%', opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  ease: 'linear',
                  duration: 10,
                }}
                className={'w-full px-2 flex flex-col items-center'}
              >
                <Icon icon='octicon:check-circle-16' color='#2b3' fontSize={120} />
                <div className={'text-xl font-semibold mt-8'}>You have successfully submitted your registration</div>
                <button type={'button'} className={'btn btn-primary mt-2'} onClick={() => {
                  window.location.href = '/'
                }}>Go to home
                </button>
              </motion.div>}
          </AnimatePresence>
        </div>
      </form>
    </div>
  )
}