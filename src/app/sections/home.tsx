import { Button } from '@/components/ui/button'
import Image from 'next/image'
import DevGif from '@/app/assets/dev-gif.gif'
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
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-wrap -mx-2">
          <div className="flex flex-col w-full md:w-1/2 px-2 ">
            <h1 className="text-4xl  max-w-full my-6">
              {LanguageTextData.mainText}
              <span className="wrap text-4xl">{text}</span>
            </h1>
            <p className="text-xl my-10">{LanguageTextData.introduction} </p>
            <div className="w-full flex justify-center mt-10">
              <Button className="size-fit text-lg border border-zinc-400 hover:bg-zinc-400 hover:text-black hover:border-black">
                {LanguageTextData.buttonText}
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Image src={DevGif} alt="Dev Gif" />
          </div>
        </div>
      </div>
    </section>
  )
}
