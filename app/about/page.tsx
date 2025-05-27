import Image from "next/image"
import { Target, Eye, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get to know us!</h1>
          <div className="max-w-4xl mx-auto space-y-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
            <p>
              Our journey began with a simple yet powerful idea: to create a platform that opens doors of opportunity
              for Filipinos.
            </p>
            <p>
              We saw the challenges—limited job opportunities, barriers to earning, and the struggle to find reliable
              help—and we knew that by building the right platform, we could bridge these gaps.
            </p>
            <p>
              MyBuddyPH is more than just a marketplace; it's a movement. A space where talent meets opportunity, where
              time is reclaimed, and where every task completed brings someone closer to success.
            </p>
            <p className="font-semibold">
              Our legacy lives on in every connection made, every success story shared, and every door of opportunity
              opened.
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
            <h2 className="text-2xl font-bold">MyBuddyPH - Logo</h2>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Overview</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                MyBuddyPH is an Online Task Marketplace that connects people who need to outsource tasks with skilled
                individuals ready to work and earn.
              </p>
              <p>
                From simple household chores to specialized services, clients can find trusted professionals for home
                cleaning, handyman jobs, admin work, photography, graphic design, website development, and more.
              </p>
              <p>
                If there's a task on your to-do list that you can't handle, post it on MyBuddyPH and let a skilled Buddy
                take care of it!
              </p>
              <p className="font-semibold">
                It's a game-changing opportunity for Filipinos looking for work, for those in need of extra hands, and
                for anyone struggling to find time to get things done.
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
                  Our goal is to make your life easier and more convenient. Instead of spending hours searching online
                  or struggling to find the right person for the job, MyBuddyPH connects you with skilled and
                  trustworthy individuals who are eager to help.
                </p>
                <p>
                  Whether you need a seasoned professional, a part-timer, a freelancer, or even a licensed expert—we've
                  got you covered!
                </p>
                <p>Simply post your task on our platform, and let our Buddies take care of the rest.</p>
                <p className="font-semibold text-center">One mission, one phrase: "Connectivity, Made Easy."</p>
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
                  To build a marketplace where any task is possible, whether remotely or in-person, providing equal job
                  opportunities for Filipinos without permanent work or academic backgrounds.
                </p>
                <p>
                  Many are overlooked by larger companies, but this platform will empower them to showcase their
                  talents, deliver outstanding service, and regain control of their time.
                </p>
                <p>It will be a fresh avenue for Filipinos to utilize their skills and put them to good use.</p>
                <p className="font-semibold text-center">Join us—let's build a place where Filipinos reign!</p>
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
                  Imagine having access to a platform that feels like having an army of helpers at your fingertips. Our
                  vision is to build a seamless, efficient, and effortless way to get things done.
                </p>
                <ul className="space-y-2">
                  <li>• To help people buy back their time.</li>
                  <li>• To empower individuals to utilize their talents and skills, even without a regular job.</li>
                </ul>
                <p>
                  With MyBuddyPH, you'll have access to a network of talented individuals ready to lend a hand. Whether
                  it's a quick task or a major project, simply post your request, and Buddies will be there to assist
                  you.
                </p>
                <p className="font-semibold text-center">One mission, one phrase: "Connectivity, Made Easy."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
