<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_the_login_page()
    {
        $response = $this->get(route('dashboard'));
        $response->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_visit_the_dashboard()
    {
        $user = User::factory()->create(['role' => 'admin']);
        $this->actingAs($user);

        $response = $this->get(route('dashboard'));
        $response->assertOk();
    }

    public function test_super_admin_users_see_the_management_dashboard()
    {
        $user = User::factory()->create(['role' => 'super_admin']);

        $this->actingAs($user);

        $this->get(route('dashboard'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('dashboard'));
    }

    public function test_viewer_users_are_sent_to_the_storefront()
    {
        $user = User::factory()->create(['role' => 'viewer']);

        $this->actingAs($user);

        $this->get(route('dashboard'))
            ->assertRedirect(route('viewer.category', ['category' => 'clothes']));
    }

    public function test_viewer_users_can_visit_category_pages()
    {
        $user = User::factory()->create(['role' => 'viewer']);

        $this->actingAs($user);

        $this->get(route('viewer.category', ['category' => 'cosmetics']))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('viewer-dashboard')
                ->where('category', 'cosmetics'));

        $this->get(route('viewer.category', ['category' => 'electronics']))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('viewer-dashboard')
                ->where('category', 'electronics'));
    }

    public function test_viewer_category_pages_use_admin_product_catalog()
    {
        $user = User::factory()->create(['role' => 'viewer']);

        Product::create([
            'name' => 'Admin Perfume',
            'sku' => 'COS-001',
            'category' => 'cosmetics',
            'price' => 25000,
            'stock' => 12,
            'status' => 'In Stock',
        ]);

        Product::create([
            'name' => 'Admin Headphones',
            'sku' => 'ELE-001',
            'category' => 'electronics',
            'price' => 84000,
            'stock' => 5,
            'status' => 'Low Stock',
        ]);

        $this->actingAs($user);

        $this->get(route('viewer.category', ['category' => 'cosmetics']))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('viewer-dashboard')
                ->where('category', 'cosmetics')
                ->has('products', 1)
                ->where('products.0.name', 'Admin Perfume')
                ->where('products.0.subtitle', 'COS-001')
                ->where('products.0.price', 'K25,000.00'));
    }

    public function test_non_viewer_users_are_redirected_from_category_pages()
    {
        $user = User::factory()->create(['role' => 'admin']);

        $this->actingAs($user);

        $this->get(route('viewer.category', ['category' => 'electronics']))
            ->assertRedirect(route('dashboard'));
    }

    public function test_viewer_users_are_redirected_from_management_pages()
    {
        $user = User::factory()->create(['role' => 'viewer']);

        $this->actingAs($user);

        $this->get(route('product'))
            ->assertRedirect(route('dashboard'));
    }

    public function test_admin_users_can_manage_products_but_not_users()
    {
        $user = User::factory()->create(['role' => 'admin']);

        $this->actingAs($user);

        $this->get(route('product'))->assertOk();
        $this->get(route('users.index'))->assertRedirect(route('dashboard'));
    }

    public function test_super_admin_users_can_manage_users()
    {
        $user = User::factory()->create(['role' => 'super_admin']);

        $this->actingAs($user);

        $this->get(route('users.index'))->assertOk();
    }
}
