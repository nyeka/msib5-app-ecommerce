// file: ~/server/api/auth/[...].ts
import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  secret: "secret",

  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
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
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // eslint-disable-next-line no-console
          console.error(
            "Warning: Malicious login attempt registered, bad credentials provided"
          );

          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
