import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is MyBuddyPH?",
      answer:
        "MyBuddyPH is an Online Task Marketplace that connects people needing to outsource tasks with local service providers. We are passionate about Providing equal opportunities for Filipinos without permanent jobs or formal academic backgrounds, We aim to offer a fresh avenue for them to showcase their talents, deliver outstanding customer service, and regain control of their time.",
    },
    {
      question: "How does MyBuddyPH service work?",
      answer:
        "Our service connects you with a community of buddies ready to help with your daily tasks. Just post your task, provide a brief description, select the right buddy within your budget, pay the fee, and leave a review. It's a simple process: Post, Select, and Review. Plus, you can easily pay it forward on our website for a hassle-free transaction.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Our pricing varies depending on the job that needs to be done. We offer a variety of buddies to fit your needs and budget. Please visit our Services Page for more information.",
    },
    {
      question: "Do you offer Cash payment?",
      answer:
        "For security reasons, we don't accept cash payments. Our payment process is straightforward: Once you accept a bid, you pay upfront, and we'll hold the funds until the job is done. You can then release the payment. We accept Gcash, Maya, and online banking transactions.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us through our Help Center and fill out a form in Contact Us. We are always happy to answer your questions.",
    },
    {
      question: "Where can I learn more about you?",
      answer:
        "You can explore other sections of this website, such as the About page or our blog, to learn more about our Company Goals, Vision, and Mission",
    },
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Find answers to the most common questions about MyBuddyPH
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-start space-x-3 text-left">
                    <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-xl">{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed ml-9">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
