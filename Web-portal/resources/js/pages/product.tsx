import { Head, Link, useForm } from '@inertiajs/react';
import { Boxes, PackagePlus, Tags, Truck } from 'lucide-react';
import { dashboard, product } from '@/routes';

type ProductItem = {
    id: number;
    name: string;
    order: string;
    category: 'clothes' | 'cosmetics' | 'electronics';
    cost: string;
    stock: string;
    status: 'In Stock' | 'In Transit' | 'Low Stock';
};

type ProductProps = {
    products?: ProductItem[];
};

const statuses = ['In Stock', 'In Transit', 'Low Stock'] as const;
const categories = [
    { value: 'clothes', label: 'Clothes' },
    { value: 'cosmetics', label: 'Cosmetics' },
    { value: 'electronics', label: 'Electronics' },
] as const;

export default function Product({ products = [] }: ProductProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        sku: '',
        category: 'clothes',
        price: '',
        stock: '',
        status: 'In Stock',
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        post('/products', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const categoryTotals = categories.map((category) => ({
        ...category,
        count: products.filter((item) => item.category === category.value)
            .length,
    }));
    const totalStock = products.reduce(
        (total, item) => total + Number(item.stock),
        0,
    );

    return (
        <>
            <Head title="Products" />

            <main className="min-h-full bg-[#eef3f8] p-3 text-slate-950 transition-colors sm:p-5 lg:p-7 dark:bg-background dark:text-slate-50">
                <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f8fbff] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors sm:p-6 lg:p-8 dark:bg-background dark:shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                                Catalog management
                            </p>
                            <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50">
                                Products
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Create and categorize products here. Viewer
                                storefront pages show the same products by
                                category.
                            </p>
                        </div>
                        <Link
                            href={dashboard()}
                            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                        >
                            Back to dashboard
                        </Link>
                    </div>

                    <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        <article className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <span className="grid size-10 place-items-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                <Boxes className="size-5" />
                            </span>
                            <p className="mt-4 text-xs font-semibold uppercase text-slate-400">
                                Total products
                            </p>
                            <strong className="mt-1 block text-2xl font-black text-slate-950 dark:text-slate-50">
                                {products.length}
                            </strong>
                        </article>
                        <article className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <span className="grid size-10 place-items-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                                <Truck className="size-5" />
                            </span>
                            <p className="mt-4 text-xs font-semibold uppercase text-slate-400">
                                Total stock
                            </p>
                            <strong className="mt-1 block text-2xl font-black text-slate-950 dark:text-slate-50">
                                {totalStock}
                            </strong>
                        </article>
                        {categoryTotals.map((category) => (
                            <article
                                key={category.value}
                                className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                            >
                                <span className="grid size-10 place-items-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                    <Tags className="size-5" />
                                </span>
                                <p className="mt-4 text-xs font-semibold uppercase text-slate-400">
                                    {category.label}
                                </p>
                                <strong className="mt-1 block text-2xl font-black text-slate-950 dark:text-slate-50">
                                    {category.count}
                                </strong>
                            </article>
                        ))}
                    </section>

                    <section className="mt-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                <PackagePlus className="size-5" />
                            </span>
                            <div>
                                <h2 className="text-base font-bold text-slate-950 dark:text-slate-50">
                                    New product
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Add an item to the catalog.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="grid gap-4">
                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2 dark:text-slate-300">
                                Product name
                                <input
                                    value={data.name}
                                    onChange={(event) =>
                                        setData('name', event.target.value)
                                    }
                                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                    placeholder="Arabic perfumes"
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                                </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                SKU
                                <input
                                    value={data.sku}
                                    onChange={(event) =>
                                        setData('sku', event.target.value)
                                    }
                                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                    placeholder="ID-1001"
                                />
                                {errors.sku && (
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        {errors.sku}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Category
                                <select
                                    value={data.category}
                                    onChange={(event) =>
                                        setData('category', event.target.value)
                                    }
                                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                >
                                    {categories.map((category) => (
                                        <option
                                            key={category.value}
                                            value={category.value}
                                        >
                                            {category.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        {errors.category}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Price
                                <input
                                    value={data.price}
                                    onChange={(event) =>
                                        setData('price', event.target.value)
                                    }
                                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                    placeholder="20000.00"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                />
                                {errors.price && (
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        {errors.price}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Stock
                                <input
                                    value={data.stock}
                                    onChange={(event) =>
                                        setData('stock', event.target.value)
                                    }
                                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                    placeholder="148"
                                    type="number"
                                    min="0"
                                />
                                {errors.stock && (
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        {errors.stock}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Status
                                <select
                                    value={data.status}
                                    onChange={(event) =>
                                        setData('status', event.target.value)
                                    }
                                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                >
                                    {statuses.map((status) => (
                                        <option key={status} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                                {errors.status && (
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        {errors.status}
                                    </p>
                                )}
                            </label>
                            </div>

                            <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Viewers will see this product on the selected
                                    category page.
                                </p>
                                <button
                                    disabled={processing}
                                    className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                                    type="submit"
                                >
                                    {processing
                                        ? 'Creating...'
                                        : 'Create product'}
                                </button>
                            </div>
                        </form>
                    </section>

                    <section className="mt-6 grid gap-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-base font-bold text-slate-950 dark:text-slate-50">
                                Product List
                            </h2>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                Showing {products.length} product
                                {products.length === 1 ? '' : 's'}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {products.length > 0 ? (
                                products.map((item) => (
                                    <article
                                        key={item.id}
                                        className="relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="grid size-10 place-items-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                                <Truck className="size-5" />
                                            </span>
                                            <div>
                                                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                                    {item.name}
                                                </h3>
                                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                    {item.order}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-5 grid grid-cols-4 gap-3 text-sm">
                                            <div>
                                                <p className="text-xs text-slate-400">
                                                    Category
                                                </p>
                                                <p className="font-semibold capitalize text-slate-900 dark:text-slate-50">
                                                    {item.category}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400">
                                                    Cost
                                                </p>
                                                <p className="font-semibold text-slate-900 dark:text-slate-50">
                                                    {item.cost}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400">
                                                    Stock
                                                </p>
                                                <p className="font-semibold text-slate-900 dark:text-slate-50">
                                                    {item.stock}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400">
                                                    Status
                                                </p>
                                                <span className="mt-1 inline-flex rounded-full bg-sky-50 px-2 py-0.5 text-xs font-bold text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500 sm:col-span-2 lg:col-span-3 dark:border-slate-700 dark:text-slate-400">
                                    No products yet. Create your first product
                                    above.
                                </div>
                            )}
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

Product.layout = {
    breadcrumbs: [
        {
            title: 'Products',
            href: product(),
        },
    ],
};
