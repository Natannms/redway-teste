import { Formik, Field, Form, FormikHelpers } from 'formik';
import { ZodError, z } from 'zod';

interface Values {
  email: string;
}

function App() {
  // async function setEmail() {
  //   const response = await fetch('http://localhost:4000')
  //   const data = await response.json()
  //   setMessage(data.message)
  // }

  const validationSchema = z.object({
    email: z.string().email({ message: 'Digite um endereço de e-mail válido' }),
  });

  // useEffect(() => {
  //   getName()
  // }, [])
  return (
    <div className='bg-gray-800 w-screen h-screen py-20'>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            try {
              const zodValidation = validationSchema.parse(values);
              console.log(zodValidation);
            } catch (error) {
              if (error instanceof ZodError) {
                const errorMessage = error.errors[0]?.message;
                console.log(errorMessage);
              }
            }
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="max-w-sm mx-auto">
          <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
          <div className="flex flex-col gap-4">
            <Field
              type="email"
              name="email"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email@example.com"
            />
            <button type='submit' className='bg-indigo-500 text-white py-2 rounded-md'>
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default App
