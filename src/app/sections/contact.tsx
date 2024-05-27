import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import SendEmail from '@/app/assets/SendEmail.json'
import { Button } from '@/components/ui/button'
import { useRef, useEffect } from 'react'
import { Socials } from '@/components/ui/socials'
export function Contact({ LanguageTextData }: any) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null)

  const handleMouseEnter = () => {
    if (lottieRef.current) {
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
      lottieRef.current.setSpeed(0.5)
    }
  }, [])

  return (
    <section id="Contact" className="mt-64">
      <div className="mx-auto px-4  w-5/6 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <h1 className="text-white text-4xl p-5 font-semibold">
          {LanguageTextData.title}
        </h1>
        <p className="text-white text-xl">{LanguageTextData.contactText}</p>
        <Button
          className="flex items-center w-48 h-12 p-2 pl-8 "
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
        <Socials />
        <h3>{LanguageTextData.bottomContactText}</h3>
      </div>
    </section>
  )
}
