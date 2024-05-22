'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const router = useRouter()

    useEffect(() => {
        router.push('https://duasporuma.com.br/pesquisa/?sck=&utm_source=whatsapp&utm_medium=06.24&utm_content=comunidade&utm_campaign=06.24&utm_term=06.24')
    }, [])

    return (
        <></>
    )
}