import { Button } from '@/components/ui/button'
import Lottie from 'lottie-react'
import YogaAnimation from '@/app/assets/YogaDev.json'

import { useState, useEffect } from 'react'

export function Home({ LanguageTextData }: any) {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(100 - Math.random() * 60)
  const timePeriod = 1500

  const tick = () => {
    let i = loopNum % LanguageTextData.toRotate.length
    let fullText = LanguageTextData.toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)
    if (isDeleting) {
      setDelta(timePeriod / LanguageTextData.toRotate[i].length)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(timePeriod)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(timePeriod / LanguageTextData.toRotate[i].length)
    }
  }
  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [text])

  return (
    <section id="Home">
      <div className="container mx-auto px-4 mt-20 w-4/6">
        <div className="flex flex-wrap max-h-96">
          <div className="flex flex-col w-full md:w-1/2 px-2 ">
            <div className="h-32 overflow-hidden">
              <h1 className="text-4xl  max-w-full my-6 text-zinc-100 font-semibold">
                {LanguageTextData.mainText}
                <span className="wrap text-4xl text-zinc-100 ">{text}</span>
              </h1>
            </div>
            <p className=" text-xl  text-zinc-100">
              {LanguageTextData.introduction}
            </p>

            <div className="w-full flex flex-col justify-center my-10 items-center ">
              <Button className="size-fit text-lg border border-zinc-400 hover:bg-zinc-400 hover:text-black hover:border-black my-5">
                {LanguageTextData.connectButtonText}
              </Button>
              <Button className="size-fit text-lg border border-zinc-400 hover:bg-zinc-400 hover:text-black hover:border-black">
                {LanguageTextData.cvButtonText}
              </Button>
            </div>
          </div>
          <div className="ml-16 pl-10">
            <Lottie className="mb-24" animationData={YogaAnimation} />
          </div>
        </div>
      </div>
    </section>
  )
}
