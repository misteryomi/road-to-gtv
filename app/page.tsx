'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ChevronRight, Clock, Code, Globe, Quote, Star, Timer, Users } from 'lucide-react';
import { premium_pricing_url, starter_pricing, waitlist_url } from '@/lib/defaults';
import Link from 'next/link';
import CountdownTimer from '@/components/app/countdown-timer';



const GlowingBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
);


const Hero = () => (
  <div className="relative pt-16 pb-16 bg-black overflow-hidden">
    <GlowingBackground />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white mb-12 md:mb-0">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm">March cohort enrollment open</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Become the Next Endorsed UK Global Talent
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Join our community of tech professionals and learn how to present your achievements effectively for the Global Talent Visa application. Comprehensive guidance based on real experiences.
          </p>
          <CountdownTimer />
          <div className="flex flex-col sm:flex-row gap-4 mt-8">          
            <Link href={"#pricing"}>

            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 group">
              Secure Early-Bird Price
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>

            <div className="flex items-center text-sm text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              Next cohort starts in 7 days
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Success Journey" 
              className="relative rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProofBar = () => (
  <div className="bg-black/95 py-12 border-y border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">95%</div>
          <div className="text-gray-400">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">4-8 Weeks</div>
          <div className="text-gray-400">Average Processing</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">2024</div>
          <div className="text-gray-400">Endorsed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">100+</div>
          <div className="text-gray-400">Community Members</div>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 bg-black relative">
    <GlowingBackground />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Your Blueprint to Success
        </h2>
        <p className="text-xl text-gray-400">We've cracked the code to Global Talent Visa endorsement</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Structured Guidance",
            description: "Learn how to effectively present your technical achievements and contributions following endorsement criteria.",
            icon: Code
          },
          {
            title: "Community Support",
            description: "Connect with tech professionals in our community for insights and application preparation tips.",
            icon: Users
          },
          {
            title: "Real Experience",
            description: "Based on successful application experience as a Senior Developer in the UK tech ecosystem.",
            icon: Globe
          }
        ].map((feature, index) => (
          <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300">
            <CardContent>
              <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 bg-black/95 relative">
    <GlowingBackground />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Starter Package */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
                <Timer className="w-4 h-4 mr-2" />
                <span>Early-Bird Offer</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Starter Package</h3>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">£299</span>
                <span className="text-xl text-gray-400 line-through ml-2">£499</span>
              </div>
              <p className="text-blue-400">Save £200 - Limited Time</p>
              <div className="mt-4 bg-white/5 rounded-lg p-3">
                <div className="text-sm text-gray-300 mb-2">
                  <Users className="w-4 h-4 inline mr-2 text-blue-400" />
                  Only {50} spots left at this price
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Complete Application Templates",
                "6 Core Video Modules",
                "Community Forum Access",
                "Document Guidelines",
                "Email Support",
                "6 Months Access",
                "Future £300 Credit Towards Premium"
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            <Link href={starter_pricing}>
            <Button className="w-full h-14 text-lg bg-white/10 hover:bg-white/20 group">
              Get Early-Bird Price
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Premium Package */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden transform md:scale-105">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
                Personalized Support Package
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Premium Success Package</h3>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-4xl font-bold text-white">£2,599</span>
                <span className="text-xl text-gray-400 line-through ml-2">£4,999</span>
              </div>
              <p className="text-gray-400">Comprehensive guidance with personal support</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Everything under Starter package",
                "1:1 Document Review Sessions (4 hours)",
               
                "Private Community Access",
                "Priority Email Support (24h)",
                "Monthly 1:1 Progress Check",
                "Application Evidence Organization Help",
                "12 Months Access to Updates",
                "Document Templates & Guidelines"
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="space-y-4">
            <Link href={premium_pricing_url}>
              <Button className="w-full h-14 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Get Personalized Support
              </Button>
            </Link>
            
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <p className="text-sm text-gray-400 text-center my-10">
                Disclaimer: Course completion and support services do not guarantee visa endorsement. All endorsement decisions are made independently by Tech Nation.
              </p>
  </section>
);

const AboutMe = () => (
  <section className="py-20 bg-black/95 relative">
    <GlowingBackground />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3" />
          <img 
            src="/yomi.jpg" 
            alt="Oluwayomi Omotoso" 
            className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-300"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Your Guide
          </h2>
          <div className="space-y-6 text-gray-300">
            <p className="text-xl">
              Hi, I'm Oluwayomi Omotoso, a Senior Software Developer and successful Global Talent Visa recipient.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-3">
                  6+ years of experience in fintech and e-commerce, currently serving as CTO/Co-founder at Transition School
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-3">
                  Led implementation of high performant e-commerce products that supports over 500k concurrent users.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-3">
                  Developed a pan-African payment product, processing £4.1M monthly transactions
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-3">
                  Founded UK Tech Career Summit and built a 1,000+ member Nigeria-UK tech community
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              Having successfully navigated the Global Talent Visa process, I'm passionate about helping other tech professionals present their achievements effectively and pursue their UK career aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-black">




      {/* Testimonials Carousel */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="text-3xl font-bold text-white">
              Applicant Feedback
            </h2>
            <div className="space-y-8">
            <Quote className="w-12 h-12 text-blue-400 mx-auto" />


            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-white font-light italic">
                "Having built multiple successful products within the Lagos tech ecosystem, I wasn't sure how to present my achievements for a UK audience. This program helped me translate my experience into compelling evidence that showcased my real impact."
              </blockquote>
              <div>
                <p className="font-bold text-white">Tade Ogunjobi</p>
                <p className="text-gray-400">Technical Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-white/5 border-white/10 p-8 md:p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto pb-3">
              Join our community of tech professionals and learn how to effectively present your achievements.
            </p>
            <Link href={waitlist_url}>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Get Started
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

const LandingPage = () => (
  <div className="min-h-screen bg-black">
    <Hero />
    <ProofBar />
    <AboutMe />
    <SuccessStories />
    <Features />
    <Pricing />

  </div>
);

export default LandingPage;