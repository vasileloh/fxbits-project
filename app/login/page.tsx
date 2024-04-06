import LoginForm from "../ui/LoginForm";


export default function LoginPage() {
    return (
        <main className="flex item-center mt-40 justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <LoginForm />
            </div>
        </main>
    )
}