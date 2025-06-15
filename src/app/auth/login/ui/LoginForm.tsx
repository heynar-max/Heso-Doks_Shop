"use client";

import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import clsx from 'clsx';

export const LoginForm = () => {
    const [error, setError] = useState('');
    const [pending, setPending] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPending(true);
        setError('');

        const formData = new FormData(event.currentTarget);
        const result = await authenticate(undefined, formData);

        if (result === 'Success') {
        router.replace('/');
        } else if (result === 'CredentialsSignin') {
        setError('Credenciales no son correctas');
        } else {
        setError('Ocurrió un error. Intenta de nuevo.');
        }

        setPending(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email">Correo electrónico</label>
        <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="email"
            name="email"
            required
        />

        <label htmlFor="password">Contraseña</label>
        <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="password"
            name="password"
            required
        />

        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
            {error && (
            <div className="flex flex-row mb-2">
                <IoInformationOutline className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{error}</p>
            </div>
            )}
        </div>

        <button
            type="submit"
            disabled={pending}
            className={clsx("btn-primary", { "btn-disabled": pending })}
        >
            {pending ? 'Ingresando...' : 'Ingresar'}
        </button>

        {/* divisor */}
        <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-500"></div>
            <div className="px-2 text-gray-800">O</div>
            <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/new_account" className="btn-secondary text-center">
            Crear una nueva cuenta
        </Link>
        </form>
    );
};