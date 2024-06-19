'use client'
import LoginForm from '@/src/components/LoginForm'
import {signIn } from 'next-auth/react'

export default function SignIn() {
    return (
        <div>
            <LoginForm/>
        </div>
    )
}