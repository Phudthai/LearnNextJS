'use client'

import {signIn} from 'next-auth/react'

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn('google')
    }
    return (
        <button className="bg-blue-500 text-white p-1 rounded-md m-1 text-lg mx-2" onClick={handleClick}>
            Sign in with google
        </button>
    )
}

export function GithubSignInButton() {
    const handleClick = () => {
        signIn('github')
    }

    return (
        <button className="bg-pink-500 text-white p-1 rounded-md m-1 text-lg" onClick={handleClick}>
            Sign in with github
         </button>
    )
}