import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { viewerCategories, type ViewerCategoryId } from '@/data/viewer-marketplace';
import { Search, ShoppingCart, Star } from 'lucide-react';

type ViewerProductItem = {
    id?: number;
    name: string;
    subtitle: string;
    price: string;
    oldPrice: string;
    stock: string;
    badge: string;
    accent: string;
};

function isViewerCategoryId(value: string | null): value is ViewerCategoryId {
    return value === 'clothes' || value === 'cosmetics' || value === 'electronics';
}

export default function ViewerDashboard({
    category = 'clothes',
    products = [],
}: {
    category?: ViewerCategoryId;
    products?: ViewerProductItem[];
}) {
    const activeCategory =
        viewerCategories.find((viewerCategory) =>
            isViewerCategoryId(category)
                ? viewerCategory.id === category
                : viewerCategory.id === 'clothes',
        ) ?? viewerCategories[0];
    const ActiveCategoryIcon = activeCategory.icon;
    const categoryProducts = products;
    const featuredProduct = categoryProducts[0];
    const otherProducts = categoryProducts.slice(1);

    return (
        <>
            <Head title="Viewer Marketplace" />

            <main className="min-h-full bg-white text-slate-950 transition-colors dark:bg-background dark:text-slate-50">
                <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-background">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                        <div>
                            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                                Viewer shop
                            </p>
                            <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50">
                                Products available to buy
                            </h1>
                        </div>

                        <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
                            <a href={dashboard()} className="hover:text-teal-600">
                                Home
                            </a>
                            <a href="#shop" className="hover:text-teal-600">
                                Shop
                            </a>
                            <a href="#account" className="hover:text-teal-600">
                                My account
                            </a>
                        </nav>
                    </div>
                </section>

                {featuredProduct ? (
                    <section
                        id="shop"
                        className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-14"
                    >
                    <div className="relative min-h-[360px] overflow-hidden bg-teal-400 p-5 shadow-sm">
                        <span className="absolute top-6 left-6 z-10 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
                            {featuredProduct.badge}
                        </span>
                        <button
                            className="absolute top-5 right-5 z-10 grid size-12 place-items-center rounded-full bg-white text-slate-800 shadow-sm transition hover:text-teal-600"
                            type="button"
                        >
                            <Search className="size-5" />
                        </button>

                        <div className="absolute inset-x-8 bottom-8 top-16 grid grid-cols-[0.72fr_1fr_0.72fr] items-end gap-4">
                            <div className="hidden h-[78%] rounded-md bg-white/92 p-3 shadow-xl md:block">
                                <div className="mb-3 h-16 rounded bg-slate-100" />
                                <div className="grid grid-cols-2 gap-2">
                                    {categoryProducts.map((product) => (
                                        <span
                                            key={product.id ?? product.name}
                                            className="h-16 rounded bg-slate-50"
                                            style={{
                                                borderBottom: `5px solid ${product.accent}`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-0 h-full rounded-md bg-white p-5 shadow-2xl">
                                <div className="flex h-full flex-col items-center justify-center">
                                    <div
                                        className="grid size-32 place-items-center rounded-full text-white shadow-xl"
                                        style={{
                                            backgroundColor:
                                                featuredProduct.accent,
                                        }}
                                    >
                                        <ActiveCategoryIcon className="size-16" />
                                    </div>
                                    <h2 className="mt-8 max-w-xs text-center text-xl font-bold text-slate-950">
                                        {featuredProduct.name}
                                    </h2>
                                    <p className="mt-3 text-center text-sm text-slate-500">
                                        {featuredProduct.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="hidden h-[86%] rounded-md bg-white/92 p-3 shadow-xl md:block">
                                <div className="grid gap-2">
                                    {categoryProducts.map((product) => (
                                        <div
                                            key={product.id ?? product.name}
                                            className="flex items-center gap-2 rounded bg-slate-50 p-2"
                                        >
                                            <span
                                                className="size-9 rounded"
                                                style={{
                                                    backgroundColor:
                                                        product.accent,
                                                }}
                                            />
                                            <span className="h-2 flex-1 rounded bg-slate-200" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            Home / Shop / {activeCategory.label}
                        </p>
                        <p className="mt-6 text-base font-semibold text-teal-600 dark:text-teal-400">
                            {activeCategory.label}
                        </p>
                        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-normal text-slate-950 dark:text-slate-50">
                            {featuredProduct.name}
                        </h2>
                        <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">
                            {featuredProduct.subtitle} {activeCategory.description}
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <span className="text-2xl font-medium text-slate-400 line-through">
                                {featuredProduct.oldPrice}
                            </span>
                            <strong className="text-2xl font-black text-slate-800 dark:text-slate-50">
                                {featuredProduct.price}
                            </strong>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                            <Star className="size-4 fill-amber-400 text-amber-400" />
                            {featuredProduct.stock}
                        </div>

                        <button
                            className="mt-5 inline-flex h-11 w-fit items-center gap-2 bg-teal-600 px-6 text-sm font-bold text-white transition hover:bg-teal-700"
                            type="button"
                        >
                            <ShoppingCart className="size-4" />
                            Add to cart
                        </button>

                        <div className="mt-5 border-t border-slate-200 pt-4 text-sm font-medium text-slate-600 dark:border-slate-800 dark:text-slate-300">
                            Category:{' '}
                            <span className="text-teal-600 dark:text-teal-400">
                                {activeCategory.label}
                            </span>
                        </div>
                    </div>
                    </section>
                ) : (
                    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
                        <div className="border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
                            <span className="mx-auto grid size-14 place-items-center bg-teal-600 text-white">
                                <ActiveCategoryIcon className="size-7" />
                            </span>
                            <h2 className="mt-5 text-xl font-bold text-slate-950 dark:text-slate-50">
                                No {activeCategory.label.toLowerCase()} products yet
                            </h2>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                Products created by admins and super admins will
                                appear here when their category is set to{' '}
                                {activeCategory.label}.
                            </p>
                        </div>
                    </section>
                )}

                {otherProducts.length > 0 && (
                    <section className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            {otherProducts.map((product) => (
                                <article
                                    key={product.id ?? product.name}
                                    className="flex items-center justify-between gap-4 border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <div className="flex items-center gap-4">
                                        <span
                                            className="grid size-14 place-items-center text-white"
                                            style={{
                                                backgroundColor: product.accent,
                                            }}
                                        >
                                            <ActiveCategoryIcon className="size-7" />
                                        </span>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-950 dark:text-slate-50">
                                                {product.name}
                                            </h3>
                                            <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                                {product.stock}
                                            </p>
                                        </div>
                                    </div>
                                    <strong className="text-base font-black text-slate-900 dark:text-slate-50">
                                        {product.price}
                                    </strong>
                                </article>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}

ViewerDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Viewer Marketplace',
            href: dashboard(),
        },
    ],
};
