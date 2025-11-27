# Deployment Instructions for Contact Form

## Required Environment Variables

To enable the contact form functionality, you need to add the following environment variables to your Vercel project:

### 1. MAIL_USER
This is the Gmail address that will send the emails.
- Value: Your Gmail address (e.g., `your-email@gmail.com`)

### 2. MAIL_PASS
This is the Gmail App Password (NOT your regular Gmail password).

#### How to Generate Gmail App Password:
1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "How you sign in to Google", enable "2-Step Verification" (if not already enabled)
4. After enabling 2-Step Verification, go back to Security
5. Click on "App passwords" (you'll see this option after enabling 2-Step Verification)
6. Select "Mail" as the app and "Other" as the device
7. Enter "Chef Website" as the device name
8. Click "Generate"
9. Copy the 16-character password (spaces will be removed automatically)

### Adding Environment Variables to Vercel:

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Add the following variables:

\`\`\`
Key: MAIL_USER
Value: chefsurendrar@gmail.com (or the Gmail you want to use)

Key: MAIL_PASS
Value: [Your 16-character app password from step 9 above]
\`\`\`

5. Make sure to select all environments (Production, Preview, Development)
6. Click "Save"
7. Redeploy your application for the changes to take effect

## Testing the Contact Form

After deployment:
1. Visit your website
2. Navigate to the Contact section
3. Fill out the form with test information
4. Submit the form
5. You should receive:
   - An email at chefsurendrar@gmail.com with the message details
   - A confirmation email sent to the email address you entered in the form

## Troubleshooting

If emails are not sending:
1. Verify the environment variables are correctly set in Vercel
2. Make sure you're using an App Password, not your regular Gmail password
3. Check the Vercel function logs for any error messages
4. Ensure 2-Step Verification is enabled on your Google account
5. Try regenerating the App Password if it's not working

## Security Notes

- Never commit your App Password to Git
- Always use environment variables for sensitive data
- The App Password is specific to this application only
- You can revoke the App Password anytime from your Google Account settings
