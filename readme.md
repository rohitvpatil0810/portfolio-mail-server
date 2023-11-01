# Rohit Portfolio Email Server

📧 A simple Node.js and Express.js server for sending email notifications from Rohit's portfolio website.

## Features

📧 **Email Notifications**: Sends email notifications to users who contact Rohit through the portfolio site, with notification of message to Rohit.

🔑 **API Key Protection**: Protects the email sending functionality with API key verification to ensure security.

## Prerequisites

- Node.js, nodemon and npm installed on your machine.

## Getting Started

1. Clone this repository to your local machine.

```
git clone https://github.com/rohitvpatil0810/portfolio-mail-server.git
```

2. Navigate to the project directory.

   ```
   cd rohit-portfolio-email-server
   ```

3. Install the project dependenceies.
4. Set up your environment variables by creating a `.env` file with the following:

   ```
   MY_EMAIL=your_email_to_receive_notification@example.com
   EMAIL=your_email_for_sending_notifications@example.com
   EMAIL_PASSWORD=your_email_password
   API_KEY=your_api_key_here
   ```

5. Start the server.

   ```
   npm run dev
   ```

6. The server will be running on `http://localhost:5000`.

## Usage

To send an email, make a POST request to the `/email/send-notification` endpoint with the required data and the API key in the headers.

Example using cURL:

```
curl -X POST -H "Content-Type: application/json" -H "x-api-key: your_api_key_here" -d '{
  "name": "name_of_messager",
  "email": "email_of_messager",
  "message": "message_of_messager"
}' http://localhost:3000//email/emailsend-notification
```
