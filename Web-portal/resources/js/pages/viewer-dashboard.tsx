import { Head, Link } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Eye, AlertCircle } from 'lucide-react';

export default function ViewerDashboard() {
    return (
        <>
            <Head title="Viewer Dashboard" />

            <main className="min-h-full bg-[#eef3f8] p-3 text-slate-950 transition-colors sm:p-5 lg:p-7 dark:bg-background dark:text-slate-50">
                <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f8fbff] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors sm:p-6 lg:p-8 dark:bg-background dark:shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col gap-6">
                        <header>
                            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                                Welcome back
                            </p>
                            <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50">
                                Viewer Dashboard
                            </h1>
                        </header>

                        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="flex items-center gap-4">
                                <div className="grid size-12 place-items-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                    <Eye className="size-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        View Access
                                    </p>
                                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                                        You have read-only access to the system.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <h2 className="text-base font-bold text-slate-950 dark:text-slate-50">
                                Available Resources
                            </h2>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                        Products
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        Browse and view the product catalog.
                                    </p>
                                    <button className="mt-4 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700">
                                        View Products
                                    </button>
                                </article>

                                <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                        Reports
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        Access read-only reports and analytics.
                                    </p>
                                    <button className="mt-4 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700">
                                        View Reports
                                    </button>
                                </article>
                            </div>
                        </div>

                        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900/30 dark:bg-yellow-900/10">
                            <div className="flex gap-3">
                                <AlertCircle className="size-5 flex-shrink-0 text-yellow-600 dark:text-yellow-500" />
                                <div>
                                    <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">
                                        Limited Access
                                    </p>
                                    <p className="mt-1 text-sm text-yellow-800 dark:text-yellow-200">
                                        As a viewer, you have read-only
                                        permissions. Contact an administrator to
                                        request additional access.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

ViewerDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Viewer Dashboard',
            href: dashboard(),
        },
    ],
};
