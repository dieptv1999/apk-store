import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {notFound} from "next/navigation";

export default async function AboutUs() {

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Our Story</div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Our Mission</div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Important Notice</div>
      </div>
    </main>
  )
}
