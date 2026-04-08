# Email Configuration for Production

## Gmail Setup for Netlify Functions

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Sign in to your Google account
3. Select "Mail" and "Other (custom name)"
4. Enter "Portfolio Contact Form" as the name
5. Click "Generate"
6. Copy the 16-character password (ignore spaces)

### Step 3: Set Environment Variables in Netlify
In your Netlify dashboard for the site:

1. Go to your site dashboard
2. Click on "Site settings" > "Environment variables"
3. Add these environment variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

**Important:** Use the app password (not your regular Gmail password) for EMAIL_PASS.

### Step 4: Test the Contact Form
After deploying, test the contact form on your live site to ensure emails are being sent.

## Troubleshooting

### Common Issues:

1. **"Email service not configured"**
   - Check that all environment variables are set in Netlify site settings
   - Ensure EMAIL_PASS is the app password, not regular password

2. **"Authentication failed"**
   - Regenerate the app password
   - Make sure 2FA is enabled on your Google account

3. **Emails going to spam**
   - This is normal for Gmail. Check your spam folder
   - Add your domain to contacts if needed

### Alternative Email Services

If Gmail doesn't work, you can use:
- **Outlook/Hotmail**: Similar setup with app passwords
- **SendGrid**: Professional email service
- **Mailgun**: Another popular SMTP service

## Security Notes

- Never commit email passwords to GitHub
- Use app passwords instead of regular passwords
- Regularly rotate app passwords
- Monitor email sending limits (Gmail has daily limits)