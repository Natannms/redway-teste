import { Email } from '../../types/email';

interface propsComponent {
    emails: Email[]
}

const EmailList = ({ emails }: propsComponent) => {
    console.log(emails)
    return (
        <div className="px-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            EMAIL
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email:Email) => {
                        return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {email.id}
                            </th>
                            <td className="px-6 py-4">
                                {email.email}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    );

}
export default EmailList; 
