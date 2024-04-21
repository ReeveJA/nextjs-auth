export default function UserProfile({params} : any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-bold text-slate-800 m-2">Profile</h1>
            <hr />
            <p className="text-4xl m-4">User ID - 
                <span className="p-1 m-1 border-2 border-black rounded-xl text-black">{params.id}</span>
            </p>
        </div>
    )
}