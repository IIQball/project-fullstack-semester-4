import img1 from '../img/img1.jpeg';
import img5 from '../img/img7.jpeg';
import img4 from '../img/img4.jpg';
import img6 from '../img/img3.jpg';
import img7 from '../img/img8.jpeg';
const Data = {
    productData:[
        {
            id:1,
            img: img1,
            title : 'Kaos polos',
            desc :'',
            price:75000,
        },
        {
            id:2,
            img: img5,
            title : 'Celana jeans',
            desc :'',
            price:200000,

        },
        {
            id:3,
            img: img4,
            title : 'Celana pendek',
            desc :'',
            price:100000,

        },
        {
            id:4,
            img: img6,
            title : 'Jaket',
            desc :'',
            price:300000,

        },
        {
            id:4,
            img: img7,
            title : 'Kaos Olahraga',
            desc :'',
            price:60000,

        },
    ]
}

export default Data;

import { useEffect, useState } from "react";
import axios from "axios";

const UpdateMhs = ({ fetchData, editMhs }) => {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [programStudi, setProgramStudi] = useState("Teknik Informatika");

  useEffect(() => {
    if (editMhs) {
      setNim(editMhs.nim);
      setNama(editMhs.nama);
      setAngkatan(editMhs.angkatan);
      setProgramStudi(editMhs.prodi);
    } else {
      setNim("");
      setNama("");
      setAngkatan("");
      setProgramStudi("Teknik Informatika");
    }
  }, [editMhs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMhs = {
      nim: nim,
      nama: nama,
      angkatan: angkatan,
      prodi: programStudi,
    };

    try {
      if (editMhs) {
        await axios.put(
          `http://localhost:5000/mahasiswa/${editMhs.nim}`,
          newMhs
        );
      } else {
        await axios.put("http://localhost:5000/mahasiswa", newMhs);
      }
      fetchData();
      hideForm();
    } catch (error) {
      console.error(error);
    }
  };

  const hideForm = () => {
    const close = document.querySelector(".tambah-kategori");
    close.classList.add("hidden");
  };

  return (
    <>
      <div
        className="tambah-kategori bg-white hidden w-1/2 mx-auto rounded-lg shadow-lg justify-center items-center bg-form p-40 left-0 right-0 top-0 bottom-0 fixed z-0"
        style={{ zIndex: 1 }}
      >
        <h1 className="text-2xl font-bold">Input Mahasiswa</h1>
        <div className="bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="nim"
                className="block text-gray-700 font-bold mb-2"
              >
                NIM:
              </label>
              <input
                type="text"
                id="nim"
                className="shadow appearance-none border rounded w-full py-2 px-3 
                          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="ex: 1121100100"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="nama"
                className="block text-gray-700 font-bold mb-2"
              >
                Nama:
              </label>
              <input
                type="text"
                id="nama"
                className="shadow appearance-none border rounded w-full py-2 px-3 
                          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="ex: Nindi"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="angkatan"
                className="block text-gray-700 font-bold mb-2"
              >
                Angkatan:
              </label>
              <input
                type="text"
                id="angkatan"
                className="shadow appearance-none border rounded w-full py-2 px-3 
                          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="ex: 2021"
                value={angkatan}
                onChange={(e) => setAngkatan(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="program-studi"
                className="block text-gray-700 font-bold mb-2"
              >
                Program Studi:
              </label>
              <select
                id="program-studi"
                className="shadow appearance-none border rounded w-full py-2 px-3 
                          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={programStudi}
                onChange={(e) => setProgramStudi(e.target.value)}
              >
                <option value="Teknik Informatika">Teknik Informatika</option>
                <option value="Manajemen Informatika">
                  Manajemen Informatika
                </option>
              </select>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button onClick={hideForm} className="font-semibold text-xl">
                Batal
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              >
                {editMhs ? "Update" : "Tambah"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateMhs;

import axios from "axios";
import { useEffect, useState } from "react";
import UpdateMhs from "./FormEdit";

const TableMhs = () => {
  const [mhs, setMhs] = useState([]);
  const [editMhs, setEditMhs] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/mahasiswa");
      setMhs(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const hapus = async (nimMhs) => {
    try {
      await axios.delete(`http://localhost:5000/mahasiswa/${nimMhs}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const edit = (mhs) => {
    setEditMhs(mhs);
    const form = document.querySelector(".tambah-kategori");
    form.classList.remove("hidden");
  };

  return (
    <>
      <div className="relative overflow-x-auto mx-10">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                NIM
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Angkatan
              </th>
              <th scope="col" className="px-6 py-3">
                Prodi
              </th>
              <th scope="col" className="px-6 py-3">
                Menu
              </th>
            </tr>
          </thead>
          <tbody>
            {mhs.map((i) => (
              <tr
                key={i.nim}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i.nim}
                </th>
                <td className="px-6 py-4">{i.nama}</td>
                <td className="px-6 py-4">{i.angkatan}</td>
                <td className="px-6 py-4">{i.prodi}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-around">
                    <button
                      onClick={() => edit(i)}
                      className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => hapus(i.nim)}
                      className="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <UpdateMhs fetchData={fetchData} editMhs={editMhs} />
      </div>
    </>
  );
};

export default TableMhs;