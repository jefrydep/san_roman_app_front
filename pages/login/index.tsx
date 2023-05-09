import Layout from '@/components/Layout'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="bg-[url('/assets/images/robot.jpg')] h-screen flex justify-center items-center">
<div className="flex  mx-9 opacity-80 shadow-md  flex-col justify-center  bg-white  w-max bg-  px-6 py-12 lg:px-8 rounded-2xl ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Ingresa Con Tu Cuenta</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label   className="block text-sm font-medium leading-6 text-gray-900">Dni</label>
        <div className="mt-2">
          <input placeholder='75481254' required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input placeholder='***************' id="password" name="password" type="password"   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
     ¿No tienes cuenta?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Comunicate con un Administrador</a>
    </p>
    <p className='text-center mt-3 text-sm text-gray-500'>© 1997-2023 Jefrydep@gmail.com Inc. Todos los derechos reservados.</p>
  </div>
</div>

    </div>
  )
}

export default LoginPage