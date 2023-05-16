import Layout from "@/components/Layout";
import DescribeUser from "@/components/users/DescribeUser";
import { UsersResponse } from "@/userResponseInterface";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { url } from "inspector";
import { useEffect, useState } from "react";

const usuarios = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudE51bWJlciI6IjY3NTAyOTc5IiwiaWF0IjoxNjgxNTc2ODc4LCJleHAiOjE2ODE1ODQwNzh9.FAmaicqIFFax9yzSJLsxhlz225uELWuVr4VTeD8oqbg";
  const URL = "http://localhost:3000/api/auth";

  const getAllUser = () => {
    axios
      .get(URL)
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUser();
  }, []);
  console.log(users);
  interface MyFormValues {
    userName: string;
    dni: string;
    password: string;
  }
  const onSubmit = (
    { userName, dni, password }: MyFormValues,
    // values: MyFormValues
    // { resetform }: any
    
  ) => {
    // resetform();
    // if( values  isEmpt)return;

    setShowModal(false);
    console.log({ userName, dni, password });
    // console.log({ values });
  };
  return (
    <>
      <Layout>
        <div className=" bg-white rounded-lg my-3">
          <h2 className="text-center py-4 font-bold text-lg text-blue-600">
            Modulo de usuarios
          </h2>
          <div className="flex justify-around   py-3">
            <div className=" items-center px-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
              <UserIcon className="h-12 p-2  bg-orange-400 rounded-full" />
              <div>
                <h2 className="text-gray-400">Total de usuarios</h2>
                <div className="text-orange-400">45</div>
              </div>
            </div>
            <div className=" items-center px-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
              <UserPlusIcon className="h-12 p-2  bg-green-400 rounded-full" />
              <div>
                <h2 className="text-gray-400">Total de usuarios</h2>
                <div className="text-orange-400">45</div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="text-center flex flex-col items-center gap-3 rounded-lg rounded-b-none  py-5 bg-white">
          {!showModal ? (
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Agregar
            </button>
          ) : null}

          {/* vamos a centrar  un modal con css */}

          {showModal && (
            <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-90  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
              <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
                <h3>Crear Usuario</h3>
                <Formik
                  initialValues={{
                    userName: "",
                    dni: "",
                    password: "",
                  }}
                  onSubmit={onSubmit}
                >
                  <Form className="flex flex-col gap-2">
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Usuario
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="userName"
                      placeholder="Jefry Palomino"
                    />
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Dni
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="dni"
                      placeholder="78459865"
                    />
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Contraseña
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      name="password"
                      placeholder="************"
                    />
                    {/* <input
                className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Jefry Palomino"
              /> */}
                    {/* <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                    Dni
                  </label>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="75894565"
                  />
                  <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                  </label>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="************"
                /> */}

                    <div className="flex gap-4 justify-center mt-4">
                      <button
                        onClick={() => {
                          setShowModal(false);
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Cancelar
                      </button>
                      <button
                        // onClick={() => {
                        //   setShowModal(false);
                        // }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          )}

          <form className="  flex flex-col  gap-3  " action="">
            {/* {showModal && (
            <div className="flex flex-col   items-center gap-2">
            <input
            className="px-3 py-1 rounded-2xl outline-none  w-64  "
            type="text"
            placeholder="Jefry Palomino"
            />
            <input
            className="px-3 py-1 rounded-2xl outline-none  w-64  "
            type="text"
            placeholder="Jefry Palomino"
              />
              <input
                className="px-3 py-1 rounded-2xl outline-none  w-64  "
                type="text"
                placeholder="Jefry Palomino"
                />
                <input
                className="px-3 py-1 rounded-2xl outline-none  w-64  "
                type="text"
                placeholder="Jefry Palomino"
                />
                <div>
                <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="bg-orange-400 rounded-2xl text-white font-bold px-3 mx-4"
                >
                Enviar
                </button>
                <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="bg-orange-400 rounded-2xl text-white font-bold px-3 mx-4"
                >
                Cancelar
                </button>
                </div>
                </div>
              ) } */}

            <section className="flex gap3">
              <label className="text-gray-500  mr-4" htmlFor="">
                Buscar:
              </label>
              <input
                className="bg-gray-200 a  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1C5CFF]"
                type="text"
                placeholder="Jefry Palomino"
              />
            </section>
          </form>
        </div>

        <main>
          <div className="grid grid-cols-3 sm:grid-cols-5 content-center shadow-md  px-4 h-10 gap-3 text-white font-bold bg-[#1C5CFF]">
            <div className=" hidden sm:block ">
              <h2 className="">Id</h2>
            </div>
            <div className="">
              <h2>Nombre</h2>
            </div>
            <div className="  hidden sm:block">
              <h2>Estatus</h2>
            </div>
            <div className="">
              <h2>Rol</h2>
            </div>
            <div className="">
              <h2>Acciones</h2>
            </div>
          </div>
          {/* <div className=" px-4 grid bg-white shadow-md    border gap-3 py-3 grid-cols-3 sm:grid-cols-5   ">
            <div className=" hidden sm:grid content-center">
              <h2>1</h2>
            </div>
            <div className="  grid content-center">
              <h2>Rosi-Mami</h2>
            </div>
            <div className=" hidden sm:grid   content-center ">
              <select className=" w-20 lg:w-max px-3 py-1 rounded-xl border focus:border-e-red-50 focus:outline-none text-green-400">
                <option value="">Activo</option>
                <option value="">Inactivo</option>
              </select>
            </div>
            <div className="   grid content-center">
              <select className=" px-3 py-1 w-20 lg:w-max rounded-xl border focus:border-e-red-50 focus:outline-none text-gray-500">
                <option value="">User</option>
                <option value="">Admin</option>
                <option value="">SuperUser</option>
              </select>
            </div>
            <div className="  flex gap-1  ">
              <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
                D
              </div>
              <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
                U
              </div>
            </div>
          </div>
            */}

          {users.map((users: UsersResponse, index) => (
            <DescribeUser
              key={users.id}
              id={index + 1}
              name={users.fullName}
              state={users.isActive === true ? "Activo" : "Inactivo"}
              role={users.role[0]}
            />
          ))}
        </main>
      </Layout>
    </>
  );
};

export default usuarios;
