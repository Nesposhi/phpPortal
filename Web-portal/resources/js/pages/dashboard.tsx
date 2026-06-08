import { Head } from '@inertiajs/react';
import {
    Bell,
    CalendarDays,
    ChevronDown,
    Clock3,
    Download,
    FileText,
    MoreVertical,
    Package,
    Search,
    TrendingDown,
    TrendingUp,
    Truck,
} from 'lucide-react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { dashboard } from '@/routes';

const stats = [
    {
        title: 'Total Revenue',
        value: 'K73,890',
        change: '16%',
        trend: 'up',
        icon: 'D',
    },
    {
        title: 'Total Shipment',
        value: '389',
        change: '24%',
        trend: 'down',
        icon: Package,
    },
    {
        title: 'Total Order',
        value: '1865',
        change: '12%',
        trend: 'up',
        icon: FileText,
    },
    {
        title: 'Avg Delivery Time',
        value: '4.5 Days',
        change: '18%',
        trend: 'up',
        icon: Clock3,
    },
];

const countryData = [
    { country: 'zomba', value: 29, width: '88%' },
    { country: 'Lilongwe', value: 20, width: '64%' },
    { country: 'Blantrye', value: 14, width: '52%' },
    { country: 'mzuzu', value: 10, width: '36%' },
    { country: 'Mangochi', value: 8, width: '28%' },
];

const salesData = [
    { day: 'Sat', sales: 3.1 },
    { day: 'Sun', sales: 6.4 },
    { day: 'Mon', sales: 3.2 },
    { day: 'Tue', sales: 5.1 },
    { day: 'Wed', sales: 6.5 },
    { day: 'Thu', sales: 4.7 },
    { day: 'Fri', sales: 3.8 },
];

const products = [
    {
        name: 'Perfumes',
        order: '#ORD-1083',
        cost: 'K20000.00',
        stock: '148',
        status: 'In Stock',
    },
    {
        name: 'clothes',
        order: '#ORD-1041',
        cost: 'K10,000.00',
        stock: '86',
        status: 'In Transit',
    },
    {
        name: 'Electronics',
        order: '#ORD-1028',
        cost: 'K5000.00',
        stock: '24',
        status: 'Low Stock',
    },
];

