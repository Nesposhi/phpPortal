import { Head, Link, usePage } from '@inertiajs/react';
import {
    ChevronLeft,
    ChevronRight,
    Globe2,
    MapPin,
    Menu,
    Search,
    ShoppingCart,
} from 'lucide-react';

import { dashboard, login, register } from '@/routes';

const fashionDeals = [
    {
        color: 'bg-[#efe4d2]',
        label: 'Auth-aware actions',
        visual: 'from-[#315b8d] via-[#6f91b7] to-[#d9c1a3]',
    },
    {
        color: 'bg-[#d8e8cf]',
        label: 'Responsive hero layout',
        visual: 'from-[#f4f1dc] via-[#294a39] to-[#d96b92]',
    },
];

const homeDeals = [
    {
        color: 'bg-[#eef1ee]',
        label: 'Polished content section',
        visual: 'from-[#c2d8dd] via-[#8fb2b9] to-[#e7ece9]',
    },
    {
        color: 'bg-[#f0eee9]',
        label: 'Expandable later',
        visual: 'from-[#f8efe5] via-[#d8412c] to-[#f7b58e]',
    },
];

function ProductTile({
    color,
    label,
    visual,
}: {
    color: string;
    label: string;
    visual: string;
}) {
    return (
        <div className="min-w-0">
            <div
                className={`flex aspect-[1.35] items-center justify-center overflow-hidden ${color}`}
            >
                <div
                    className={`h-20 w-28 rounded-[40%_60%_45%_55%] bg-gradient-to-br ${visual} shadow-lg`}
                />
            </div>
            <p className="mt-1 truncate text-sm text-[#111820]">{label}</p>
        </div>
    );
}

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Home" />

            <div className="min-h-screen bg-[#e3e6e6] text-[#111820]">
                <header className="bg-[#131921] text-white">
                    <div className="flex min-h-16 items-center gap-3 px-4">
                        <Link
                            href="/"
                            className="flex h-12 shrink-0 items-center rounded-sm px-2 text-3xl font-bold tracking-[-0.08em] hover:outline hover:outline-1 hover:outline-white"
                            aria-label="Home"
                        >
                            Nesposhi
                            <span className="mt-5 ml-1 h-1 w-10 rounded-full bg-[#ff9900]" />
                        </Link>

                        <div className="hidden h-12 items-center gap-1 rounded-sm px-2 hover:outline hover:outline-1 hover:outline-white sm:flex">
                            <MapPin className="h-5 w-5" />
                            <div className="text-xs leading-tight">
                                <p className="text-slate-300">Welcome to</p>
                                <p className="font-bold">Portal</p>
                            </div>
                        </div>

                        <form className="flex h-11 min-w-0 flex-1 overflow-hidden rounded-md focus-within:ring-2 focus-within:ring-[#f3a847]">
                            <button
                                className="w-14 shrink-0 bg-[#e6e6e6] text-sm text-[#334155]"
                                type="button"
                            >
                                All
                            </button>
                            <input
                                className="min-w-0 flex-1 border-0 bg-white px-4 text-base text-[#111820] outline-none"
                                placeholder="Search Nesposhi portal"
                                type="search"
                            />
                            <button
                                className="flex w-14 shrink-0 items-center justify-center bg-[#febd69] text-[#111820] transition hover:bg-[#f3a847]"
                                type="submit"
                                aria-label="Search"
                            >
                                <Search className="h-7 w-7" />
                            </button>
                        </form>

                        <div className="hidden h-12 items-center gap-1 rounded-sm px-2 font-bold hover:outline hover:outline-1 hover:outline-white lg:flex">
                            <Globe2 className="h-5 w-5" />
                            <span>EN</span>
                        </div>

                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="hidden h-12 rounded-sm px-2 pt-2 text-xs leading-tight hover:outline hover:outline-1 hover:outline-white md:block"
                            >
                                <span className="block text-slate-200">
                                    Hello, {auth.user.name}
                                </span>
                                <span className="block text-sm font-bold">
                                    Dashboard
                                </span>
                            </Link>
                        ) : (
                            <Link
                                href={login()}
                                className="hidden h-12 rounded-sm px-2 pt-2 text-xs leading-tight hover:outline hover:outline-1 hover:outline-white md:block"
                            >
                                <span className="block text-slate-200">
                                    Hello, sign in
                                </span>
                                <span className="block text-sm font-bold">
                                    Account & Lists
                                </span>
                            </Link>
                        )}

                        <Link
                            href={auth.user ? dashboard() : register()}
                            className="hidden h-12 rounded-sm px-2 pt-2 text-xs leading-tight hover:outline hover:outline-1 hover:outline-white xl:block"
                        >
                            <span className="block text-slate-200">Start</span>
                            <span className="block text-sm font-bold">Now</span>
                        </Link>

                        <Link
                            href={auth.user ? dashboard() : register()}
                            className="flex h-12 items-center rounded-sm px-2 hover:outline hover:outline-1 hover:outline-white"
                            aria-label="Cart"
                        >
                            <div className="relative">
                                <ShoppingCart className="h-9 w-9" />
                                <span className="absolute -top-2 left-4 text-lg font-bold text-[#f08804]">
                                    0
                                </span>
                            </div>
                            <span className="hidden pt-4 text-sm font-bold sm:inline">
                                Portal
                            </span>
                        </Link>
                    </div>

                    <nav className="flex h-11 [scrollbar-width:none] items-center gap-5 overflow-x-auto bg-[#232f3e] px-5 text-sm font-medium [&::-webkit-scrollbar]:hidden">
                        <button className="flex shrink-0 items-center gap-1 text-base font-bold">
                            <Menu className="h-6 w-6" />
                            All
                        </button>
                        <a className="shrink-0" href="#deals">
                            Welcome
                        </a>
                        <a className="shrink-0" href="#fashion">
                            Included
                        </a>
                        <a className="shrink-0" href="#home">
                            Highlights
                        </a>
                        <a className="shrink-0" href="#registry">
                            Expand Later
                        </a>
                        <a className="shrink-0" href="#gaming">
                            Polished UI
                        </a>
                        <a className="shrink-0" href="#service">
                            Fast Launch
                        </a>
                    </nav>
                </header>

                <main>
                    <section
                        id="deals"
                        className="relative min-h-[520px] overflow-hidden bg-[#ff6500]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,#ff8a00_0_9rem,transparent_9.2rem),linear-gradient(180deg,transparent_0%,transparent_53%,#f2ad74_100%)]" />
                        <button
                            className="absolute top-32 left-7 z-20 flex h-16 w-11 items-center justify-center rounded-sm text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.75)]"
                            aria-label="Previous deal"
                        >
                            <ChevronLeft className="h-14 w-14" />
                        </button>
                        <button
                            className="absolute top-32 right-7 z-20 flex h-16 w-11 items-center justify-center rounded-sm text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.75)]"
                            aria-label="Next deal"
                        >
                            <ChevronRight className="h-14 w-14" />
                        </button>

                        <div className="relative mx-auto max-w-[1360px] px-6 pt-12 pb-8">
                            <div className="grid min-h-[275px] grid-cols-1 items-start lg:grid-cols-[0.65fr_1fr_0.95fr]">
                                <div className="hidden h-full items-start sm:flex">
                                    <div className="mt-2 h-28 w-28 rounded-full bg-[#d38f4a] shadow-2xl ring-8 ring-[#f0c47d]" />
                                    <div className="mt-48 ml-4 h-10 w-28 rounded-full border-8 border-[#111820] bg-[#28384b]" />
                                </div>

                                <div className="pt-6 text-white">
                                    <p className="text-2xl font-extrabold">
                                        Nesposhi portal
                                    </p>
                                    <h1 className="mt-2 max-w-[390px] text-5xl leading-[0.95] font-black tracking-normal sm:text-6xl">
                                        Welcome to Nesposhi portal.
                                    </h1>
                                    <p className="mt-5 max-w-xl text-base leading-7 font-semibold text-white/90">
                                        A custom landing page tailored for your
                                        app, complete with auth-aware calls to
                                        action and a polished content layout.
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {auth.user ? (
                                            <Link
                                                href={dashboard()}
                                                className="inline-flex items-center justify-center rounded-sm bg-[#131921] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#263648]"
                                            >
                                                Go to dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={register()}
                                                    className="inline-flex items-center justify-center rounded-sm bg-[#131921] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#263648]"
                                                >
                                                    Register
                                                </Link>
                                                <Link
                                                    href={login()}
                                                    className="inline-flex items-center justify-center rounded-sm border border-white/70 bg-white/95 px-5 py-3 text-sm font-bold text-[#111820] transition hover:bg-white"
                                                >
                                                    Log in
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="relative hidden h-[295px] lg:block">
                                    <div className="absolute top-0 left-0 h-28 w-28 rounded-full border-[14px] border-white bg-slate-100 shadow-lg" />
                                    <div className="absolute top-8 left-48 h-20 w-14 rotate-[-12deg] rounded-2xl bg-[#111820] shadow-lg" />
                                    <div className="absolute top-28 left-32 h-40 w-56 rotate-[-12deg] rounded-[2rem] bg-[#0c86c8] shadow-2xl before:absolute before:top-11 before:left-16 before:h-16 before:w-24 before:rounded-full before:bg-[#ff6500] after:absolute after:bottom-5 after:left-11 after:h-9 after:w-9 after:rounded-full after:bg-[#1ea8e3]" />
                                    <div className="absolute top-0 right-0 h-72 w-60 rotate-3 rounded-xl bg-[repeating-linear-gradient(0deg,#dff4ff_0_38px,#11406d_38px_55px,#dff4ff_55px_78px,#16a4ce_78px_87px)] shadow-xl" />
                                </div>
                            </div>

                            <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                <article
                                    id="fashion"
                                    className="bg-white p-6 shadow-sm"
                                >
                                    <h2 className="text-2xl font-extrabold">
                                        What's included
                                    </h2>
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        {fashionDeals.map((deal) => (
                                            <ProductTile
                                                key={deal.label}
                                                {...deal}
                                            />
                                        ))}
                                    </div>
                                </article>

                                <article
                                    id="gaming"
                                    className="bg-white p-6 shadow-sm"
                                >
                                    <h2 className="text-2xl font-extrabold">
                                        A homepage built for your product and
                                        users
                                    </h2>
                                    <div className="mt-4 flex aspect-[1.75] items-center justify-center overflow-hidden bg-[#c89bc7]">
                                        <div className="h-32 w-56 rounded-xl bg-gradient-to-br from-[#111820] via-[#1e3a8a] to-[#ec4899] shadow-2xl" />
                                        <div className="mt-20 -ml-10 h-20 w-28 rounded-full border-[16px] border-[#1f2937] bg-transparent shadow-lg" />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        This page works with your current auth
                                        routes and gives guests a polished first
                                        impression while preserving the full
                                        dashboard experience for logged-in
                                        users.
                                    </p>
                                </article>

                                <article
                                    id="home"
                                    className="bg-white p-6 shadow-sm md:col-span-2 xl:col-span-1"
                                >
                                    <h2 className="text-2xl font-extrabold">
                                        Highlights
                                    </h2>
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        {homeDeals.map((deal) => (
                                            <ProductTile
                                                key={deal.label}
                                                {...deal}
                                            />
                                        ))}
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
