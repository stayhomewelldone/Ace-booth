import NextAuth from "next-auth/next"
import SlackProvider from "next-auth/providers/slack"

export const authOptions = {
  providers: [
    SlackProvider({
      clientId: <string>process.env.SLACK_CLIENT_ID,
      clientSecret: <string>process.env.SLACK_CLIENT_SECRET
    })
  ]
}

export default NextAuth(authOptions)