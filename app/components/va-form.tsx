"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { UserCheck } from "lucide-react"
import SuccessPopup from "./success-popup"

export default function VAForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    skills: [] as string[],
    internetSpeedScreenshot: null as File | null,
    videoIntro: "",
    resume: null as File | null,
    whyHire: "",
  })
  const [showPopup, setShowPopup] = useState(false)

  const skillOptions = [
    "General Virtual Assistant (GVA)",
    "Property Management Virtual Assistant (PMV)",
    "Customer Service Virtual Assistant (CVA)",
    "Lead Generation/Appointment Setter (LIC)",
    
  ]

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
          type: "va",
          data: formData,
        }),
      })

      if (response.ok) {
        setShowPopup(true)
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          skills: [],
          internetSpeedScreenshot: null,
          videoIntro: "",
          resume: null,
          whyHire: "",
        })
      } else {
        console.error("Failed to send email")
        alert("There was an error submitting your application. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting your application. Please try again.")
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      skills: checked ? [...prev.skills, skill] : prev.skills.filter((s) => s !== skill),
    }))
  }

  const handleFileChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  return (
    <>
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Looking for Online Work?</CardTitle>
          <CardDescription className="text-lg">Join our pool of talented professionals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="va-name">Full Name *</Label>
              <Input
                id="va-name"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="va-email">Email *</Label>
              <Input
                id="va-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="va-phone">Phone *</Label>
              <Input
                id="va-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="va-location">City/Province *</Label>
              <Input
                id="va-location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Skillset (Select all that apply) *</Label>
              <div className="grid grid-cols-1 gap-3">
                {skillOptions.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={skill}
                      checked={formData.skills.includes(skill)}
                      onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                    />
                    <Label htmlFor={skill} className="text-sm font-normal">
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="internet-speed">Internet Speed Screenshot *</Label>
              <Input
                id="internet-speed"
                type="file"
                accept=".png,.jpg,.jpeg,.gif,.webp"
                onChange={handleFileChange("internetSpeedScreenshot")}
                required
              />
              <p className="text-sm text-gray-600">
                Please upload a screenshot from speedtest.net or similar service
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="video-intro">Short Video Intro (Loom/Vimeo link) *</Label>
              <Input
                id="video-intro"
                placeholder="https://..."
                value={formData.videoIntro}
                onChange={(e) => handleChange("videoIntro", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">Resume Upload (PDF/DOC) *</Label>
              <Input 
                id="resume" 
                type="file" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileChange("resume")} 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="why-hire">Why should we hire you? *</Label>
              <Textarea
                id="why-hire"
                placeholder="Tell us about your experience, skills, and what makes you unique..."
                value={formData.whyHire}
                onChange={(e) => handleChange("whyHire", e.target.value)}
                rows={4}
                required
              />
            </div>

            <Button onClick={handleSubmit} className="w-full bg-black text-white hover:bg-gray-800">
              Submit Application
            </Button>
          </div>
        </CardContent>
      </Card>

      <SuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Application Submitted Successfully!"
        message="Thank you for applying to become a Buddy! We have received your application and will review it within 2-3 business days. If your profile matches our requirements, our team will contact you for the next steps."
      />
    </>
  )
}