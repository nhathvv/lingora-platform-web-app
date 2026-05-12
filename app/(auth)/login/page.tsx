import { Be_Vietnam_Pro } from 'next/font/google';
import { LeftPanel } from './components/left-panel';
import { RightPanel } from './components/right-panel';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600', '700', '900'],
});

const ERROR_MESSAGES: Record<string, string> = {
  google_oauth_failed: 'Đăng nhập Google thất bại. Vui lòng thử lại.',
  google_no_email: 'Tài khoản Google không có email. Vui lòng dùng tài khoản khác.',
};

type LoginPageProps = {
  searchParams?: Promise<{
    error?: string | string[];
  }>;
};

function getErrorMessage(error?: string | string[]) {
  const code = Array.isArray(error) ? error[0] : error;
  return code ? (ERROR_MESSAGES[code] ?? null) : null;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const errorMessage = getErrorMessage(params?.error);

  return (
    <main
      className={`${beVietnamPro.className} grid min-h-screen grid-cols-[minmax(0,1fr)_420px] overflow-x-hidden overflow-y-hidden bg-black text-white max-[900px]:grid-cols-1 max-[900px]:overflow-y-auto`}
    >
      <LeftPanel />
      <RightPanel errorMessage={errorMessage} />
    </main>
  );
}
