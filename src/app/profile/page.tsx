'use client'
import axios from "axios"
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function UserProfile({params} : any) {

    const router = useRouter()
    const [data, setData] = useState('Nothing')

    const logout = async () => {
            try {
                const logout = await axios.get('/api/users/logout')
                toast.success('Log-out successful')
                router.push('/login')
            } catch (error: any) {
                console.log(error.message);
                toast.error(error.message)
            }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    return (
            <>
                {/* <div className="flex items-start justify-between min-h-screen bg-slate-200">
                    <h3 className="text-2xl m-4 p-2 font-semibold border-2 border-black rounded-lg">Profile</h3>
                    <button 
                    className="text-xl m-4 p-2 font-semibold rounded-lg hover:bg-black hover:text-white"
                    onClick={logout}
                    >Logout |-> </button>
                </div>
                <div className="flex justify-start">
                    <h2>
                        {data === 'Nothing' ? 'Nothing' : <Link href={`/profile/${data}`}></Link>}
                    </h2>
                    <button 
                    className="text-xl m-4 p-2 font-semibold rounded-lg hover:bg-black hover:text-white"
                    onClick={getUserDetails}
                    >Show details </button>
                </div> */}
                <div className="flex items-start justify-between min-h-screen">
                    <div>
                        <h3 className="text-2xl m-4 p-2 font-semibold">Profile -</h3>
                        <h2 className="text-xl m-4 p-2">
                        {data === 'Nothing' ? '******' : <Link href={`/profile/${data}`}>{data}</Link>}
                        </h2>
                        {/* <button 
                        className="text-xl m-4 p-2 font-semibold rounded-lg hover:bg-black hover:text-white"
                        onClick={getUserDetails}
                        >
                        Show details 
                        </button> */}
                    </div>
                    <div>
                        <button 
                            className="text-xl m-4 p-2 font-semibold rounded-lg hover:bg-black hover:text-white"
                            onClick={getUserDetails}
                        >
                        Show details 
                        </button>
                        <button 
                            className="text-xl m-4 p-2 font-semibold rounded-lg hover:bg-black hover:text-white"
                            onClick={logout}
                        >Logout |-> </button>
                    </div>
                </div>
            </>
    )
}
