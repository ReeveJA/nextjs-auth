'use client'
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"


export default function LoginPage () {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', user)
            console.log('Log-in success', response.data);
            toast.success('Log-in successful')
            router.push('/profile')
        } catch (error: any) {
            console.log('Log-in failed', error.message);
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl font-bold text-slate-800 m-2">{loading ? 'Processing' : 'Log-in'}</h1>
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
            onClick={onLogin}
        >
            Log-in
        </button>
        <Link 
            href='/signup'
            className="text-sm hover:font-semibold my-3"
        >Don't have an account? Sign-up</Link>
    </div>
    )
}