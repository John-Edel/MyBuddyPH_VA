import { Html, Head, Body, Container, Section, Text, Heading, Hr, Row, Column } from "@react-email/components"

interface DisputeFormData {
  name: string
  email: string
  taskId: string
  disputeType: string
  description: string
}

interface DisputeFormEmailProps {
  data: DisputeFormData
}

export default function DisputeFormEmail({ data }: DisputeFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>🚨 New Dispute Filed - MyBuddyPH</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>A dispute has been filed and requires immediate attention:</Text>

            <Hr style={hr} />

            <Row>
              <Column>
                <Text style={label}>Name:</Text>
                <Text style={value}>{data.name}</Text>
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
                <Text style={label}>Task ID:</Text>
                <Text style={value}>{data.taskId}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Dispute Type:</Text>
                <Text style={value}>{data.disputeType}</Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Description:</Text>
                <Text style={value}>{data.description}</Text>
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
  backgroundColor: "#dc2626",
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
