"use client"
import { ChangeEvent, FormEvent, useState } from 'react';

import supabase from '@/lib/supabase/client';
import type { Lead } from '@/types/form.leads';

const defaultData: Lead = {
    email: '',
    phone: '',
    requirement: '',
    username: ''
}

export default function LeadModal() {
    const [open, setOpen] = useState<boolean>(false)
    const [data, setData] = useState<Lead>(defaultData)

    const postLead = async (form: FormEvent) => {
        form.preventDefault()

        const { error } = await supabase.from('leads').insert(data)

        if (error) {
            alert('Houve um erro ao tentar enviar seu formulário')
        } else {
            alert('Formulário enviado com sucesso!')
            setOpen(false)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData(d => {
            return {
                ...d,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            <button
                className='bg-primary min-w-72 w-1/2 py-2 whitespace-nowrap rounded-md cursor-pointer'
                onClick={() => setOpen(true)}
            >
                Conheça nossas soluções
            </button>
            {
                open && (
                    <div
                        className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/35'
                        onClick={(event) => {
                            event.stopPropagation()
                            setOpen(false)
                        }}
                    >
                        <div
                            className='bg-zinc-600 w-full h-full rounded-2xl md:w-3/4 md:h-3/4'
                            onClick={(event) => event.stopPropagation()}
                        >
                            <form
                                onSubmit={postLead}
                                className='flex flex-col justify-center items-center w-full h-full gap-8 p-12'
                            >
                                <input
                                    className='border border-primary p-2 rounded-md outline-none w-full'
                                    type="text"
                                    placeholder='Nome'
                                    name='username'
                                    value={data.username}
                                    onChange={handleChange}
                                />

                                <input
                                    className='border border-primary p-2 rounded-md outline-none w-full'
                                    type="email"
                                    placeholder='E-mail'
                                    name='email'
                                    value={data.email}
                                    onChange={handleChange}
                                />

                                <input
                                    className='border border-primary p-2 rounded-md outline-none w-full'
                                    type="tel"
                                    placeholder='Telefone'
                                    name='phone'
                                    value={data.phone}
                                    onChange={handleChange}
                                />

                                <button className='w-full bg-primary p-4 rounded-md cursor-pointer' type='submit'>Enviar formulário</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}