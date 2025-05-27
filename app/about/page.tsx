import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
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
                t's a game-changing opportunity for Filipinos seeking stable
                online jobs — and for clients worldwide looking to scale with
                reliable remote support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals, Mission, Vision */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Goals */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Our goal is simple: to make outsourcing easy, reliable, and
                  efficient — whether you're a startup, entrepreneur, or growing
                  business.
                </p>
                <p>
                  Instead of spending hours searching online or vetting
                  freelancers, MyBuddyPH connects you with skilled and
                  trustworthy Filipino professionals who are ready to work
                  remotely — full-time, part-time, or project-based.
                </p>
                <p>
                  Whether you need a virtual assistant, lead generation
                  specialist, customer support agent, or an admin pro — we've
                  got a Buddy for that. Just tell us what you need, and we'll
                  match you with the right talent — fast
                </p>
                <p className="font-semibold text-center">
                  One mission. One phrase: “Connectivity, Made Easy.”
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Our mission is to create a platform where every Filipino can
                  thrive, whether online or on the ground.
                </p>
                <p>
                  We aim to open doors for those who are often overlooked —
                  Filipinos without permanent jobs, degrees, or connections — by
                  connecting them with real work opportunities based on skills,
                  not resumes.
                </p>
                <p>
                  Whether it's remote outsourcing today or in-person tasks
                  tomorrow, MyBuddyPH exists to empower the everyday Filipino —
                  giving them a space to showcase their talents, deliver great
                  service, and take control of their time and income. This is
                  more than a platform. It's a movement. A new future.
                </p>
                <p className="font-semibold text-center">
                  A place where Filipinos reign.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Imagine having a trusted team of skilled helpers right at your
                  fingertips. Our vision is to build a seamless, efficient, and
                  effortless way to get things done — and help people buy back
                  their time.
                </p>
                <ul className="space-y-2">
                  <li>• We believe in empowering Filipinos to turn their talents into income</li>
                  <li>
                    • whether or not they have a regular job, a diploma, or corporate experience
                  </li>
                </ul>
                <p>
                   With MyBuddyPH, individuals can access real work opportunities, while clients get the support they need — from simple tasks to complex projects.
This isn't just about outsourcing. It's about building a community of support, where anyone can lend a hand — and pay it forward using their own skills and expertise.
                </p>
                <p className="font-semibold text-center">
                  One mission. One phrase: “Connectivity, Made Easy.”
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
