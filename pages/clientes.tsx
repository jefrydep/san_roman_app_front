import Layout from "@/components/Layout";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const clientes = () => {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = () => {};
  return (
    <>
    <Layout>

      <div className=" bg-white rounded-lg my-3">
        <h2 className="text-center py-4 font-bold text-lg text-blue-600">
          Modulo de clientes
        </h2>
        <div className="flex justify-around   py-3">
          <div className="bg-blue-500 rounded-lg text-center  px-5 mr-4  text-white font-bold text-lg">
            <h2>Total de clientes</h2>
            <div>450</div>
          </div>
          <div className="bg-blue-500 rounded-lg text-center px-5 text-white font-bold text-lg">
            <h2>clientes al credito</h2>
            <div>10</div>
          </div>
        </div>
        <hr />
      </div>

      <div className="text-center flex flex-col items-center gap-3 rounded-lg rounded-b-none  py-5 bg-white ">
        {!showModal ? (
          <button
          onClick={() => {
            setShowModal(true);
          }}
          className="rounded-lg    text-white font-bold  px-2 py-1 bg-blue-500 "
          >
            Agregar
          </button>
        ) : null}
        {showModal && (
          <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-90  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
            <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
              <div className="mb-10">
                <h3 className="">Registrar Cliente</h3>
              </div>
              <Formik
                initialValues={{
                  userName: "",
                  dni: "",
                  password: "",
                }}
                onSubmit={onSubmit}
                >
                <Form className="grid lg:grid-cols-2 gap-4">
                  <div className="mb-2">
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Dni/Ruc
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="userName"
                      placeholder="47845112"
                      />
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Cliente(Nombres y Apellidos)
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="dni"
                      placeholder="Jefry Palomino Mayta"
                      />
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Genero
                    </label>

                    <Field
                      as="select"
                      className="shadow  border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="genero"
                      placeholder="Maculino/femenino"
                      >
                      <option value="select">Seleccione...</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                    </Field>
                  </div>

                  <div className="lg:border-l-2 lg:pl-8">
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      placeholder="jefrydep@gmail.com"
                      />
                    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                      Fecha de Nacimiento
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="date"
                      name="nacimiento"
                      placeholder="31/07/1998"
                      />
                  </div>
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
                      Guardar
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </div>

     
        <div className="grid grid-cols-3 sm:grid-cols-5 px-4 h-10 gap-3 content-center text-white font-bold bg-blue-500">
          <div className="hidden sm:block">Nro</div>
          <div className="">
            <h2>Dni/Ruc</h2>
          </div>
          <div className=" ">
            <h2>Nombre</h2>
          </div>
          <div className="hidden sm:block">
            <h2>Telefono</h2>
          </div>

          <div className="  ">
            <h2>Accciones</h2>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-4 py-3 grid-cols-3 sm:grid-cols-5   ">
          <div className=" content-center hidden sm:grid ">
            <h2>1</h2>
          </div>
          <div className=" content-center grid ">
            <h2>45785645</h2>
          </div>
          <div className="  grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="  font-bold hidden sm:grid content-center ">
            <h2 className="text-green-500">958205138</h2>
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
      
        </Layout>
    </>
  );
};

export default clientes;
