/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel>
      <div className="relative h-full w-full">
        <img
          src="https://www.hdfcergo.com/hindiml/images/default-source/home-insurance/property-insurance-eligibility.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Securing Your Future
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Enjoy peace of mind with comprehensive real estate insurance
              solutions. We protect your assets today to build a stronger
              foundation for tomorrow.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Learn More
              </Button>
              <Button size="lg" color="white" variant="text">
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://kiraguandmwangi.co.ke/wp-content/uploads/2024/03/Types-of-property-insurance.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75"></div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://reshield.com/wp-content/uploads/2019/11/246.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75"></div>
      </div>
    </Carousel>
  );
}
