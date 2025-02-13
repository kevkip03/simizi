import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Login() {
    return (
        <div>
            
        <div className="loginBtn" >
        <h3>Logi in to simizi</h3>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
        </div>
    )
}