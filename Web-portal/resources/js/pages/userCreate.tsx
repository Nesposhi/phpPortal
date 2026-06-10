import { Head, Link, useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { useState } from 'react';

export default function UserCreate() {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { data, setData, post, processing } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'viewer',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/users', {
            onError: (errors) => {
                setErrors(errors as Record<string, string>);
            },
        });
    };

    const handleReset = () => {
        setData({ name: '', email: '', password: '', role: 'viewer' });
        setErrors({});
    };
    return (
        <>
            <Head title="Create User" />

            <main className="min-h-full bg-[#eef3f8] p-3 text-slate-950 transition-colors sm:p-5 lg:p-7 dark:bg-background dark:text-slate-50">
                <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f8fbff] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors sm:p-6 lg:p-8 dark:bg-background dark:shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                                User management
                            </p>
                            <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50">
                                Create a new user
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Use this page to add a new user account in the
                                app. The sidebar nav item already points here
                                for quick access.
                            </p>
                        </div>
                        <Link
                            href={dashboard()}
                            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                        >
                            Back to dashboard
                        </Link>
                    </div>

                    <section className="mt-6 grid gap-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                New user details
                            </h2>
                            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                                Enter the user details below and save to create
                                a new account.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-5 sm:gap-6 md:grid-cols-2"
                        >
                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Full name
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    placeholder="Jane Doe"
                                    className={`mt-1 w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition outline-none placeholder:text-slate-400 focus:ring-1 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 ${
                                        errors.name
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900 dark:border-slate-600 dark:focus:border-slate-600 dark:focus:ring-slate-600'
                                    }`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Email address
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="jane@example.com"
                                    className={`mt-1 w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition outline-none placeholder:text-slate-400 focus:ring-1 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 ${
                                        errors.email
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900 dark:border-slate-600 dark:focus:border-slate-600 dark:focus:ring-slate-600'
                                    }`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                        {errors.email}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Password
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    placeholder="Enter a secure password"
                                    className={`mt-1 w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition outline-none placeholder:text-slate-400 focus:ring-1 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 ${
                                        errors.password
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900 dark:border-slate-600 dark:focus:border-slate-600 dark:focus:ring-slate-600'
                                    }`}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                        {errors.password}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Role
                                <select
                                    value={data.role}
                                    onChange={(e) =>
                                        setData('role', e.target.value)
                                    }
                                    className={`mt-1 w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition outline-none focus:ring-1 dark:bg-slate-800 dark:text-slate-100 ${
                                        errors.role
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900 dark:border-slate-600 dark:focus:border-slate-600 dark:focus:ring-slate-600'
                                    }`}
                                >
                                    <option value="super_admin">
                                        Super Administrator
                                    </option>
                                    <option value="admin">Administrator</option>
                                    <option value="editor">Editor</option>
                                    <option value="viewer">Viewer</option>
                                </select>
                                {errors.role && (
                                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                        {errors.role}
                                    </p>
                                )}
                            </label>
                        </form>

                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                            <button
                                type="button"
                                onClick={handleReset}
                                disabled={processing}
                                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={processing}
                                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                            >
                                {processing ? 'Creating...' : 'Create user'}
                            </button>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}
