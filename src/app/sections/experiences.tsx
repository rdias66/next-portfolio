import WorkIcon from '@/app/assets/icon-work.png'
import EducationIcon from '@/app/assets/icon-graduation.png'
import ExperienceCard from '@/components/experienceCard'
import { Separator } from '@/components/ui/separator'

export function Experiences({
  LanguageTextData,
  LanguageTitleData,
}: {
  LanguageTextData: any
  LanguageTitleData: string
}) {
  return (
    <section
      id="Experiences"
      className="flex flex-col items-center justify-center min-h-screen mt-40"
    >
      <h1 className="text-white text-4xl p-5 font-semibold ">
        {LanguageTitleData}
      </h1>

      <div className="px-4 w-4/6 bg-zinc-800 bg-opacity-50 rounded-2xl flex flex-col lg:flex-row">
        <div className="relative p-10 rounded-2xl lg:flex-1">
          {LanguageTextData.map(
            (
              card: {
                category: string
                title: string
                year: string
                desc: string
              },
              id: number,
            ) => {
              if (card.category === 'education') {
                return (
                  <ExperienceCard
                    key={id}
                    icon={EducationIcon}
                    title={card.title}
                    year={card.year}
                    desc={card.desc}
                  />
                )
              }
            },
          )}
        </div>
        <div className="hidden lg:flex items-center ">
          <Separator orientation="vertical" className="h-5/6" />
        </div>
        <div className="relative grid p-10 rounded-2xl lg:flex-1">
          {LanguageTextData.map(
            (
              card: {
                category: string
                title: string
                year: string
                desc: string
              },
              id: number,
            ) => {
              if (card.category === 'work') {
                return (
                  <ExperienceCard
                    key={id}
                    icon={WorkIcon}
                    title={card.title}
                    year={card.year}
                    desc={card.desc}
                  />
                )
              }
            },
          )}
        </div>
      </div>
    </section>
  )
}
