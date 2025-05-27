import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Connect with Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Connect with Us!</h3>
            <p className="text-gray-600">MyBuddyPH, Connectivity made easy!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500">Powered by mybuddyph.com</p>
          </div>

          {/* Policies and Guidelines */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Policies and Guidelines</h3>
            <div className="space-y-2">
              <Link href="/legal-policies" className="block text-gray-600 hover:text-black transition-colors">
                Legal and Policies section
              </Link>
              <Link href="/user-guidelines" className="block text-gray-600 hover:text-black transition-colors">
                MyBuddyPH User Guidelines
              </Link>
              <Link href="/faqs" className="block text-gray-600 hover:text-black transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          {/* Need Help */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Need Help?</h3>
            <Link href="/help-center" className="block text-gray-600 hover:text-black transition-colors">
              Visit our Help Center
            </Link>
            <p className="text-sm text-gray-500">© 2025 mybuddyph.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
