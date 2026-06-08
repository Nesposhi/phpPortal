import { Head, Link, router } from '@inertiajs/react';
import { dashboard, userCreate } from '@/routes';
import { Trash2 } from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface UsersProps {
    users: User[];
}

export default function Users({ users = [] }: UsersProps) {
    const handleDeleteUser = (userId: number) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(`/users/${userId}`, {
                onSuccess: () => {
                    // User deleted successfully - the page will re-render with updated data
                },
            });
        }
    };

    return (
        <>
            <Head title="Users" />

            <main className="min-h-full bg-[#eef3f8] p-3 text-slate-950 transition-colors sm:p-5 lg:p-7 dark:bg-background dark:text-slate-50">
                <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f8fbff] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors sm:p-6 lg:p-8 dark:bg-background dark:shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                                User management
                            </p>
                            <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50">
                                Users
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                                A listing of user accounts in the system. Click
                                "New user" to add one.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                            <Link
                                href={userCreate()}
                                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                            >
                                New user
                            </Link>

                            <Link
                                href={dashboard()}
                                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                                Back
                            </Link>
                        </div>
                    </div>

                    <section className="mt-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
                                        <tr>
                                            <th className="px-4 py-4">Name</th>
                                            <th className="px-4 py-4">Email</th>
                                            <th className="px-4 py-4">Role</th>
                                            <th className="px-4 py-4">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        {users.length > 0 ? (
                                            users.map((user) => (
                                                <tr
                                                    key={user.id}
                                                    className="hover:bg-slate-50 dark:hover:bg-slate-900/30"
                                                >
                                                    <td className="px-4 py-4">
                                                        <div className="font-medium text-slate-900 dark:text-slate-100">
                                                            {user.name}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                                            {user.role}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <div className="flex gap-2">
                                                            <button className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-800">
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleDeleteUser(
                                                                        user.id,
                                                                    )
                                                                }
                                                                className="inline-flex items-center gap-1 rounded-md border border-red-300 px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-900/30"
                                                            >
                                                                <Trash2 className="size-3" />
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={4}
                                                    className="px-4 py-8 text-center text-slate-500 dark:text-slate-400"
                                                >
                                                    No users found.{' '}
                                                    <Link
                                                        href={userCreate()}
                                                        className="font-semibold text-slate-700 hover:underline dark:text-slate-300"
                                                    >
                                                        Create one
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
                            {users.length === 0
                                ? 'No users'
                                : `Total: ${users.length} user${users.length !== 1 ? 's' : ''}`}
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

Users.layout = {
    breadcrumbs: [
        {
            title: 'Users',
            href: dashboard(),
        },
    ],
};
