import Layout from "@/components/Layout";
import { AuthContext } from "@/context/auth";
import { data } from "autoprefixer";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Session } from "inspector";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";
import React, { useContext, useRef } from "react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");
  // console.log(userName.current)
  // console.log(pass.current)
  const router = useRouter();
  const { data: session, status, update } = useSession();
  // const { loginUser } = useContext(AuthContext);

  // const URL = "http://localhost:3000/api/auth/";
  interface MyFormValues {
    documentNumber: string;
    password: string;
  }

  const onLogin = async ({ documentNumber, password }: MyFormValues) =>
    // values: MyFormValues
    // { resetform }: any
    {
      console.log({ documentNumber, password });
      const result = await signIn("credentials", {
        documentNumber,
        password,
        redirect: true,
        callbackUrl: "/",
      });
      if (result?.error) {
        console.log(result.error);
      } else {
        update( )
      }
      return result;

      // resetform();
      // if( values  isEmpt)return;
      // const {data} = await axios.post('http://localhost:3000/api/auth/login',{documentNumber:dni,password:password});
      // const {token,documentNumber}= data;
      // console.log({token,documentNumber});

      // setShowModal(false);
      // console.log({   dni, password });
      // const isValidLogin = await loginUser(documentNumber,password);

      // console.log({ });
    };

  return (
    <div className="bg-[url('/assets/images/robot.jpg')] h-screen flex justify-center items-center">
      <div className="flex  mx-9 opacity-80 shadow-md  flex-col justify-center  bg-white  w-max bg-  px-6 py-12 lg:px-8 rounded-2xl ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresa Con Tu Cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
          <Formik
            initialValues={{
              documentNumber: "",
              password: "",
            }}
            onSubmit={onLogin}
            className="space-y-6"
          >
            <Form>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Dni
                </label>
                <div className="mt-2">
                  <Field
                    placeholder="75481254"
                    type="text"
                    name="documentNumber"
                    required
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <Field
                    placeholder="***************"
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ingresar
                </button>
              </div>
            </Form>
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No tienes cuenta?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Comunicate con un Administrador
            </a>
          </p>
          <p className="text-center mt-3 text-sm text-gray-500">
            © 1997-2023 Jefrydep@gmail.com Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
