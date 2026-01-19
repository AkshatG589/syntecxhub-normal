import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In | Syntecxhub – Access Your Dashboard",
  description:
    "Sign in to Syntecxhub to continue your training & internship journey, track progress, and access real-world projects.",
  keywords: [
    "Syntecxhub sign in",
    "training and internship login",
    "student dashboard login",
    "online learning platform login",
    "virtual internship portal",
  ],
  openGraph: {
    title: "Sign In | Syntecxhub",
    description:
      "Access your Syntecxhub account to continue structured training & internship programs.",
    url: "https://syntecxhub.com/sign-in",
    siteName: "Syntecxhub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sign In | Syntecxhub",
    description:
      "Log in to Syntecxhub and continue building real-world skills through training & internships.",
  },
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}
