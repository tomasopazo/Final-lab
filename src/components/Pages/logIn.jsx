import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { useNavigate } from 'react-router-dom';

function UserLoginForm() {
    const toast = useRef(null);
    const navigate = useNavigate();

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: data.value });
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const response = await fetch('http://localhost:3000/api/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    });

                    if (response.ok) {
                        const responseData = await response.json();
                        console.log('Respuesta de la API:', responseData);
                        localStorage.setItem('token', responseData.token);
                      
                        // Navega a la página de inicio después de un inicio de sesión exitoso
                        navigate('/home');
                      } else {
                        const responseData = await response.json();
                        console.log('Error al enviar la solicitud:', responseData);
                      
                        alert('Error al iniciar sesión');
                      }
                      
                } catch (error) {
                    console.error('Error al enviar la solicitud:', error);

                    alert('Error al iniciar sesión');
                }

                setSubmitting(false);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <div className="flex flex-col items-center justify-center w-full md:w-1/2">
                    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-center text-2xl font-bold leading-9 text-gray-900">
                                Iniciar sesión
                            </h2>
                            <span className="p-float-label">
                                <Toast ref={toast} />
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    autoComplete="username"
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
                                    label="Ingresar"
                                    className="w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    );
}

export default UserLoginForm;
