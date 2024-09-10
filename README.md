# Messenger!

This is a simple messenger app built for the Cluep Takeaway Assessment. 

## Features:
- User Authentication with OAuth
- SideNav with dynamic user profile picture
- Ability to send and retrieve messages per user
- Ability to query messages to find matching text

## Technology
- Nextjs
- Next-Auth
- MongoDB Atlas
- Mongoose ORM
- TailwindCSS

## How to run
- Clone repo and run `pnpm i` to install node_modules
- Add a `.env.local` with necessary environment variables:
  ```
  MONGODB_URI
  AUTH_SECRET
  GOOGLE_CLIENT_ID
  GOOGLE_CLIENT_SECRET
  NEXTAUTH_URL
  ```

## Tests
- There are 5 separate unit tests written with Jest & React-Testing-Library
  - Testing the Message Input
  - Typing in the message input
  - Ensuring that messages are created
  - Fetching messages for one user
  - Querying messages