import React, {useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apis from "../api/akunToko";


const BuatAkunToko = () => {
    const param = useParams();

    const [namaToko, setNamaToko] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const kirim = async(e) => {
        e.preventDefault();
        try {
            let dataAkun = {
                idUser : param.idUser,
                namaToko : namaToko,
                username : username,
                password : password
            }
            await apis.regAkunToko(dataAkun)

            navigate("/akun-toko");
            alert("oke")
        } catch (error) {
            console.log
        }
    }

    return(
        <div className= "fixed top-0 left-0 w-full h-full bg-gambar2 bg-no-repeat bg-center bg-cover">
            <div className="flex bg-biru  w-[1050px] py-16 m-auto">
                {/* Form Login */}
                <div className="p-10  bg-gray-500 py-10 w-[700px] m-auto">
                    <h1 className="text-lg text-center font-bold leading-tight tracking-tight text-white md:text-4xl mb-11">
                        Buat Akun Toko
                    </h1>
                    <form className="space-y-4 md:space-y-6 w-80 m-auto"  onSubmit={kirim}>
                        <div>
                            <label for="namatoko" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Nama Toko
                            </label>
                            <input type="text" name="text" id="namatoko"
                            value={namaToko} onChange={(e) => setNamaToko(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="masukkan nama toko anda" required
                            />
                        </div>
                        <div>
                            <label for="username" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Username
                            </label>
                            <input type="text" name="text" id="username" placeholder="masukkan username anda" 
                            value={username} onChange={(e) => setUsername(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-12  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="**********" 
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-12  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                            />
                        </div>
                        <div className="flex flex-row">
                            <Link to="/akun-toko">
                            <button type="submit" className=" w-full  text-white bg-red-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                            rounded-full text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Kembali
                            </button>
                            </Link>
                            
                            <button type="submit" className=" w-full  text-white bg-blue-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                            rounded-full text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Buat
                            </button>
                        </div>
                        <div className="flex flex-row">
                            <Link to="/akuntoko">
                            <button type="button" className=" w-full  text-white bg-red-700 hover:bg-red-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                            rounded-full text-md px-12 py-2.5 mt-7 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Kembali 
                            </button>
                            </Link>
                            <p className="text-gray-500">-</p>
                            <button type="submit" className=" w-full  text-white bg-blue-700 hover:bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                            rounded-full text-md px-16 py-2.5 mt-7 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Buat
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BuatAkunToko;