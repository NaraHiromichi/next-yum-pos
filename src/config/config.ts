interface Config {
  clientId: string;
  clientSecrect: string;
  nextauth_secret: string;
}

export const config: Config = {
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  clientSecrect: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
  nextauth_secret: process.env.NEXTAUTH_SECRET || "",
};
