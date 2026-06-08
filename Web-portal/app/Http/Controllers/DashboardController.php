<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
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
}
