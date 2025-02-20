import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";

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

        <div className="flex justify-center">
          <img src="./bannerfinal.webp" alt="" className="w-full" />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="card hover:-translate-y-3 transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Discover and apply for job opportunities, manage your
              applications, and track your progress—all in one place.
            </CardContent>
          </Card>

          <Card className="card hover:-translate-y-3 transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post job listings, manage applications, and find the ideal
              candidate with ease.
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between gap-36 lg:flex-row  md:flex-col md:h-1/3 sm:hidden md:hidden lg:flex ">
          <div className="lg:ml-36 lg:w-8 lg:mb-2 md:h-1/3 md:mb-20 md:w-full mr-36 ">
            <TiltedCard
              imageSrc="./dreamjob1.webp"
              altText="Job-portal banner"
              captionText="Dream-Job"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>

          <div className="lg:w-8 lg:mb-2 md:h-1/3 md:mb-40 mr-16">
            <TiltedCard
              imageSrc="./manage.webp"
              altText="Job-portal banner"
              captionText="Manage applications"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>

          <div className="lg:w-8 lg:mr-52 lg:mb-2 md:h-1/3 md:mb-40 ml-20 mr-40">
            <TiltedCard
              imageSrc="./preference.webp"
              altText="Job-portal banner"
              captionText="Set preferences"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-4xl p-4 border-2 -mb-5 rounded-md w-full text-center bg-[#020817]">
            Key Features of Job Portal
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 ">
          <Card className="w-full lg:w-1/3 min-h-[16rem] flex flex-col hover:-translate-y-3 transition-all duration-300 ease-in-out">
            <CardHeader className="gap-4 flex-grow">
              <CardTitle>Find Your Dream Job</CardTitle>
              <CardDescription>
                Explore job listings across various industries and locations.
                Filter by role, company, or location to find the perfect match.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex justify-between items-center">
              <Button>Browse Jobs</Button>
              <HiOutlineDocumentMagnifyingGlass className="text-xl" />
            </CardFooter>
          </Card>

          <Card className="w-full lg:w-1/3 min-h-[16rem] flex flex-col hover:-translate-y-3 transition-all duration-300 ease-in-out">
            <CardHeader className="gap-4 flex-grow">
              <CardTitle>Manage Your Applications</CardTitle>
              <CardDescription>
                Stay organized with our application tracker. Get notified about
                interview schedules and application statuses.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex justify-between items-center">
              <Button>Track Applications</Button>
              <IoCalendar className="text-xl" />
            </CardFooter>
          </Card>

          <Card className="w-full lg:w-1/3 min-h-[16rem] flex flex-col hover:-translate-y-3 transition-all duration-300 ease-in-out">
            <CardHeader className="gap-4 flex-grow">
              <CardTitle>Set Your Job Preferences</CardTitle>
              <CardDescription>
                Tailor your job recommendations by selecting your preferred job
                roles, industries, and locations. Get personalized matches to
                fit your career goals.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex justify-between items-center">
              <Button>Set Preferences</Button>
              <FaUserGear className="text-xl" />
            </CardFooter>
          </Card>
        </div>

        <div className=" flex justify-center text-4xl">
          FAQs for My Job Portal Project to Assist Users....
        </div>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem
                className=""
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
