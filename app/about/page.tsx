import Image from "next/image";
import { Target, Eye, Heart, Shield, Star, Zap, Brain, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get to know us!
          </h1>
          <div className="max-w-4xl mx-auto space-y-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
            <p>
              Our journey began with a simple yet powerful idea: to open doors
              of opportunity for Filipinos by connecting them with meaningful,
              sustainable work.
            </p>
            <p>
              We saw the challenges — limited job options, income instability,
              and barriers to remote employment — and we knew that with the
              right platform, we could bridge these gaps.
            </p>
            <p>
              MyBuddyPH isn't just an outsourcing platform — it's a mission. A
              mission to empower Filipino talent, help businesses scale smarter,
              and build lasting partnerships rooted in trust, skill, and
              reliability. Every client we support, every Buddy we place, every
              task completed — it's all part of a bigger story: a story of
              upward mobility, global opportunity, and Filipino excellence.
            </p>
            <p className="font-semibold">
              The future is flexible. The talent is here. MyBuddyPH is where
              they meet.
            </p>
          </div>

          <div className="mt-12">
            <div className="w-48 h-48 flex items-center justify-center mx-auto mb-4">
              <Image
                src="/logo.png"
                alt="MyBuddyPH Logo"
                width={192}
                height={192}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
              Overview
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                MyBuddyPH is an online outsourcing platform that connects
                businesses and entrepreneurs with skilled Filipino professionals
                ready to work and earn — remotely.
              </p>
              <p>
                Whether you need a virtual assistant, lead generation expert,
                customer support agent, or someone to handle admin tasks and
                creative work, we make it easy to find the right talent for your
                needs — full-time, part-time, or project-based.
              </p>
              <p>
                If there's a task or role you're ready to delegate, MyBuddyPH
                helps you hire smart and work smarter.
              </p>
              <p className="font-semibold">
                It's a game-changing opportunity for Filipinos seeking stable
                online jobs — and for clients worldwide looking to scale with
                reliable remote support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">MyBuddyPH Core Values</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Integrity */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="font-semibold">We do what is right—even when no one is watching.</p>
                <p>
                  Every VA in our network is expected to deliver honest, reliable, and trustworthy service. 
                  We value transparency and uphold high ethical standards in all interactions.
                </p>
              </CardContent>
            </Card>

            {/* Excellence */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="font-semibold">We don't settle for "just okay."</p>
                <p>
                  Our team of virtual professionals is committed to consistently delivering high-quality work 
                  and exceeding client expectations with professionalism and skill.
                </p>
              </CardContent>
            </Card>

            {/* Accountability */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Accountability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="font-semibold">We take ownership—of tasks, outcomes, and growth.</p>
                <p>
                  Our VAs are responsible, proactive, and dependable. They own their work and results, 
                  building trust with clients through consistency and communication.
                </p>
              </CardContent>
            </Card>

            {/* Respect and Empathy */}
            <Card className="border-0 shadow-lg lg:col-start-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Respect and Empathy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="font-semibold">We treat everyone with dignity and compassion.</p>
                <p>
                  Our community thrives on mutual respect—whether between clients, VAs, or support teams. 
                  We listen, we care, and we support each other like a true buddy should.
                </p>
              </CardContent>
            </Card>

            {/* Growth Mindset */}
            <Card className="border-0 shadow-lg lg:col-start-3">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Growth Mindset</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="font-semibold">We never stop learning.</p>
                <p>
                  We encourage continuous learning, upskilling, and personal development. VAs on our platform 
                  are not just workers—they're future leaders and entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}