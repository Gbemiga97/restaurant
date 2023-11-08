import { data } from "../utils"


const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {
        data.socialData.map(({href, icon}, i) => (
            <a key={i}
            className="border border-white/20 rounded-full w-[35px]
            h-[35px] flex items-center justify-center text-sm hover:text-accent
            hover:border-accent transition-all"
            href={href}>{icon}</a>
        ))
      }
    </div>
  )
}

export default Socials