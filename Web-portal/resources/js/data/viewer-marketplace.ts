import { MonitorSmartphone, Shirt, Sparkles, type LucideIcon } from 'lucide-react';

export type ViewerCategoryId = 'clothes' | 'cosmetics' | 'electronics';

export type ViewerProduct = {
    name: string;
    subtitle: string;
    price: string;
    oldPrice: string;
    stock: string;
    badge: string;
    accent: string;
};

export type ViewerCategory = {
    id: ViewerCategoryId;
    label: string;
    icon: LucideIcon;
    description: string;
    products: ViewerProduct[];
};

export const viewerCategories: ViewerCategory[] = [
    {
        id: 'clothes',
        label: 'Clothes',
        icon: Shirt,
        description: 'Fresh everyday pieces for the viewer shop.',
        products: [
            {
                name: 'Cotton Graphic T-Shirt',
                subtitle: 'Soft cotton tee with a clean everyday fit.',
                price: 'K18,500',
                oldPrice: 'K24,000',
                stock: '24 available',
                badge: 'Sale',
                accent: '#14b8a6',
            },
            {
                name: 'Slim Fit Denim Jeans',
                subtitle: 'Classic blue denim with a modern tapered cut.',
                price: 'K42,000',
                oldPrice: 'K50,000',
                stock: '16 available',
                badge: 'New',
                accent: '#2563eb',
            },
            {
                name: 'Lightweight Bomber Jacket',
                subtitle: 'A light layer for evenings and travel days.',
                price: 'K68,000',
                oldPrice: 'K79,000',
                stock: '9 available',
                badge: 'Limited',
                accent: '#0f766e',
            },
        ],
    },
    {
        id: 'cosmetics',
        label: 'Cosmetics',
        icon: Sparkles,
        description: 'Beauty products, fragrances, and daily care.',
        products: [
            {
                name: 'Hydrating Face Serum',
                subtitle: 'Light serum for a smooth daily skin routine.',
                price: 'K31,000',
                oldPrice: 'K39,500',
                stock: '28 available',
                badge: 'New',
                accent: '#db2777',
            },
            {
                name: 'Luxury Perfume Spray',
                subtitle: 'Long-lasting fragrance with a warm finish.',
                price: 'K75,000',
                oldPrice: 'K89,000',
                stock: '11 available',
                badge: 'Premium',
                accent: '#9333ea',
            },
            {
                name: 'Daily Skin Care Kit',
                subtitle: 'A complete morning and evening care bundle.',
                price: 'K49,900',
                oldPrice: 'K62,000',
                stock: '18 available',
                badge: 'Bundle',
                accent: '#f97316',
            },
        ],
    },
    {
        id: 'electronics',
        label: 'Electronics',
        icon: MonitorSmartphone,
        description: 'Devices and accessories ready for checkout.',
        products: [
            {
                name: 'Wireless Bluetooth Headphones',
                subtitle: 'Comfortable audio with all-day battery life.',
                price: 'K84,000',
                oldPrice: 'K99,000',
                stock: '14 available',
                badge: 'Popular',
                accent: '#0891b2',
            },
            {
                name: 'Portable Power Bank',
                subtitle: 'Compact charging power for phones and tablets.',
                price: 'K39,500',
                oldPrice: 'K46,000',
                stock: '31 available',
                badge: 'Fast moving',
                accent: '#16a34a',
            },
            {
                name: 'Smart Fitness Watch',
                subtitle: 'Track workouts, heart rate, and daily activity.',
                price: 'K120,000',
                oldPrice: 'K145,000',
                stock: '8 available',
                badge: 'Premium',
                accent: '#4f46e5',
            },
        ],
    },
];

