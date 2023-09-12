// file: ~/server/api/auth/[...].ts
import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  secret: "secret",

  pages: {
    signIn: "/login",
  },

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "Credentials",

      authorize(credentials: any) {
        const user = {
          id: "1",
          name: "Raiden Shogun",
          username: "raiden",
          password: "shogun",
          image:
            "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2021/09/09/r8sWEB0/karakter-raiden-shogun-di-genshin-impact-dibully-komunitas-gara-gara-tak-bisa-masak96.jpg",
        };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          // eslint-disable-next-line no-console
          console.error(
            "Warning: Malicious login attempt registered, bad credentials provided"
          );

          return null;
        }
      },
    }),
  ],
});
