export interface SignInCredentials {
  username: string;
  password: string;
  remember?: boolean;
}

export function getAuthSignInUrl() {
  return process.env.NEXT_PUBLIC_AUTH_SIGN_IN_URL?.trim() ?? "";
}

export function getGoogleSignInUrl() {
  return process.env.NEXT_PUBLIC_GOOGLE_SIGN_IN_URL?.trim() ?? "";
}

export async function signInWithPassword(credentials: SignInCredentials) {
  const signInUrl = getAuthSignInUrl();
  if (!signInUrl) {
    throw new Error("AUTH_NOT_CONFIGURED");
  }

  const response = await fetch(signInUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("INVALID_CREDENTIALS");
  }

  return response.json().catch(() => ({}));
}

export function redirectToGoogleSignIn() {
  const googleSignInUrl = getGoogleSignInUrl();
  if (!googleSignInUrl) {
    throw new Error("AUTH_NOT_CONFIGURED");
  }

  window.location.assign(googleSignInUrl);
}
