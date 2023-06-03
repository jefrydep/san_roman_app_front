import { createUserRequest, getUserRequest } from "@/helpers/users";
import { useUsers } from "@/hooks/useUser";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
interface MyFormValues {
  name: string;
  documentNumber: string;
  password: string;
}
const FormUser = () => {
  const [showModal, setShowModal] = useState(false);
  const {createUser}= useUsers()
  const onSubmit = async (user: MyFormValues) => {
    // resetform();

    setShowModal(false);
    // console.log({ name, documentNumber, password });
    // await createUserRequest({ name, documentNumber, password });
    // createUser({name,documentNumber,password})
    createUser(user)

    // console.log({ values });
  };




  return (
    <>
      <div className="text-center px-5 flex flex-col   gap-3 rounded-lg rounded-b-none  py-5 bg-white">
        {!showModal ? (
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="flex   justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar +
          </button>
        ) : null}

        {/* vamos a centrar  un modal con css */}

        {showModal && (
          <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-90  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
            <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
              <h3>Crear Usuario</h3>
              <Formik
                initialValues={{
                  name: "",
                  documentNumber: "",
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
                    name="name"
                    placeholder="Jefry Palomino"
                  />
                  <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                    Dni
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="documentNumber"
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

                  <div className="flex gap-4 justify-center mt-4">
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

        <form className=" " action="">
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Buscar Por Dni"
              className="px-3 border text-gray-400 py-2 rounded-md outline-gray-400 shadow-sm"
            />
            <button className="border rounded-md px-6 hover:text-white hover:bg-slate-700 hover:font-bold">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUser;
