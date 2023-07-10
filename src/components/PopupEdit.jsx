import axios from "axios";
import { useEffect, useState } from "react";


const PopupEdit = ({ editAkun,setData }) => {
    // const {idToko} = useParams()
    // const [data, setData] = useState ([])
    const [nama_toko, setNamaToko] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

        setNamaToko(editAkun.namaToko)
        setUsername(editAkun.username)
        setPassword(editAkun.password)
    }, [editAkun]);
    
    const handleEdit = async (e) => {
        e.preventDefault();
        const newAkun = {
            namaToko: nama_toko,
            username : username,
            password : password,
        };

        try {   
            await axios.put(
                `http://localhost:5000/toko/${editAkun.idToko}`,
                newAkun
            );


            setData((prev) => prev.map((data) => {
                if(data.idToko === editAkun.idToko){
                    data.namaToko = nama_toko
                    data.username = username
                    data.password = password
                    return data
                }
                return data
            }))
            hideForm();
        } catch (error) {
            console.error(error);
        }
    };

    const hideForm = () => {
        const close = document.querySelector(".input-edit");
        close.classList.add("hidden");
    }
    
    return(
        <div className= "input-edit hidden fixed top-0 left-0 w-full h-full background-color : rgb(0 0 0);">
            <div className="flex bg-biru w-[1050px] py-16 m-auto mt-52">
                <div className="p-10  bg-gray-500 py-10 w-[700px] m-auto">
                    <h1 className="text-lg text-center font-bold leading-tight tracking-tight text-white md:text-4xl mb-11">
                        Edit Akun Toko
                    </h1>
                    <form onSubmit={handleEdit} className="space-y-4 md:space-y-6 w-80 m-auto">
                        <div>
                            <label htmlFor="nama_toko" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Nama Toko
                            </label>
                            <input name="nama_toko" id="nama_toko" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="ex Nama Toko"
                            defaultValue={nama_toko}
                            onChange={(e) => setNamaToko(e.target.value)}
                            
                            />
                        </div>
                        <div>
                            <label htmlFor="pas" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Username
                            </label>
                            <input id="pas" placeholder="ex username" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-12  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                            onChange={(e) => setUsername(e.target.value)}
                            defaultValue={username}
                            
                            />
                        </div>
                        <div>
                            <label htmlFor="password1" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Password
                            </label>

                            <input type="password" id="password1" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-12  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500"
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                            
                            />
                        </div>
                    
                        <button type="submit" className=" w-full  text-white bg-[#2A628F] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                        rounded-full text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                        
                            Edit
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
export default PopupEdit;