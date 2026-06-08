import { Head } from '@inertiajs/react';
import { BarChart3, FileText, Inbox } from 'lucide-react';
import { dashboard } from '@/routes';

const metrics = [
    { label: 'Published Content', value: '48', icon: FileText },
    { label: 'Drafts', value: '12', icon: Inbox },
    { label: 'Views This Month', value: '3.2K', icon: BarChart3 },
];

export default function EditorDashboard() {
    return (
        <>
            <Head title="Editor Dashboard" />

            <main className="min-h-full bg-[#eef3f8] p-3 text-slate-950 transition-colors sm:p-5 lg:p-7 dark:bg-background dark:text-slate-50">
                <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f8fbff] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors sm:p-6 lg:p-8 dark:bg-background dark:shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col gap-6">
                        <header>
                            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                                Welcome back
                            </p>
                            <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50">
                                Editor Dashboard
                            </h1>
                        </header>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {metrics.map((metric) => {
                                const Icon = metric.icon;

                                return (
                                    <article
                                        key={metric.label}
                                        className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                    {metric.label}
                                                </p>
                                                <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-slate-50">
                                                    {metric.value}
                                                </p>
                                            </div>
                                            <div className="grid size-12 place-items-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                                <Icon className="size-6" />
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <h2 className="text-base font-bold text-slate-950 dark:text-slate-50">
                                Editor Tools
                            </h2>
                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
                                    Create New Content
                                </button>
                                {['Manage Drafts', 'Analytics'].map(
                                    (action) => (
                                        <button
                                            key={action}
                                            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                                        >
                                            {action}
                                        </button>
                                    ),
                                )}
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}

EditorDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Editor Dashboard',
            href: dashboard(),
        },
    ],
};
