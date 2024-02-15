import { Formik, Field, Form } from 'formik';
import { ZodError, z } from 'zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Email } from './types/email';
import EmailList from './components/EmailList';
import { Values } from './types/Values';


function App() {

  const [emails, setEmails] = useState<Email[]>([])
  const validationSchema = z.object({
    email: z.string().email({ message: 'Digite um endereço de e-mail válido' }),
  });
  async function registerEmail(email: string) {
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.text();
      toast(data)
    } catch (error) {
      console.error('Erro na requisição:', error);
      toast("Não foi possivel salvar email. tente novamente");
    }
  }

  async function getEmails() {
    try {
      const response = await fetch('http://localhost:4000/emails', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setEmails(data.emails)
    } catch (error) {
      console.error('Erro na requisição:', error);
      toast("Não foi possivel buscar lista de emails");
    }
  }



  useEffect(() => {
    getEmails()
  }, [])
  return (
    <div className='bg-gray-800 w-full h-full py-4 px-4'>
      <ToastContainer />
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={async (
          values: Values,
        ) => {
          try {
            const zodValidation = validationSchema.safeParse(values);
            if (zodValidation.success) {
              await registerEmail(zodValidation.data.email)
            }
          } catch (error) {
            if (error instanceof ZodError) {
              const errorMessage = error.errors[0]?.message;
              toast(errorMessage);
            }
          }
        }}
      >

        <Form className="p-4 flex w-full items-center justify-center lg:flex-nowrap flex-wrap">
          <p className="text-white px-4 text-3xl mb-4 w-full text-center lg:text-left lgw-3/12">LISTA DE E-MAIL</p>
          <div className='w-full'>
            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Inserir novo email</label>
            <div className="flex lg:flex-row flex-col gap-4">
              <Field
                type="email"
                name="email"
                id="email-address-icon"
                className="bg-gray-50 border lg:w-3/12 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email@example.com"
              />
              <button type='submit' className='bg-indigo-500 text-white py-2 rounded-md lg:w-2/12 w-full'>
                Save
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      <EmailList emails={emails} />
    </div>
  )
}

export default App
