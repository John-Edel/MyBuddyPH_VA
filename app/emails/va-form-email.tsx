import { Html, Head, Body, Container, Section, Text, Heading, Hr, Row, Column } from "@react-email/components"

interface VAFormData {
  fullName: string
  email: string
  phone: string
  location: string
  skills: string[]
  internetSpeed: string
  videoIntro: string
  whyHire: string
}

interface VAFormEmailProps {
  data: VAFormData
}

export default function VAFormEmail({ data }: VAFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>New VA Application - MyBuddyPH</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>A new virtual assistant has submitted an application. Here are the details:</Text>

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
                <Text style={label}>Phone:</Text>
                <Text style={value}>{data.phone}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Location:</Text>
                <Text style={value}>{data.location}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Skills:</Text>
                <Text style={value}>{data.skills.join(", ")}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Internet Speed:</Text>
                <Text style={value}>{data.internetSpeed}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Video Intro:</Text>
                <Text style={value}>{data.videoIntro}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Why should we hire you:</Text>
                <Text style={value}>{data.whyHire}</Text>
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
