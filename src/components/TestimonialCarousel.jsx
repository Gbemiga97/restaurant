import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../slider.css'

const TestimonialCarousel = ({slider}) => {
  return (
    <Carousel
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
    autoPlay={true}
    infiniteLoop={true}
    className="w-full max-w-[1024px] flex items-center justify-center"
    >
      {
        slider.map(({image, message, name, occupation}, i) => (
          <article 
          className="max-w-[840px] mx-auto px-24 text-white"
          key={i}>
            <p className="text-lg mb-9lg:text-2xl leading-snug">
              {message}</p>
            <div className="max-w-[70px] lg:max-w-[100px] mx-auto mb-3">
              <img src={image} alt={name} />
            </div>
            <p className="font-bold text-[22px] text-accent">
              {name}</p>
            <p className="font-medium italic">
              {occupation}</p>
          </article>
        ))
      }
    </Carousel>
  )
}

export default TestimonialCarousel