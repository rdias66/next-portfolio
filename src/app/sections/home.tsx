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

  const download = () => {
    const cvUrl = LanguageTextData.isEn
      ? '/Rodrigo-Dias-CV-EN.pdf'
      : '/Rodrigo-Dias-CV-PTBR.pdf'
    window.open(cvUrl, '_blank', 'noopener,noreferrer')
  }
  const scrollToContact = () => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="Home" className="">
      <div className=" mx-auto px-4 lg:pb-24 mt-32 lg:mt-64 w-5/6 lg:w-4/6 bg-zinc-800 bg-opacity-50 rounded-2xl ">
        <div className="flex flex-wrap lg:max-h-96">
          <div className="flex flex-col w-full md:w-1/2 px-2 ">
            <div className="h-32 overflow-hidden">
              <h1 className="text-lg lg:text-2xl xl:text-4xl  mx-auto my-6 text-zinc-100 font-semibold">
                {LanguageTextData.mainText}
                <span className="wrap text-lg lg:text-2xl xl:text-4xl text-zinc-100 ">
                  {text}
                </span>
              </h1>
            </div>
            <p className="text-sm  lg:text-lg text-zinc-100">
              {LanguageTextData.introduction}
            </p>

            <div className="w-full flex flex-col justify-center my-12 items-center ">
              <Button
                onClick={scrollToContact}
                className="size-fit text-lg border border-transparent hover:border-zinc-400 my-5"
              >
                {LanguageTextData.connectButtonText}
              </Button>
              <Button
                onClick={download}
                className="size-fit text-lg border border-transparent hover:border-zinc-400"
              >
                {LanguageTextData.cvButtonText}
              </Button>
            </div>
          </div>
          <div className="mx-auto  md:mt-24 lg:mt-16 xl:mt-12 ">
            <Lottie
              className="size-56 md:size-64 lg:size-72 xl:size-80 2xl:size-96"
              animationData={YogaAnimation}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
