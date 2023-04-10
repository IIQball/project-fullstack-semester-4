import { useState } from "react"

const TestState = ()=>{
    const [users,setUser] = useState([
        {
            "nama" : "aldi",
            "alamat" : "banyuwangi"
        }
    ])
    const [nama,setNama] = useState('')
    const [alamat,setAlamat] = useState('')

    const tambahUser = ()=>{
        setUser([...users,{"nama":nama,"alamat":alamat}])
    }
    console.log(users)
    return(
        <>
            <div className="bg-sky-200 text-4xl flex flex-col p-5 gap-2">
                {nama} ::: {alamat}
                <input type="text" placeholder="Nama" className="border-2" value={nama} onChange={(e)=>(setNama(e.target.value))}/>
                <input type="text" placeholder="Alamat" className="border-2" value={alamat} onChange={(e)=>(setAlamat(e.target.value))}/>
                <button className="bg-green-300 text-white text-lg" onClick={tambahUser}>tambah User</button>
                {users.map((user,idx)=>(
                    <div>
                        <p>{user.nama}</p>
                        <p>{user.alamat}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default TestState