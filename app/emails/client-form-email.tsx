import { Html, Head, Body, Container, Section, Text, Heading, Hr, Row, Column } from "@react-email/components"

interface ClientFormData {
  fullName: string
  email: string
  companyName: string
  helpType: string
  workSetup: string
  message: string
}

interface ClientFormEmailProps {
  data: ClientFormData
}

export default function ClientFormEmail({ data }: ClientFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>New Client Request - MyBuddyPH</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>A new client has submitted a request to hire a Buddy. Here are the details:</Text>

            <Hr style={hr} />

            <Row>
              <Column>
                <Text style={label}>Full Name:</Text>
                <Text style={value}>{data.fullName}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Email:</Text>
                <Text style={value}>{data.email}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Company Name:</Text>
                <Text style={value}>{data.companyName || "Not provided"}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Type of Help Needed:</Text>
                <Text style={value}>{data.helpType}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Preferred Work Setup:</Text>
                <Text style={value}>{data.workSetup}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Message:</Text>
                <Text style={value}>{data.message || "No additional message"}</Text>
              </Column>
            </Row>

            <Hr style={hr} />

            <Text style={footer}>Submitted on: {new Date().toLocaleString()}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const header = {
  padding: "32px 24px",
  backgroundColor: "#000000",
}

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  textAlign: "center" as const,
}

const content = {
  padding: "24px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#374151",
  margin: "16px 0",
}

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#111827",
  margin: "16px 0 4px 0",
}

const value = {
  fontSize: "16px",
  color: "#374151",
  margin: "0 0 16px 0",
  padding: "8px 12px",
  backgroundColor: "#f9fafb",
  borderRadius: "4px",
}

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
}

const footer = {
  fontSize: "12px",
  color: "#6b7280",
  textAlign: "center" as const,
  margin: "32px 0 0 0",
}