type DashboardProduct = {
    id: number;
    name: string;
    order: string;
    cost: string;
    stock: string;
    status: string;
};

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
    const Icon = stat.icon;
    const isUp = stat.trend === 'up';

    return (
        <div className="flex min-h-28 flex-col justify-between border-b border-slate-200 bg-white p-4 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
                <span className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    <Icon className="size-4" />
                </span>
            </div>
            <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {stat.title}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                    <strong className="text-xl font-bold text-slate-950 dark:text-slate-50">
                        {stat.value}
                    </strong>
                    <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold ${
                            isUp
                                ? 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300'
                                : 'border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300'
                        }`}
                    >
                        {isUp ? (
                            <TrendingUp className="size-3" />
                        ) : (
                            <TrendingDown className="size-3" />
                        )}
                        {stat.change}
                    </span>
                </div>
            </div>
        </div>
    );
}

function PeriodButton({ label }: { label: string }) {
    return (
        <button className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-500 shadow-sm transition hover:border-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-700">
            <CalendarDays className="size-4" />
            {label}
            <ChevronDown className="size-3.5" />
        </button>
    );
}

export default function Dashboard({
    products: dashboardProducts = [],
}: {
    products?: DashboardProduct[];
}) {
    const shippingProducts =
        dashboardProducts.length > 0 ? dashboardProducts : products;

    return (
        <>
            <Head title="Inventory Management Dashboard" />
            <main className="min-h-full bg-[#eef3f8] p-3 text-slate-950 transition-colors sm:p-5 lg:p-7 dark:bg-background dark:text-slate-50">
                <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f8fbff] shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors dark:bg-background dark:shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
                        <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                                    D-inventy
                                </p>
                                <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50">
                                    Dashboard
                                </h1>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <label className="relative block w-full sm:w-72">
                                    <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                    <input
                                        className="h-11 w-full rounded-full border border-transparent bg-white pr-4 pl-11 text-sm text-slate-900 shadow-sm transition outline-none placeholder:text-slate-400 focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                        placeholder="Search anything..."
                                        type="search"
                                    />
                                </label>
                                <button className="relative grid size-11 place-items-center rounded-full bg-white text-slate-600 shadow-sm transition dark:bg-slate-900 dark:text-slate-300">
                                    <Bell className="size-5" />
                                    <span className="absolute top-2 right-3 size-2 rounded-full bg-sky-500" />
                                </button>
                                <div className="size-11 overflow-hidden rounded-full bg-gradient-to-br from-amber-300 via-rose-300 to-sky-400 p-1">
                                    <div className="grid size-full place-items-center rounded-full bg-white text-sm font-black text-slate-900 dark:bg-background dark:text-slate-50">
                                        N
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-900">
                            {stats.map((stat) => (
                                <StatCard key={stat.title} stat={stat} />
                            ))}
                        </div>

                        <div className="grid gap-5 xl:grid-cols-[0.92fr_1.28fr]">
                            <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                                <div className="mb-6 flex items-center justify-between gap-3">
                                    <h2 className="text-base font-bold text-slate-950 dark:text-slate-50">
                                        District Redistribution
                                    </h2>
                                    <PeriodButton label="Yearly" />
                                </div>
                                <div className="space-y-5">
                                    {countryData.map((item, index) => (
                                        <div
                                            key={item.country}
                                            className="grid grid-cols-[4.5rem_1fr_3rem] items-center gap-3 text-sm"
                                        >
                                            <span className="font-medium text-slate-600 dark:text-slate-300">
                                                {item.country}
                                            </span>
                                            <div className="h-4 rounded-sm bg-sky-100 dark:bg-sky-950">
                                                <div
                                                    className={`h-full rounded-sm ${index % 2 === 0 ? 'bg-sky-600 dark:bg-sky-500' : 'bg-sky-200 dark:bg-sky-800'}`}
                                                    style={{
                                                        width: item.width,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                                                {item.value} M
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 grid grid-cols-5 text-center text-xs font-medium text-slate-400 dark:text-slate-500">
                                    <span>0</span>
                                    <span>5M</span>
                                    <span>10M</span>
                                    <span>20M</span>
                                    <span>40M</span>
                                </div>
                            </section>

                            <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h2 className="text-base font-bold text-slate-950 dark:text-slate-50">
                                            Total Sales
                                        </h2>
                                        <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-slate-50">
                                            K84,994.80
                                            <span className="ml-2 inline-flex items-center gap-1 text-xs font-bold text-emerald-500 dark:text-emerald-300">
                                                <TrendingUp className="size-3" />
                                                16%
                                            </span>
                                            <span className="ml-1 text-xs font-medium text-slate-400 dark:text-slate-500">
                                                from last month
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <PeriodButton label="Weekly" />
                                        <button className="grid size-9 place-items-center rounded-md border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-700">
                                            <MoreVertical className="size-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="h-56">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <AreaChart
                                            data={salesData}
                                            margin={{
                                                left: -18,
                                                right: 8,
                                                top: 8,
                                                bottom: 0,
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="salesGradient"
                                                    x1="0"
                                                    x2="0"
                                                    y1="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="10%"
                                                        stopColor="#0ea5e9"
                                                        stopOpacity={0.24}
                                                    />
                                                    <stop
                                                        offset="95%"
                                                        stopColor="#0ea5e9"
                                                        stopOpacity={0.02}
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid
                                                stroke="var(--border)"
                                                strokeDasharray="4 4"
                                                vertical
                                            />
                                            <XAxis
                                                axisLine={false}
                                                dataKey="day"
                                                tick={{
                                                    fill: 'var(--muted-foreground)',
                                                    fontSize: 12,
                                                }}
                                                tickLine={false}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tick={{
                                                    fill: 'var(--muted-foreground)',
                                                    fontSize: 12,
                                                }}
                                                tickFormatter={(value) =>
                                                    `${value}h`
                                                }
                                                tickLine={false}
                                                ticks={[0, 2, 4, 8, 16]}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    background:
                                                        'var(--popover)',
                                                    border: '1px solid var(--border)',
                                                    borderRadius: 10,
                                                    color: 'var(--popover-foreground)',
                                                    boxShadow:
                                                        '0 14px 30px rgba(15, 23, 42, 0.12)',
                                                }}
                                                formatter={(value) => [
                                                    `kk{Number(value) * 8200}`,
                                                    'Sales',
                                                ]}
                                            />
                                            <ReferenceLine
                                                stroke="var(--muted-foreground)"
                                                strokeDasharray="3 3"
                                                x="Tue"
                                            />
                                            <Area
                                                dataKey="sales"
                                                fill="url(#salesGradient)"
                                                stroke="#0ea5e9"
                                                strokeWidth={3}
                                                type="monotone"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </section>
                        </div>

                        <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <h2 className="text-base font-bold text-slate-950 dark:text-slate-50">
                                    Shipping Products List
                                </h2>
                                <div className="flex flex-wrap items-center gap-3">
                                    <label className="relative">
                                        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                        <input
                                            className="h-10 w-56 rounded-md border border-slate-200 bg-white pr-3 pl-9 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-200 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-sky-700 dark:focus:ring-sky-900/50"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </label>
                                    <button className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-700">
                                        <Download className="size-4" />
                                        Export
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase dark:border-slate-800 dark:text-slate-500">
                                            <th className="py-3 pr-4">
                                                Product
                                            </th>
                                            <th className="py-3 pr-4">Order</th>
                                            <th className="py-3 pr-4">Cost</th>
                                            <th className="py-3 pr-4">Stock</th>
                                            <th className="py-3 pr-4">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shippingProducts.map((product) => (
                                            <tr
                                                key={product.order}
                                                className="border-b border-slate-100 last:border-0 dark:border-slate-800"
                                            >
                                                <td className="py-4 pr-4">
                                                    <div className="flex items-center gap-3">
                                                        <span className="grid size-10 place-items-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                                            <Truck className="size-5" />
                                                        </span>
                                                        <span className="font-semibold text-slate-900 dark:text-slate-50">
                                                            {product.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-4 pr-4 font-medium text-slate-500 dark:text-slate-400">
                                                    {product.order}
                                                </td>
                                                <td className="py-4 pr-4 font-semibold text-slate-900 dark:text-slate-50">
                                                    {product.cost}
                                                </td>
                                                <td className="py-4 pr-4 font-medium text-slate-500 dark:text-slate-400">
                                                    {product.stock}
                                                </td>
                                                <td className="py-4 pr-4">
                                                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                                        {product.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Inventory Dashboard',
            href: dashboard(),
        },
    ],
};
