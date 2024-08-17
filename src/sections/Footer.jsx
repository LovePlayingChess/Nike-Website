import {copyrightSign} from "../assets/icons"
import {footerLogo} from "../assets/images"
import {footerLinks, socialMedia} from "../constants"


const footer = () => {
  return (
    <footer className = "max-container font-montserrat text-white-400">
      <div className = 'flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className = "flex flex-col items-start">
          <img 
            src = {footerLogo}
            alt = "footer logo"
            width = {150}
            height = {46}
          />
          
          <p className = "mt-6 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className = "flex items-center gap-5 mt-10">
            {socialMedia.map((media) => (
              <div className = "bg-white flex justify-center items-center rounded-full w-12 h-12">
                <img 
                  src = {media.src} 
                  alt = {media.alt}
                  width={24} 
                  height={24} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className = "flex flex-1 justify-between gap-20 flex-wrap">
          {footerLinks.map((item) => (
            <div>
              <p className = "text-2xl font-medium mb-6 text-white">
                {item.title}
              </p>
              <ul>
                {item.links.map((value) => (
                  <li className = "mt-3 text-base hover:text-slate-gray">
                    <a href = {value.link}>{value.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className = "text-slate-gray flex flex-1 justify-start items-center gap-2 cursor-pointer mt-20">
        <img 
          src = {copyrightSign} 
          alt = "image"
          width = {20}
          height = {20}
        />
        <p>Copyright. All rights reserved</p>
      </div>
    </footer>
  )
}

export default footer