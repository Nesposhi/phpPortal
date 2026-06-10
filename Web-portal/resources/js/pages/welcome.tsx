import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

const featureImages = [
    {
        alt: 'Luxury perfume bottles arranged on a display surface',
        src: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
    },
    {
        alt: 'Modern clothes hanging neatly on a fashion rack',
        src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',
    },
];

const showcaseImages = [
    {
        alt: 'Assorted electronics and gadgets on a desk',
        src: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80',
        title: 'Electronic gadgets',
        text: 'electronics text will be wwritten here.',
    },
    {
        alt: 'Folded clothes and accessories arranged for shopping',
        src: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
        title: 'Hoodies and shirts',
        text: 'very stylish hoodies and shirts',
    },
    {
        alt: 'Folded clothes and accessories arranged for shopping',
        src: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
        title: 'Hoodies and shirts',
        text: 'very stylish hoodies and shirts',
    },
    {
        alt: 'Folded clothes and accessories arranged for shopping',
        src: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
        title: 'Hoodies and shirts',
        text: 'very stylish hoodies and shirts',
    },
];

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Home" />
            <style>
                {`
                    @keyframes welcome-card-float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-8px);
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .welcome-card-float {
                            animation: none !important;
                        }
                    }
                `}
            </style>

            <div className="min-h-screen bg-[#F9FAFB] text-[#111827] dark:bg-background dark:text-[#F8FAFC]">
                <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
                    <header className="flex flex-col gap-6 border-b border-slate-200/70 pb-6 lg:flex-row lg:items-center lg:justify-between dark:border-slate-700/60">
                        <div className="space-y-4">
                            <p className="text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase dark:text-slate-400">
                                Msika Market
                            </p>
                            <div className="space-y-3">
                                <h1 className="text-4xl font-semibold sm:text-5xl">
                                    Welcome to Msika Market.
                                </h1>
                                <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                                   The best place of your choice, where you can find your favorite products that are cheap and longlasting 
                                   .
                                </p>
                            </div>
                        </div>

                      
                    </header>

                    <main className="grid gap-10 pt-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
                        <section className="space-y-8">
                            <div className="welcome-card-float overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-safe:[animation:welcome-card-float_7s_ease-in-out_infinite] dark:border-slate-400 dark:bg-slate-300 dark:text-slate-950">
                                <div className="grid lg:grid-cols-[1fr_0.82fr]">
                                    <div className="p-8 sm:p-10">
                                        <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-400 dark:text-slate-950">
                                            About our Market
                                        </span>
                                        <div className="mt-8 space-y-6">
                                            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                                                This market features a diverse range of features.
                                            </h2>
                                            <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-700">
                                              From apparel(clothes) and cosmetics to software solutions and electronic gadgets.
                                               Shop securely and affordably from anywhere.
                                             browse all your favourite products and window-shop without ever leaving your couch.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative min-h-72 overflow-hidden bg-slate-200">
                                        <img
                                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80"
                                            alt="Laptop and electronics gadgets arranged on a desk"
                                            className="h-full min-h-72 w-full object-cover opacity-90"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                                        <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/20 bg-white/15 p-4 text-white shadow-xl backdrop-blur-md">
                                            <p className="text-sm font-semibold">
                                              "A versatile  marketplace  bringing together cutting edge software solutions, tech gadgets, stylish apparel and premium cosmetics all under digital roof."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                    <article className="welcome-card-float group overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-safe:[animation:welcome-card-float_5.8s_ease-in-out_infinite] dark:border-slate-400 dark:bg-slate-300 dark:text-slate-950">
                                        <img
                                            src={featureImages[0].src}
                                            alt={featureImages[0].alt}
                                            className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="p-5">
                                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-950">
                                                Premium cosmetics
                                            </p>
                                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-700">
                                               like perfumes, body lotion etc
                                            </p>
                                        </div>
                                    </article>
                                    <article className="welcome-card-float group overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-safe:[animation:welcome-card-float_6.4s_ease-in-out_0.8s_infinite] dark:border-slate-400 dark:bg-slate-300 dark:text-slate-950">
                                        <img
                                            src={featureImages[1].src}
                                            alt={featureImages[1].alt}
                                            className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="p-5">
                                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-950">
                                                stylish apparel
                                            </p>
                                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-700">
                                               trousers, dresses, shoes
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {showcaseImages.map((item) => (
                                    <div
                                        key={item.title}
                                        className="welcome-card-float group overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-safe:[animation:welcome-card-float_6.8s_ease-in-out_0.35s_infinite] dark:border-slate-400 dark:bg-slate-300 dark:text-slate-950"
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="h-32 w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-700">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <aside className="space-y-6">
                            <div className="welcome-card-float rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-safe:[animation:welcome-card-float_6.2s_ease-in-out_0.55s_infinite] dark:border-slate-400 dark:bg-slate-300 dark:text-slate-950">
                                <p className="text-sm tracking-[0.25em] text-slate-500 uppercase dark:text-slate-600">
                                    Highlights
                                </p>
                                <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-700">
                                    <li className="flex gap-3">
                                        <span className="mt-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-slate-900 dark:bg-slate-900" />
                                        <span>
                                           Secure and affordable Shopping
    
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-slate-900 dark:bg-slate-900" />
                                        <span>
                                          Diverse Product Ecosystem
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-slate-900 dark:bg-slate-900" />
                                        <span>
                                           Effortless Browsing from home
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="welcome-card-float rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-safe:[animation:welcome-card-float_7.2s_ease-in-out_1s_infinite] dark:border-slate-400 dark:bg-slate-300 dark:text-slate-950">
                                <p className="text-sm tracking-[0.25em] text-slate-500 uppercase dark:text-slate-600">
                                    Start now
                                </p>
                                <div className="mt-5 flex flex-col gap-3">
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                                        >
                                            Go to dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={register()}
                                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                                            >
                                                Create account
                                            </Link>
                                            <Link
                                                href={login()}
                                                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                                            >
                                                Sign in
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
        </>
    );
}
