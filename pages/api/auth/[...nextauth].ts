import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/mongodb";
import Admin from "../../../models/Admin";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase();
        const admin = await Admin.findOne({ username: credentials?.username });
        if (!admin) return null;
        const isValid = await bcrypt.compare(
          credentials!.password,
          admin.password
        );
        if (!isValid) return null;
        return { id: admin._id.toString(), name: "Admin", username: admin.username };
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
    updateAge: 2 * 60,
  },

  jwt: {
    maxAge: 60 * 60,
  },
});

export default handler;
