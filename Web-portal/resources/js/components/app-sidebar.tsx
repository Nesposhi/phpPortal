import { Link, usePage } from '@inertiajs/react';
import {
    BookOpen,
    FolderGit2,
    LayoutGrid,
    Shield,
    ShoppingBag,
    User,
    Users,
} from 'lucide-react';
import { viewerCategories } from '@/data/viewer-marketplace';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, product, userCreate } from '@/routes';
import type { Auth, NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Users',
        href: '/users',
        icon: Users,
    },
    {
        title: 'Products',
        href: product(),
        icon: FolderGit2,
    },
    {
        title: 'Create user',
        href: userCreate(),
        icon: User,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: '',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: '',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const page = usePage<{ auth: Auth }>();
    const { auth } = page.props;
    const currentUrl = page.url;
    const role = auth.user?.role;
    const isViewer = role === 'viewer';
    const isSuperAdmin = role === 'super_admin';
    const visibleNavItems = isViewer
        ? []
        : isSuperAdmin
          ? mainNavItems
          : mainNavItems.filter((item) =>
                ['Dashboard', 'Products'].includes(item.title),
            );

    return (
        <Sidebar collapsible="offcanvas" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <span className="grid size-9 place-items-center rounded-md bg-sky-600 text-white">
                                    {isViewer ? (
                                        <ShoppingBag className="size-5" />
                                    ) : (
                                        <Shield className="size-5" />
                                    )}
                                </span>
                                <span className="flex min-w-0 flex-col">
                                    <span className="truncate text-sm font-bold">
                                        Nesposhi
                                    </span>
                                    <span className="truncate text-xs capitalize text-sidebar-foreground/70">
                                        {role?.replace('_', ' ') ?? 'Portal'}
                                    </span>
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {visibleNavItems.length > 0 && (
                    <NavMain items={visibleNavItems} />
                )}
                {isViewer && (
                    <SidebarGroup className="px-2 py-0">
                        <SidebarGroupLabel>Shop categories</SidebarGroupLabel>
                        <SidebarMenu>
                            {viewerCategories.map((category) => {
                                const Icon = category.icon;

                                return (
                                    <SidebarMenuItem key={category.id}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={currentUrl.includes(
                                                `/viewer/${category.id}`,
                                            )}
                                            tooltip={{ children: category.label }}
                                        >
                                            <Link
                                                href={`/viewer/${category.id}`}
                                                prefetch
                                            >
                                                <Icon />
                                                <span>{category.label}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroup>
                )}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
