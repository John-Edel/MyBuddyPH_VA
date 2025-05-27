import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, AlertTriangle, Scale, RefreshCw, AlertCircle, ScrollText } from "lucide-react"

export default function LegalPoliciesPage() {
  const policies = [
    {
      title: "Cancellation Policy",
      icon: RefreshCw,
      description:
        "Our cancellation policy is designed to ensure clarity and fairness for both clients and buddies. This policy works with our Dispute Resolution System and Refund Policy to address situations where either party wishes to cancel a task before completion.",
    },
    {
      title: "Privacy Policy",
      icon: Shield,
      description:
        "This is MyBuddyPH's privacy policy, explaining what data we will collect from users, how are we going to use it, users' rights regarding their data, data security measures, and contact information for privacy inquiries.",
    },
    {
      title: "Community Guidelines",
      icon: Users,
      description:
        "We strive to create a positive, professional, and secure environment for all users, whether you're a task provider (buddy) or a client. To ensure a smooth experience, please follow these guidelines.",
    },
    {
      title: "Prohibited Task Policy",
      icon: AlertTriangle,
      description:
        "We strive to maintain a safe, respectful, and efficient environment for our users and contractors. To ensure our platform's integrity and protect everyone's well-being, we have outlined certain tasks that are strictly prohibited on our website. These tasks are not allowed to be posted or completed via our platform",
    },
    {
      title: "Dispute Resolution System",
      icon: Scale,
      description:
        "This is our dispute resolution process, designed to help clients and Buddies resolve disagreements related to tasks. It outlines the steps involved, from initial communication to final arbitration, and the potential outcomes for both parties.",
    },
    {
      title: "Refund Policy",
      icon: RefreshCw,
      description:
        "Our refund policy is designed to ensure fairness and clarity for clients and buddies, aligning with our Dispute Resolution System.",
    },
    {
      title: "List of Fraudulent Activities",
      icon: AlertCircle,
      description:
        "This page describes potential scams on the platform, like fake tasks, phishing, bid manipulation, and more. It explains how these scams work and their impact, urging users to report suspicious activity.",
    },
    {
      title: "Terms and Condition",
      icon: ScrollText,
      description:
        "These Terms and Conditions are the legal agreement for using MyBuddyPH. They cover cookies, intellectual property, user content, linking, liability, and disclaimers, defining what you can and cannot do and our responsibilities.",
    },
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Legal & Policies</h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            This section groups all the essential policies that users must be aware of.
          </p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => {
              const IconComponent = policy.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-gray-600" />
                    </div>
                    <CardTitle className="text-xl">{policy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{policy.description}</p>
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
