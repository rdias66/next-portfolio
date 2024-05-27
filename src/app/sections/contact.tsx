import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import SendEmail from '@/app/assets/SendEmail.json'
import { Button } from '@/components/ui/button'
import { useRef, useEffect } from 'react'
import { Socials } from '@/components/ui/socials'
export function Contact({ LanguageTextData }: any) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null)

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5)
      lottieRef.current.playSegments([0, 52], false)
      lottieRef.current.playSegments([54, 119], false)
    }
  }

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.pause()
    }
  }

  const handleMouseClick = () => {}

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(0, true)
    }
  }, [])

  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center mt-40 text-white"
    >
      <h1 className=" text-4xl p-5 font-semibold">{LanguageTextData.title}</h1>
      <div className="mx-auto px-4 w-3/6 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <div className="flex flex-col">
          <p className=" text-base p-5 mx-auto ">
            {LanguageTextData.contactText}
          </p>
          <Button
            className="flex items-center w-48 h-12 p-5 mb-5 mx-auto border border-transparent hover:border-zinc-400"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
          >
            {LanguageTextData.buttonText}
            <Lottie
              lottieRef={lottieRef}
              animationData={SendEmail}
              autoplay={false}
              loop={false}
            />
          </Button>
          <div className="mx-auto">
            <Socials />
          </div>

          <h3 className=" text-base p-5 mx-auto">
            {LanguageTextData.bottomContactText}
          </h3>
        </div>
      </div>
    </section>
  )
}
