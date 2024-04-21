'use client'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'
import toast from "react-hot-toast"


export default function SignupPage () {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: ''
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)

    const [loading, setLoading] = React.useState(false)

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/signup', user)
            console.log('Sign-up success', response.data);
            router.push('/login')
        } catch (error: any) {
            console.log('Sign-up failed', error.message)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl font-bold text-slate-800 m-2">{loading ? 'Processing' : 'Sign-up'}</h1>
        <hr />
        <label htmlFor="username">Username:</label>
        <input
            id='username'
            type="text"
            value={user.username}
            onChange={(event) => setUser({...user, username: event.target.value})}
            className="rounded p-2 m-1"
        />
        <hr />
        <label htmlFor="email">Email:</label>
        <input
            id='email'
            type="text"
            value={user.email}
            onChange={(event) => setUser({...user, email: event.target.value})}
            className="rounded p-2 m-1"
        />
        <hr />
        <label htmlFor="password">Password:</label>
        <input
            id='password'
            type="password"
            value={user.password}
            onChange={(event) => setUser({...user, password: event.target.value})}
            className="rounded p-2 m-1"
        />
        <button 
            className="text-sm font-semibold border-2 border-slate-500 px-2 py-2 m-4 rounded-lg hover:text-white hover:bg-black"
            onClick={onSignup}
        >
            {/* {buttonDisabled ? 'Enter your details' : 'Create Account'} */}
            Create Account
        </button>
        <Link 
            href='/login'
            className="text-sm hover:font-semibold my-3"
        >Already have an account? Log-in</Link>
    </div>
    )
}