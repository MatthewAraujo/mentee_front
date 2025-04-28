"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getToken } from "@/utils/cookies"
import { LoginForm } from "@/components/login-form"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const token = getToken()

    if (token) {
      router.push("/")
    }
  }, [router])

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
