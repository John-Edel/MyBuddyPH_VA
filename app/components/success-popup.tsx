"use client"

import { useEffect } from "react"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export default function SuccessPopup({ isOpen, onClose, title, message }: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Auto close after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-slide-up">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{message}</p>
          <Button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700 text-white">
            Got it!
          </Button>
        </div>
      </div>
    </div>
  )
}
