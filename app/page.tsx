/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  HandHeart,
  Users,
  Target,
  Sprout,
  Briefcase,
  LineChart,
  HeartHandshake,
  GraduationCap,
  Coins,
  PlaneTakeoff,
  Mail,
  Linkedin,
  MapPin,
  Users2,
  Leaf,
  MonitorSmartphone,
  BarChart3,
  Phone,
  Megaphone,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const missionPoints = [
    {
      title: "Skills Development",
      description: "Empowering individuals through targeted skills development and education",
      icon: <GraduationCap className="h-12 w-12 sm:h-16 sm:w-16 text-[#a9f285]" />,
    },
    {
      title: "Inclusive Growth",
      description: "Driving inclusive economic growth and meaningful social impact",
      icon: <HeartHandshake className="h-12 w-12 sm:h-16 sm:w-16 text-[#a9f285]" />,
    },
    {
      title: "Community Resilience",
      description: "Fostering resilience in vulnerable communities in a rapidly changing world",
      icon: <Sprout className="h-12 w-12 sm:h-16 sm:w-16 text-[#a9f285]" />,
    },
  ]

  const workProcess = [
    {
      title: "Identify Needs",
      description:
        "We assess community and individual needs through surveys and discussions to understand unique challenges",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Tailored Programs",
      description:
        "We design customized programs addressing specific needs in skill training, mentorship, and funding access",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Engagement & Training",
      description: "Participants engage in workshops and mentorship to gain practical knowledge and skills",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Ongoing Support",
      description:
        "We provide continued support through follow-up sessions, networking events, and additional resources",
      icon: <HandHeart className="h-6 w-6" />,
    },
    {
      title: "Community Impact",
      description: "Empowered individuals create a ripple effect of positive change within their communities",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Sustainable Growth",
      description: "We foster long-term development through environmentally and economically sustainable practices",
      icon: <Sprout className="h-6 w-6" />,
    },
  ]

  const services = [
    {
      title: "Community Development",
      description:
        "Implementing projects that address local challenges in education, health, and environmental sustainability",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Mentorship Programs",
      description:
        "Connecting emerging leaders with experienced mentors who provide guidance and networking opportunities",
      icon: <HeartHandshake className="h-6 w-6" />,
    },
    {
      title: "Access to Funding",
      description:
        "Assisting entrepreneurs in securing funding through partnerships with local and international organizations",
      icon: <Coins className="h-6 w-6" />,
    },
    {
      title: "Learning & Development",
      description: "Providing comprehensive educational programs that foster continuous growth and skill enhancement",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Team Training & Building",
      description:
        "Developing cohesive and high-performing teams through specialized workshops and collaborative activities",
      icon: <Users2 className="h-6 w-6" />,
    },
    {
      title: "Green Energy Solutions",
      description: "Promoting sustainable energy practices and implementing eco-friendly initiatives for communities",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Creating effective online strategies to increase visibility, engage audiences, and drive growth for businesses",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Advertising Solutions",
      description:
        "Developing targeted advertising campaigns across multiple platforms to reach and convert your ideal audience",
      icon: <Megaphone className="h-6 w-6" />,
    },
    {
      title: "Social Media Monetization",
      description:
        "Teaching strategies to leverage social platforms for sustainable income generation and business growth",
      icon: <MonitorSmartphone className="h-6 w-6" />,
    },
    {
      title: "Entrepreneurship Training",
      description: "Comprehensive programs covering business planning, marketing strategies, and financial management",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Strategic Planning",
      description: "Helping define vision, set measurable goals, and outline actionable steps to achieve success",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Business Consulting",
      description: "Experienced consultants providing tailored recommendations that drive sustainable growth",
      icon: <PlaneTakeoff className="h-6 w-6" />,
    },
  ]

  return (
    <main className="flex min-h-screen h-fit flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen h-fit py-12 flex items-center justify-center bg-white text-black">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex w-full justify-center">
            <Image
              src={"/svgs/logo.svg"}
              className="relative w-[150px] h-[150px] sm:w-[190px] sm:h-[190px]"
              width={190}
              height={190}
              alt="ScaleUp Foundation Logo"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6">
            Empowering Communities Through Education & Innovation
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Building a future where all individuals have the skills and opportunities to thrive, driving innovation and
            fostering inclusive, sustainable development
          </p>
          <a href="mailto:meetus@scaleupfoundation.org">
            <Button size="lg" className="bg-[#a9f285] text-[#04045e] hover:bg-[#8ad066] border-none">
              Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-white" id="mission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#04045e]">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering individuals through targeted skills development, education, and innovation. We drive inclusive
              economic growth, create social impact, and foster lifelong learning while addressing the needs of
              vulnerable communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-gray-200 hover:border-[#a9f285]/50 transition-all duration-300 h-full shadow-lg hover:shadow-[#04045e]/10 hover:shadow-xl">
                  <CardHeader className="text-center pb-2 pt-6 sm:pt-8">
                    <motion.div whileHover={{ scale: 1.1 }} className="mx-auto mb-4">
                      {point.icon}
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-[#04045e]">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-6 sm:pb-8">
                    <p className="text-gray-600 text-base sm:text-lg">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#04045e]">Our Vision</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              To build a future where all individuals have the skills and opportunities to thrive, drive innovation,
              foster inclusivity, and promote sustainable progress and development in every community.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#04045e]">About Us</h2>
            <div className="w-24 h-1 bg-[#a9f285] mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                At Scaleup Foundation, we empower individuals and communities by addressing critical skill gaps through
                targeted training and education. We equip people with the tools they need to thrive in today's evolving
                job market and foster economic empowerment.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                We focus on providing humanitarian aid, expanding access to quality education, and promoting gender
                equality while leveraging technology and partnerships to scale our impact globally.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Our commitment to health, entrepreneurship, and digital literacy ensures our programs align with
                industry needs while prioritizing marginalized groups. Through data-driven evaluations, we continually
                improve our efforts, helping individuals succeed and contribute to a more equitable society.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 relative mt-12 sm:mt-0">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    src="/images/udeme.jpg"
                    width={120}
                    height={120}
                    alt="Founder of ScaleUp Foundation (Udemeobong Essien)"
                    className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] object-cover"
                  />
                </div>
              </div>
              <div className="pt-10 sm:pt-12 text-center">
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 text-[#a9f285] mx-auto mb-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-base sm:text-xl italic text-gray-700 mb-4 sm:mb-6">
                  "Our mission at ScaleUp Foundation is to bridge the gap between potential and opportunity. We believe
                  that everyone deserves the chance to develop their skills and contribute meaningfully to society,
                  regardless of their background or circumstances."
                </blockquote>
                <div className="font-bold text-lg sm:text-xl text-[#04045e]">Udemeobong Essien</div>
                <div className="text-[#04045e] flex flex-wrap items-center justify-center text-sm sm:text-base">
                  <span>Founder & Business Development Executive</span>
                  <a
                    href="https://www.linkedin.com/in/udemeobong-essien-311726ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-[#04045e] hover:text-[#04045e]/80 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-24 bg-white text-black" id="process">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              How We{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a9f285] to-[#8ad066]">Work</span>
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-4 sm:mb-6">
              Our approach is simple yet effective. We believe in empowering individuals through education, mentorship,
              green energy and community support.
            </p>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-[#a9f285] to-[#8ad066] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {workProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white text-black border-[#04045e] transition-all duration-300 h-full shadow-lg">
                  <CardHeader className="text-center pb-2 pt-4 sm:pt-6">
                    <div className="mx-auto mb-3 sm:mb-4 bg-[#04045e]/50 p-2 sm:p-3 rounded-full">{process.icon}</div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-black">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-4 sm:pb-6 px-3 sm:px-6">
                    <p className="text-sm sm:text-base text-black">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#04045e]">Our Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Exceptional services tailored to your unique goals. Whether you're an aspiring entrepreneur or a community
              leader, we're here to support your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow border-gray-200 hover:border-[#a9f285]/30">
                  <div className="mb-3 sm:mb-4 text-[#04045e]">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#04045e]">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#04045e]">Community Impact</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from individuals and communities who have benefited from our programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:w-1/3 h-[250px] md:h-auto">
              <Image
                src="/images/kpeta-toyo.jpg"
                width={300}
                height={400}
                alt="Community member"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8 md:w-2/3">
              <div className="uppercase tracking-wide text-xs sm:text-sm text-[#04045e] font-semibold">
                Success Story
              </div>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 italic">
                "Working with Scaleup Foundation has been a game-changer for our community. Their dedication to
                empowering youth and supporting local initiatives is truly inspiring. Thanks to their programs, we've
                seen real growth and lasting impact. I'm proud to be part of the journey!"
              </p>
              <div className="mt-4 sm:mt-6">
                <p className="text-gray-900 font-semibold">Kpeta Toyo</p>
                <p className="text-xs sm:text-sm text-gray-600">Community Leader, Abuja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-[#04045e] text-white" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">Ready to Make an Impact?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower individuals and transform communities through education, mentorship, and
            sustainable development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#a9f285] text-[#04045e] hover:bg-[#8ad066] w-full sm:w-auto" asChild>
              <a href="mailto:meetus@scaleupfoundation.org">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Partner With Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04045e] text-white py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image src={"/svgs/inline-logo.svg"} width={200} height={150} alt="ScaleUp Foundation Logo" />

              {/* Address Link */}
              <a
                href="https://maps.google.com/?q=25+Yakubu+Gowon+Crescent,+Asokoro,+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-3 text-gray-300 hover:text-[#a9f285] transition-colors text-xs sm:text-sm"
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span>25 Yakubu Gowon Crescent, Opposite A.A. Rano Filling Station, Asokoro, Abuja.</span>
              </a>

              {/* Phone Link */}
              <a
                href="tel:+2348062375026"
                className="flex items-center mt-2 text-gray-300 hover:text-[#a9f285] transition-colors text-xs sm:text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>+234 806 237 5026</span>
              </a>
            </div>

            {/* Mobile Footer Navigation */}
            <div className="md:hidden flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#mission" className="hover:text-[#a9f285]">Our Mission</Link>
              <Link href="#about" className="hover:text-[#a9f285]">About Us</Link>
              <Link href="#process" className="hover:text-[#a9f285]">How We Work</Link>
              <Link href="#services" className="hover:text-[#a9f285]">Services</Link>
              <Link href="mailto:meetus@scaleupfoundation.org" className="hover:text-[#a9f285]">Contact</Link>
            </div>

            {/* Desktop Footer Navigation */}
            <div className="hidden md:flex gap-8">
              <Link href="#mission" className="hover:text-[#a9f285]">Our Mission</Link>
              <Link href="#about" className="hover:text-[#a9f285]">About Us</Link>
              <Link href="#process" className="hover:text-[#a9f285]">How We Work</Link>
              <Link href="#services" className="hover:text-[#a9f285]">Services</Link>
              <Link href="mailto:meetus@scaleupfoundation.org" className="hover:text-[#a9f285]">Contact</Link>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-400">
            <div className="mb-2">© {new Date().getFullYear()} ScaleUp Foundation. All rights reserved.</div>
            <div className="text-gray-300">
              Made With ❤{" "}
              <a
                href="https://www.jedshock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a9f285] hover:underline"
              >
                Jedshock
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
