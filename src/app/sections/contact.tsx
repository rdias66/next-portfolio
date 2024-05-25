import { Button } from '@/components/ui/button'

export function Contact({ LanguageTextData }: any) {
  return (
    <section id="Contact" className="mt-64">
      <div>
        <h1>{LanguageTextData.title}</h1>
        <p>{LanguageTextData.contactText}</p>
        <Button>{LanguageTextData.buttonText}</Button>
      </div>
    </section>
  )
}
