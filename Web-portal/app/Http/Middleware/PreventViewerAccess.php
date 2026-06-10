<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PreventViewerAccess
{
    /**
     * Redirect viewer users away from management-only pages.
     *
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user()?->role === 'viewer') {
            return redirect()->route('dashboard');
        }

        return $next($request);
    }
}
