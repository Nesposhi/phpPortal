<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private const VIEWER_CATEGORIES = ['clothes', 'cosmetics', 'electronics'];

    public function index(Request $request)
    {
        if ($request->user()?->role === 'viewer') {
            return redirect()->route('viewer.category', ['category' => 'clothes']);
        }

        return Inertia::render('dashboard', [
            'products' => Product::latest()
                ->limit(5)
                ->get(['id', 'name', 'sku', 'price', 'stock', 'status'])
                ->map(fn (Product $product): array => [
                    'id' => $product->id,
                    'name' => $product->name,
                    'order' => $product->sku,
                    'cost' => '$' . number_format((float) $product->price, 2),
                    'stock' => (string) $product->stock,
                    'status' => $product->status,
                ]),
        ]);
    }

    public function viewerCategory(Request $request, string $category)
    {
        if ($request->user()?->role !== 'viewer') {
            return redirect()->route('dashboard');
        }

        abort_unless(in_array($category, self::VIEWER_CATEGORIES, true), 404);

        return Inertia::render('viewer-dashboard', [
            'category' => $category,
            'products' => $this->viewerProducts($category),
        ]);
    }

    private function viewerProducts(string $category)
    {
        return Product::query()
            ->where('category', $category)
            ->latest()
            ->get(['id', 'name', 'sku', 'category', 'price', 'stock', 'status'])
            ->map(fn (Product $product): array => [
                'id' => $product->id,
                'name' => $product->name,
                'subtitle' => $product->sku,
                'price' => 'K' . number_format((float) $product->price, 2),
                'oldPrice' => 'K' . number_format((float) $product->price * 1.2, 2),
                'stock' => $product->stock . ' available',
                'badge' => $product->status,
                'accent' => match ($category) {
                    'cosmetics' => '#db2777',
                    'electronics' => '#0891b2',
                    default => '#14b8a6',
                },
            ]);
    }
}
