import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apis from "../api/akunToko";
import Cookies from "js-cookie";

const LoginAplikasiKasir = () => {
    const {idUser} = useParams();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Data Tidak Boleh Kosong')
        }
        else {
            const dataAkun = {username, password};
            try{
                const response = await apis.login(idUser,dataAkun);
                const cookies = document.cookie
                console.log(cookies)
                if (cookies) {
                    alert('Login Berhasil')
                    Cookies.set('kasirCookie', cookies, {sameSite: 'none', secure: true});
                    navigate(`/${idUser}/transaksi`)
                }
                else {
                    alert('Login Gagal')
                }
            } catch (error) {
                console.error(error);
                alert('GAGALLLLL')
            }
        }
    }
    return(
        <div className= "fixed top-0 left-0 w-full h-full bg-gambar bg-no-repeat bg-center bg-cover">
            <div className="flex bg-biru  w-[1050px] py-10 m-auto mt-52">
                {/* Form Login */}
                <div className="p-10 ">
                    <h1 className="text-lg font-bold leading-tight tracking-tight text-white md:text-4xl mb-11 ml-36">
                        Login Aplikasi Kasir
                    </h1>
                    <form className="space-y-4 md:space-y-6  w-80 ml-20" >
                        <div>
                            <label for="text" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Username
                            </label>
                            <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md 
                            rounded-full focus:ring-primary-600 focus:border-primary-600 w-80 h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="username" required="" value={username}
                            onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-lg font-medium text-white dark:text-white"
                            >
                                Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="••••••••" 
                            className="bg-gray-50 border mb-7 border-gray-300 text-gray-900 sm:text-sm 
                            rounded-full focus:ring-primary-600 focus:border-primary-600 w-80 h-12  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>

                        <button type="submit" className=" w-36 ml-20  text-white bg-[#2A628F] bg-primary-600 hover:bg-primary-700 focus:ring-4 
                        focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center 
                        dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={loginHandler}
                        >
                            Login
                        </button>
                    </form>
                </div>
                {/* Gambar */}
                <div className=" ">
                    <img src="/src/img/2123-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoginAplikasiKasir;
