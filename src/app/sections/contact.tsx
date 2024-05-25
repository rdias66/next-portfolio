import { Button } from '@/components/ui/button'

export function Contact({ LanguageTextData }: any) {
  return (
    <section id="Contact" className="mt-64">
      <div>
        <h1>{LanguageTextData.title}</h1>
        <p>{LanguageTextData.contactText}</p>
        <Button>{LanguageTextData.buttonText}</Button>
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
