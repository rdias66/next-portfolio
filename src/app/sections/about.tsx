import Image from 'next/image'
import ProfilePic from '@/app/assets/profile-pic.jpeg'
import { Separator } from '@/components/ui/separator'

export function About({ LanguageTextData }: any) {
  return (
    <section id="About" className="mt-60">
      <div className="mx-auto px-4 pb-24 mt-40 w-3/6 flex items-center space-x-3">
        <Image src={ProfilePic} alt="Profile Photo" className="size-2/5 p-5 " />
        <Separator orientation="vertical" className=" h-96" />
        <p className="text-white p-5 text-lg ">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum
        </p>
      </div>
    </section>
  )
}
