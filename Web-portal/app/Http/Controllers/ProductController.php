<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('product', [
            'products' => Product::latest()
                ->get(['id', 'name', 'sku', 'category', 'price', 'stock', 'status'])
                ->map(fn (Product $product): array => $this->formatProduct($product)),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sku' => 'required|string|max:100|unique:products,sku',
            'category' => 'required|in:clothes,cosmetics,electronics',
            'price' => 'required|numeric|min:0|max:99999999.99',
            'stock' => 'required|integer|min:0|max:4294967295',
            'status' => 'required|in:In Stock,In Transit,Low Stock',
        ]);

        Product::create($validated);

        return redirect()->route('product')->with('success', 'Product created successfully.');
    }

    private function formatProduct(Product $product): array
    {
        return [
            'id' => $product->id,
            'name' => $product->name,
            'order' => $product->sku,
            'category' => $product->category,
            'cost' => '$' . number_format((float) $product->price, 2),
            'stock' => (string) $product->stock,
            'status' => $product->status,
        ];
    }
}
