"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase } from "lucide-react"
import SuccessPopup from "./success-popup"

export default function ClientForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    helpType: "",
    workSetup: "",
    message: "",
  })
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Send email
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "client",
          data: formData,
        }),
      })

      if (response.ok) {
        setShowPopup(true)
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          helpType: "",
          workSetup: "",
          message: "",
        })
      } else {
        console.error("Failed to send email")
        alert("There was an error submitting your request. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting your request. Please try again.")
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Looking to Hire a Buddy?</CardTitle>
          <CardDescription className="text-lg">Tell us about your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="client-name">Full Name *</Label>
              <Input
                id="client-name"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="client-email">Email *</Label>
              <Input
                id="client-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name (Optional)</Label>
              <Input
                id="company-name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="help-type">Type of Help Needed *</Label>
              <Select value={formData.helpType} onValueChange={(value) => handleChange("helpType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type of help" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="va">Virtual Assistant</SelectItem>
                  <SelectItem value="csr">Customer Service Representative</SelectItem>
                  <SelectItem value="smm">Social Media Manager</SelectItem>
                  <SelectItem value="gva">General Virtual Assistant</SelectItem>
                  <SelectItem value="webdev">Web Developer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="work-setup">Preferred Work Setup *</Label>
              <Select value={formData.workSetup} onValueChange={(value) => handleChange("workSetup", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select work setup" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fulltime">Full-time</SelectItem>
                  <SelectItem value="parttime">Part-time</SelectItem>
                  <SelectItem value="project">Project-based</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="client-message">Message</Label>
              <Textarea
                id="client-message"
                placeholder="Tell us more about your requirements..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>

      <SuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Request Submitted Successfully!"
        message="Thank you for your interest! We have received your request and will match you with qualified Buddies. Our team will contact you within 24 hours with potential matches."
      />
    </>
  )
}
