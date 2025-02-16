import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import companies from "../data/companies.json";
import faqs from "../data/faqs.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurText from "@/components/uiComponents/BlurText";
import ShinyText from "@/components/uiComponents/ShinyText";
import TiltedCard from "@/components/uiComponents/TiltedCard";

const LandingPage = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
  <>
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          <ShinyText
            text="Find Your Dream Job"
            disabled={false}
            speed={2}
            className="custom-class"
          />
          <span className="flex items-center gap-2 lg:gap-6">
            <ShinyText
              text="and get"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <img
              src="/Logo.png"
              alt="hirred Logo"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>

        <BlurText
          text="Discover thousands of job opportunities or connect with the ideal candidate."
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8 sm:mt-4 text-gray-300 sm:text-xl"
        />
      </section>

      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>

        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem className="basis-1/3 lg:basis-1/6" key={id}>
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="w-full mb-48">
        <TiltedCard
          imageSrc="./banner.webp"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Job-Portal"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Discover and apply for job opportunities, manage your applications,
            and track your progress—all in one place.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post job listings, manage applications, and find the ideal candidate
            with ease.
          </CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              className="border-1  border-b-gray-950"
              key={index}
              value={`item-${index + 1}`}
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
    </>
  );
};

export default LandingPage;