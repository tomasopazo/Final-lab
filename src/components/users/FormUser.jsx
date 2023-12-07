import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';






function UserLoginForm() {
  const toast = useRef(null);

  const show = (data) => {
    toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: data.value });
  };
  const handleSubmit = async (values) => {
    try {
      // Realizar la solicitud POST a la API
      const response = await fetch('http://localhost:3000/api/user/NewUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Mostrar el mensaje de éxito si la solicitud es exitosa
        show(values);
      } else {
        // Mostrar un mensaje de error si la solicitud falla
        const errorData = await response.json();
        toast.current.show({ severity: 'error', summary: 'Error', detail: errorData.message });
      }
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error interno del servidor.' });
    }
  };



  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-center text-2xl font-bold leading-9 text-gray-900">
                Agregar un nuevo Usuario
              </h2>
              <span className="p-float-label">
                <Toast ref={toast} />
                <Field
                  name="username"
                  type="text"
                  placeholder="Username"
                  className={classNames({ 'p-invalid': touched.username && errors.username })}
                />
                {errors.username && touched.username && (
                  <small className="p-error">{errors.username}</small>
                )}
              </span>
              <span className="p-float-label">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  className={classNames({ 'p-invalid': touched.email && errors.email })}
                />
                {errors.email && touched.email && (
                  <small className="p-error">{errors.email}</small>
                )}
              </span>
              <span className="p-float-label">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={classNames({ 'p-invalid': touched.password && errors.password })}
                />
                {errors.password && touched.password && (
                  <small className="p-error">{errors.password}</small>
                )}
              </span>
              <div>
                <Button
                  type="submit"
                  label="Ingresa Usuario Nuevo"
                  className="w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default UserLoginForm;
