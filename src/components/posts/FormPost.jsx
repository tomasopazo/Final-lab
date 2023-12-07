import React, {useRef, useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Toast } from 'primereact/';

function PostForm() {
  const toast = useRef(null);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:3000/api/post/NewPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Respuesta de la API:', responseData);

        toast.current.show({
          severity: 'success',
          summary: 'Publicación agregada correctamente',
        });
      } else {
        const responseData = await response.json();
        console.log('Error al enviar la solicitud:', responseData);

        toast.current.show({
          severity: 'error',
          summary: 'Error al agregar la publicación',
        });
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);

      toast.current.show({
        severity: 'error',
        summary: 'Error al agregar la publicación',
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-1/2">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <Formik initialValues={{
          fecha: '',
          descripcion: '',
          imagen: '',
          hora: '',
          ubicacion: '',
          userId: '',
        }} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="mt-6 space-y-6">
              <h2 className="text-center text-2xl font-bold leading-9 text-gray-900">
                Agregar una nueva Publicación
              </h2>

              <div className="flex flex-col space-y-2">
                <Field name="fecha" type="date" placeholder="Fecha" />
                <Field name="descripcion" type="text" placeholder="Descripción" />
                <Field name="imagen" type="text" placeholder="Imagen" />
                <Field name="hora" type="time" placeholder="Hora" />
                <Field name="ubicacion" type="text" placeholder="Ubicación" />
                <Field name="userId" type="text" placeholder="User ID" />

                <Button
                  type="submit"
                  label="Publicar"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PostForm;
