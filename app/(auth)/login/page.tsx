import Link from "next/link";

export default function Login() {
    return (
        <>
            <div>Welcome to your login page!</div>
            <Link href="/forgot-password">Forgot Password</Link>
        </>
    );
}