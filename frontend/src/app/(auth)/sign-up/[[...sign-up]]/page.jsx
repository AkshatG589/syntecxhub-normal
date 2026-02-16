import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Sign Up | Syntecxhub – Start Your Learning Journey",
  description:
    "Create your Syntecxhub account to access structured training & internship programs, real-world projects, and future-ready learning opportunities.",
  keywords: [
    "Syntecxhub sign up",
    "training and internship registration",
    "student learning platform",
    "skill development sign up",
    "online training programs",
    "virtual internship platform",
  ],
  openGraph: {
    title: "Sign Up | Syntecxhub",
    description:
      "Join Syntecxhub to begin your training & internship journey and build real-world skills.",
    url: "https://syntecxhub.com/sign-up",
    siteName: "Syntecxhub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sign Up | Syntecxhub",
    description:
      "Create your Syntecxhub account and start learning through structured training & internship programs.",
  },
};


export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}
