"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import supabase from '@/lib/supabase/client'
import type { Auth } from '@/types/auth.admin'
import type { GetLeads } from '@/types/api.leads'
export default function Admin() {
    const [token, setToken] = useState<string>('')
    const [user, setUser] = useState<Auth>({
        email: '',
        password: ''
    })
    const [leads, setLeads] = useState<GetLeads[]>([])

    const getLeads = async () => {
        const { data } = await supabase.from('leads').select('*')

        if (data) {
            setLeads(data)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(d => {
            return {
                ...d,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleLogin = async (form: FormEvent) => {
        form.preventDefault()

        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        });

        if (error) {
            alert('Você não tem permissão')
        }
        else {
            setToken(data.session?.access_token!)
        }
    }

    const removeLead = async (id: string) => {
        await supabase.from('leads').delete().eq('id', id)

        getLeads()
    }

    useEffect(() => {
        if (token) {
            getLeads()
        }
    }, [token])

    if (!token) {
        return (
            <section className='h-full'>
                <form
                    onSubmit={handleLogin}
                    className='flex flex-col justify-center items-center w-full h-full gap-8 p-12'
                >
                    <h1 className='mb-8 font-semibold text-center text-4xl md:text-6xl lg:text-7xl'>Área do Admin</h1>

                    <input
                        className='border border-primary p-2 rounded-md outline-none w-full'
                        type="email"
                        placeholder='E-mail'
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                    />

                    <input
                        className='border border-primary p-2 rounded-md outline-none w-full'
                        type="password"
                        placeholder='Sua senha'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />

                    <button className='w-full bg-primary p-4 rounded-md cursor-pointer' type='submit'>Login</button>
                </form>
            </section>
        )
    }

    return (
        <section className='flex flex-col justify-center items-center p-12'>
            <h1 className='mb-8 font-semibold text-center text-4xl md:text-6xl lg:text-7xl'>Leads</h1>

            {
                leads.length == 0
                    ? <p>Nenhum lead</p>
                    : <table className='overflow-scroll px-24'>
                        <thead>
                            <tr className='*:text-start'>
                                <th>Usuário</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th></th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                leads.map((lead) => (
                                    <tr
                                        key={lead.id}
                                        className='*:w-40 *:min-w-20'
                                    >
                                        <td>{lead.username}</td>
                                        <td>{lead.phone}</td>
                                        <td>{lead.email}</td>
                                        <td>{lead.requirement}</td>
                                        <td><button className='bg-red-600 p-2 rounded-md cursor-pointer' onClick={() => removeLead(lead.id)}>Deletar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </section>
    )
}