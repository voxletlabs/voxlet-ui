"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const TestingPage = () => {

    const router = useRouter()

    router.push('/')

    return (
        <div className='max-w-[85rem] mx-auto px-4 py-[6rem]'>

        </div>
    )
}

export default TestingPage