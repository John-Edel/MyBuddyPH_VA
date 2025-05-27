"use client"

import type React from "react"

import { useState } from "react"
import { FileText, MessageCircle, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SuccessPopup from "../components/success-popup"

type FormType = "dispute" | "support" | "feedback" | null

export default function HelpCenterPage() {
  const [activeForm, setActiveForm] = useState<FormType>(null)
  const [showPopup, setShowPopup] = useState(false)
  const [popupData, setPopupData] = useState({ title: "", message: "" })

  const [disputeForm, setDisputeForm] = useState({
    name: "",
    email: "",
    taskId: "",
    disputeType: "",
    description: "",
  })

  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "",
    message: "",
  })

  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    rating: "",
    category: "",
    feedback: "",
  })

  const handleDisputeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "dispute",
          data: disputeForm,
        }),
      })

      if (response.ok) {
        setPopupData({
          title: "Dispute Filed Successfully!",
          message:
            "Your dispute has been submitted and assigned a case number. Our dispute resolution team will review your case and contact you within 48 hours. You will receive email updates on the progress.",
        })
        setShowPopup(true)
        setDisputeForm({ name: "", email: "", taskId: "", disputeType: "", description: "" })
        setActiveForm(null)
      } else {
        alert("There was an error filing your dispute. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error filing your dispute. Please try again.")
    }
  }

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "support",
          data: supportForm,
        }),
      })

      if (response.ok) {
        setPopupData({
          title: "Support Request Submitted!",
          message:
            "Thank you for contacting our support team. We have received your request and will get back to you within 24 hours. Please check your email for a confirmation and ticket number.",
        })
        setShowPopup(true)
        setSupportForm({ name: "", email: "", subject: "", priority: "", message: "" })
        setActiveForm(null)
      } else {
        alert("There was an error submitting your support request. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting your support request. Please try again.")
    }
  }

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "feedback",
          data: feedbackForm,
        }),
      })

      if (response.ok) {
        setPopupData({
          title: "Feedback Submitted Successfully!",
          message:
            "Thank you for taking the time to share your feedback with us! Your input is valuable and helps us improve our platform. We appreciate your contribution to making MyBuddyPH better.",
        })
        setShowPopup(true)
        setFeedbackForm({ name: "", email: "", rating: "", category: "", feedback: "" })
        setActiveForm(null)
      } else {
        alert("There was an error submitting your feedback. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting your feedback. Please try again.")
    }
  }

  if (activeForm === "dispute") {
    return (
      <>
        <div className="bg-white text-gray-900 min-h-screen py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 text-center">
                <button
                  onClick={() => setActiveForm(null)}
                  className="text-gray-600 hover:text-gray-800 text-sm underline"
                >
                  ← Back to Help Center
                </button>
              </div>
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl">File a Dispute</CardTitle>
                  <CardDescription className="text-lg">
                    Submit your dispute for resolution through our system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDisputeSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="dispute-name">Full Name *</Label>
                      <Input
                        id="dispute-name"
                        value={disputeForm.name}
                        onChange={(e) => setDisputeForm({ ...disputeForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dispute-email">Email *</Label>
                      <Input
                        id="dispute-email"
                        type="email"
                        value={disputeForm.email}
                        onChange={(e) => setDisputeForm({ ...disputeForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-id">Task ID *</Label>
                      <Input
                        id="task-id"
                        placeholder="e.g., TASK-12345"
                        value={disputeForm.taskId}
                        onChange={(e) => setDisputeForm({ ...disputeForm, taskId: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dispute-type">Dispute Type *</Label>
                      <Select
                        value={disputeForm.disputeType}
                        onValueChange={(value) => setDisputeForm({ ...disputeForm, disputeType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select dispute type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="payment">Payment Issue</SelectItem>
                          <SelectItem value="quality">Work Quality</SelectItem>
                          <SelectItem value="communication">Communication Problem</SelectItem>
                          <SelectItem value="deadline">Missed Deadline</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dispute-description">Description *</Label>
                      <Textarea
                        id="dispute-description"
                        placeholder="Please provide detailed information about your dispute..."
                        value={disputeForm.description}
                        onChange={(e) => setDisputeForm({ ...disputeForm, description: e.target.value })}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Submit Dispute
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <SuccessPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title={popupData.title}
          message={popupData.message}
        />
      </>
    )
  }

  if (activeForm === "support") {
    return (
      <>
        <div className="bg-white text-gray-900 min-h-screen py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 text-center">
                <button
                  onClick={() => setActiveForm(null)}
                  className="text-gray-600 hover:text-gray-800 text-sm underline"
                >
                  ← Back to Help Center
                </button>
              </div>
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Contact Support</CardTitle>
                  <CardDescription className="text-lg">
                    We're here to help you with any questions or issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSupportSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="support-name">Full Name *</Label>
                      <Input
                        id="support-name"
                        value={supportForm.name}
                        onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support-email">Email *</Label>
                      <Input
                        id="support-email"
                        type="email"
                        value={supportForm.email}
                        onChange={(e) => setSupportForm({ ...supportForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support-subject">Subject *</Label>
                      <Input
                        id="support-subject"
                        placeholder="Brief description of your issue"
                        value={supportForm.subject}
                        onChange={(e) => setSupportForm({ ...supportForm, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority *</Label>
                      <Select
                        value={supportForm.priority}
                        onValueChange={(value) => setSupportForm({ ...supportForm, priority: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support-message">Message *</Label>
                      <Textarea
                        id="support-message"
                        placeholder="Please describe your issue in detail..."
                        value={supportForm.message}
                        onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <SuccessPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title={popupData.title}
          message={popupData.message}
        />
      </>
    )
  }

  if (activeForm === "feedback") {
    return (
      <>
        <div className="bg-white text-gray-900 min-h-screen py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 text-center">
                <button
                  onClick={() => setActiveForm(null)}
                  className="text-gray-600 hover:text-gray-800 text-sm underline"
                >
                  ← Back to Help Center
                </button>
              </div>
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Give us Feedback</CardTitle>
                  <CardDescription className="text-lg">
                    Share your thoughts and help us improve our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="feedback-name">Full Name *</Label>
                      <Input
                        id="feedback-name"
                        value={feedbackForm.name}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback-email">Email *</Label>
                      <Input
                        id="feedback-email"
                        type="email"
                        value={feedbackForm.email}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Overall Rating *</Label>
                      <Select
                        value={feedbackForm.rating}
                        onValueChange={(value) => setFeedbackForm({ ...feedbackForm, rating: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Rate your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                          <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                          <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                          <SelectItem value="2">⭐⭐ Poor</SelectItem>
                          <SelectItem value="1">⭐ Very Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback-category">Feedback Category *</Label>
                      <Select
                        value={feedbackForm.category}
                        onValueChange={(value) => setFeedbackForm({ ...feedbackForm, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website Design</SelectItem>
                          <SelectItem value="features">Features</SelectItem>
                          <SelectItem value="performance">Performance</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="suggestion">Suggestion</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback-message">Your Feedback *</Label>
                      <Textarea
                        id="feedback-message"
                        placeholder="Please share your thoughts, suggestions, or comments..."
                        value={feedbackForm.feedback}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, feedback: e.target.value })}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <SuccessPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title={popupData.title}
          message={popupData.message}
        />
      </>
    )
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Help Center</h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            MyBuddyPH Help Center is your one-stop solution for resolving concerns, providing feedback, and staying
            connected with us. We are committed to ensuring a seamless and hassle-free experience for all our users.
          </p>
        </div>
      </section>

      {/* Help Options */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* File a Dispute */}
            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl mb-4">File a Dispute</CardTitle>
                <CardDescription className="text-lg">
                  Submit your dispute for resolution through our Dispute resolution system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setActiveForm("dispute")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
                >
                  File a Dispute
                </Button>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Contact Support</CardTitle>
                <CardDescription className="text-lg">
                  We're here to help! Whether you have questions or need assistance feel free to reach out to us and
                  we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setActiveForm("support")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Give us feedback */}
            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Give us a feedback</CardTitle>
                <CardDescription className="text-lg">
                  If you have comments or suggestions, Please feel free if you want to share your feedback with us.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setActiveForm("feedback")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                >
                  Give Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
