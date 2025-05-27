"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, UserCheck } from "lucide-react"
import ClientForm from "./components/client-form"
import VAForm from "./components/va-form"
import ScrollButton from "./components/scroll-button"

type ActiveForm = "client" | "va" | null

export default function HomePage() {
  const [activeForm, setActiveForm] = useState<ActiveForm>(null)

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Need an Extra Set of Hands? <span className="text-gray-600">Or Ready to Work Online?</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                MyBuddyPH is your go-to outsourcing partner — connecting businesses with skilled Filipino professionals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're hiring a virtual assistant or you're a skilled worker looking for online gigs, we're here
                to match the right talent with the right need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollButton
                targetId="forms"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
                onClick={() => setActiveForm("client")}
              >
                I Want to Hire
              </ScrollButton>
              <ScrollButton
                targetId="forms"
                variant="outline"
                className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg"
                onClick={() => setActiveForm("va")}
              >
                I'm Looking for Online Work
              </ScrollButton>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-48 h-48 flex items-center justify-center">
              <Image
                src="/animated-logo.gif"
                alt="MyBuddyPH Animated Logo"
                width={192}
                height={192}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black">MyBuddyPH</h2>
              <p className="text-lg text-gray-600 mt-2">Connectivity, Made Easy</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Clients */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">For Clients</CardTitle>
                <CardDescription className="text-lg">Get the help you need</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-lg">Tell us what kind of help you need</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-lg">We match you with a qualified Buddy</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-lg">Work gets done — without the stress</p>
                </div>
              </CardContent>
            </Card>

            {/* For Virtual Assistants */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">For Virtual Assistants</CardTitle>
                <CardDescription className="text-lg">Start your online career</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-lg">Apply online in minutes</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-lg">Get screened and added to our VA pool</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-lg">Start working when matched to a client</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="forms" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {activeForm === null && (
              <div className="text-center space-y-8 animate-fade-in">
                <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600">Choose your path below</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScrollButton
                    targetId="forms"
                    className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
                    onClick={() => setActiveForm("client")}
                  >
                    I Want to Hire a Buddy
                  </ScrollButton>
                  <ScrollButton
                    targetId="forms"
                    variant="outline"
                    className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg"
                    onClick={() => setActiveForm("va")}
                  >
                    I'm Looking for Online Work
                  </ScrollButton>
                </div>
              </div>
            )}

            {activeForm === "client" && (
              <div className="animate-slide-up">
                <div className="mb-6 text-center">
                  <button
                    onClick={() => setActiveForm(null)}
                    className="text-gray-600 hover:text-gray-800 text-sm underline"
                  >
                    ← Back to options
                  </button>
                </div>
                <ClientForm />
              </div>
            )}

            {activeForm === "va" && (
              <div className="animate-slide-up">
                <div className="mb-6 text-center">
                  <button
                    onClick={() => setActiveForm(null)}
                    className="text-gray-600 hover:text-gray-800 text-sm underline"
                  >
                    ← Back to options
                  </button>
                </div>
                <VAForm />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coming Soon Marketplace Section */}
      <section className="bg-gray-100 py-16 lg:py-24 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Coming Soon</h2>
              <p className="text-xl lg:text-2xl text-gray-700">Our Own Marketplace Platform</p>
            </div>
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                We're working hard to bring you an even better experience with our dedicated marketplace platform. Get
                ready for enhanced features, better matching, and seamless task management.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <p className="text-2xl font-bold text-gray-900">Stay Tuned!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
