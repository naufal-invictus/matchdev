import { TestContainer } from "@/components/test-container"
import { allTests } from "@/lib/test-data"
import { notFound } from "next/navigation"

interface TestPageProps {
  params: Promise<{
    testId: string
  }>
}

export default async function TestPage({ params }: TestPageProps) {
  const { testId } = await params
  const test = allTests.find((t) => t.id === testId)

  if (!test) {
    notFound()
  }

  return <TestContainer test={test} />
}
