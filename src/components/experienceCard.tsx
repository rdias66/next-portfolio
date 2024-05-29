import Image from 'next/image'

interface ExperienceCardProps {
  year: string
  title: string
  desc: string
  icon: any
}

export default function ExperienceCard({
  year,
  title,
  desc,
  icon,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-12  lg:pl-14 pb-24 rounded-lg last:pb-0 before:content-[''] before:w-[1px] before:h-full before:absolute before:left-1 before:top-0 ">
      <Image src={icon} alt={title} width={30} height={30} />
      <span className="text-white text-xs lg:text-sm">{year}</span>
      <h3 className="text-white text-sm lg:text-base">{title}</h3>
      <p className="text-white text-sm lg:text-base">{desc}</p>
    </div>
  )
}
