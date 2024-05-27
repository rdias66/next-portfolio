import Lottie from 'lottie-react'
import SendEmail from '@/app/assets/SendEmail.json'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
export function Contact({ LanguageTextData }: any) {
  const [play, setPlay] = useState(false)

  return (
    <section id="Contact" className="mt-64">
      <div className="mx-auto px-4  w-5/6 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <h1 className="text-white text-4xl p-5 font-semibold">
          {LanguageTextData.title}
        </h1>
        <p className="text-white text-xl">{LanguageTextData.contactText}</p>
        <Button>
          <Lottie animationData={SendEmail} autoplay={false} play={play} />
          {LanguageTextData.buttonText}
        </Button>
        <a
          href="https://www.instagram.com/diasrodr"
          className="hover:text-zinc-500"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a
          href="https://www.twitter.com/1deltakream"
          className="hover:text-zinc-500"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter fa-xl"></i>
        </a>
        <h3>{LanguageTextData.bottomContactText}</h3>
      </div>
    </section>
  )
}
