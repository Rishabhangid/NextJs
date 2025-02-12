"use client"
import { useRouter } from "next/navigation"



export default function LearnRoute() {
  const router = useRouter()
  console.log(router, "---------------router---------------");
  return (
    <>
      <div>learnROute</div>
      <button type="button" onClick={() => router.push("/admin/dashboard")}> Go to Dashboard</button>
    </>  
  )
}
