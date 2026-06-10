import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({
    title = '',
    description = '',
    showLogo = true,
    children,
}: {
    title?: string;
    description?: string;
    showLogo?: boolean;
    children: React.ReactNode;
}) {
    return (
        <AuthLayoutTemplate
            title={title}
            description={description}
            showLogo={showLogo}
        >
            {children}
        </AuthLayoutTemplate>
    );
}
