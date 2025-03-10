import NextAuth from "next-auth"
// import authOptions from "@/options"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address)
            //   const res = await fetch("/your/endpoint", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })
            const user = { id: "1", name: "Sai Theja", username: "Sai Theja", password: "teja223344" };
        
              // If no error and we have user data, return it
              if (credentials.username === user.username && credentials.password === user.password) {
                return user; // Successful login
              }
              // Return null if user data could not be retrieved
              throw new Error("Invalid username or password");
            }
          }),
      ],
      secret: process.env.NEXTAUTH_SECRET,
    //   pages: {
    //     signIn: "/auth/signin", // Optional: Custom sign-in page
    //   },

    
})

export { handler as GET, handler as POST }