import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import ClientFormEmail from "../../emails/client-form-email"
import VAFormEmail from "../../emails/va-form-email"
import DisputeFormEmail from "../../emails/dispute-form-email"
import SupportFormEmail from "../../emails/support-form-email"
import FeedbackFormEmail from "../../emails/feedback-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    let emailComponent
    let subject = ""

    switch (type) {
      case "client":
        emailComponent = ClientFormEmail({ data })
        subject = `New Client Request - ${data.fullName}`
        break
      case "va":
        emailComponent = VAFormEmail({ data })
        subject = `New VA Application - ${data.fullName}`
        break
      case "dispute":
        emailComponent = DisputeFormEmail({ data })
        subject = `New Dispute Filed - ${data.taskId}`
        break
      case "support":
        emailComponent = SupportFormEmail({ data })
        subject = `Support Request - ${data.subject}`
        break
      case "feedback":
        emailComponent = FeedbackFormEmail({ data })
        subject = `New Feedback - ${data.category}`
        break
      default:
        return NextResponse.json({ error: "Invalid form type" }, { status: 400 })
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "MyBuddyPH <noreply@mybuddyph.com>",
      to: ["edel@mybuddyph.com"],
      subject,
      react: emailComponent,
    })

    if (error) {
      console.error("Email error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: emailData })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
