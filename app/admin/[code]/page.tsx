import { AdminRoom } from "@/components/admin-room"

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params

  return <AdminRoom code={code.toUpperCase()} />
}
