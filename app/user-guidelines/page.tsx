import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, UserCheck, FileText, HandHeart, Shield, Award } from "lucide-react"

export default function UserGuidelinesPage() {
  const clientGuidelines = [
    {
      title: "Task Posting Guidelines for Clients",
      icon: FileText,
      description:
        "To ensure a seamless experience for both clients and buddies, we've created these guidelines for posting tasks. Please review them carefully before creating a task to maximize your chances of finding the right match.",
    },
    {
      title: "Bid Accepting Guidelines for Clients",
      icon: HandHeart,
      description:
        "To ensure a seamless and professional experience for all our users, we have established the following guidelines for accepting bids on our platform. Please read these carefully before proceeding",
    },
    {
      title: "Post-Bid Acceptance Guidelines for Clients",
      icon: UserCheck,
      description:
        "To ensure a smooth and successful collaboration after you've successfully accepted a bid, please follow these guidelines.",
    },
    {
      title: "Safety Guidelines for Clients Hiring Buddies (In-Person & Remote)",
      icon: Shield,
      description:
        "At MyBuddyPH, we prioritize the safety and security of both clients and buddies. Whether you're hiring for an in-person or remote task, follow these guidelines to ensure a safe, professional, and smooth experience.",
    },
  ]

  const buddyGuidelines = [
    {
      title: "Task Bidding Guidelines for Buddies",
      icon: Briefcase,
      description:
        "This page provides clear guidelines for Buddies to ensure a smooth and professional experience while bidding for tasks. Follow these steps and tips to maximize your chances of securing tasks effectively.",
    },
    {
      title: "Post-Bid Acceptance Guidelines for Buddies",
      icon: UserCheck,
      description:
        "To ensure a smooth and successful collaboration after your bid has been successfully accepted, please follow these guidelines.",
    },
    {
      title: "Safety Guidelines for Buddies (In-Person & Remote Tasks)",
      icon: Shield,
      description:
        "At MyBuddyPH, your safety is our priority. Whether you're accepting in-person or remote tasks, follow these guidelines to protect yourself and ensure a secure and professional working experience.",
    },
    {
      title: "Work Ethics & Professionalism Guidelines for Buddies",
      icon: Award,
      description:
        "As a Buddy on MyBuddyPH, maintaining professionalism and a strong work ethic is key to building trust, securing repeat clients, and growing your reputation. Follow these guidelines to ensure a positive and professional experience for both you and your clients.",
    },
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">User Guidelines</h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            This section outlines the guidelines and policies relevant to both clients and service providers (Buddies)
            using the platform.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2 text-blue-600">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Clients</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <UserCheck className="w-5 h-5" />
              <span className="font-semibold">Buddies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl lg:text-4xl font-bold">Clients</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {clientGuidelines.map((guideline, index) => {
              const IconComponent = guideline.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{guideline.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{guideline.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Buddies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <UserCheck className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl lg:text-4xl font-bold">Buddies</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {buddyGuidelines.map((guideline, index) => {
              const IconComponent = guideline.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{guideline.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{guideline.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
