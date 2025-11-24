import { useEffect, useState } from 'react';

export const Cancelacion = () => {
    const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

    useEffect(() => {
        const code = Math.random().toString(36).substring(2, 10);
        setConfirmationCode(code);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Confirmación de Desvinculación de Instagram
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Hemos recibido una solicitud para desvincular tu cuenta de Instagram de nuestra aplicación.
                </p>
                <p className="text-gray-600 text-center mb-6">
                    Tu código de confirmación es:
                </p>
                <div className="bg-gray-200 text-center text-lg font-mono rounded-md p-4 mb-6">
                    {confirmationCode}
                </div>
                <p className="text-sm text-gray-500 text-center">
                    Si no has solicitado esto, puedes ignorar este mensaje.
                </p>
            </div>
        </div>
    );
};
