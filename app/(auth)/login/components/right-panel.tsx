import { ErrorBanner } from './error-banner';
import { GoogleLoginButton } from './google-login-button';

type RightPanelProps = {
  errorMessage: string | null;
};

export function RightPanel({ errorMessage }: RightPanelProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center border-l border-[#969faf1a] bg-[#0b0d15] px-10 py-12 max-[900px]:min-h-0 max-[900px]:border-l-0 max-[900px]:border-t max-[900px]:px-6 max-[900px]:py-10">
      <div className="w-full max-w-[320px] text-center">
        <div className="mb-1 text-2xl font-black text-[#86efac]">Lingora</div>
        <div className="mb-8 text-[13px] text-[#969faf]">Học tiếng Anh · Chuẩn VSTEP B1</div>
        <div className="mb-8 h-px w-full bg-[#969faf1f]" />

        <ErrorBanner message={errorMessage} />

        <h2 className="mb-1.5 text-xl font-bold leading-7">Chào mừng trở lại</h2>
        <p className="mb-7 text-[13px] text-[#969faf]">Chọn phương thức đăng nhập</p>

        <GoogleLoginButton />

        <p className="text-xs leading-[18px] text-[#555a64]">
          Bằng cách đăng nhập, bạn đồng ý với{' '}
          <a className="text-[#969faf] underline hover:text-[#5468ff]" href="#">
            Điều khoản
          </a>{' '}
          và{' '}
          <a className="text-[#969faf] underline hover:text-[#5468ff]" href="#">
            Chính sách bảo mật
          </a>{' '}
          của Lingora.
        </p>
      </div>
    </section>
  );
}
