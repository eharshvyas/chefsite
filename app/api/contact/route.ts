import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.error('Missing email configuration. Please set MAIL_USER and MAIL_PASS environment variables.')
      return Response.json(
        { success: false, message: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    const mailOptionsToChef = {
      from: process.env.MAIL_USER,
      to: 'chefsurendrar@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0066FF; border-bottom: 2px solid #FFA500; padding-bottom: 10px;">New Contact Form Message</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #0066FF;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #0066FF;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #0066FF;">Received:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong style="color: #0066FF;">Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 12px; margin: 0;">This email was sent from the contact form on your website</p>
          </div>
        </div>
      `,
    }

    const mailOptionsToUser = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Thank you for contacting Chef Surendra Rawat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0066FF; border-bottom: 2px solid #FFA500; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">Dear ${name},</p>
            <p style="margin: 10px 0;">Thank you for contacting Chef Surendra Rawat. Your message has been received and we will get back to you shortly.</p>
            <p style="margin: 10px 0;">We appreciate your interest in creating customized culinary experiences with Himalayan artistry.</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong style="color: #0066FF;">Your Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Best regards,</strong></p>
            <p style="margin: 5px 0;">Chef Surendra Rawat</p>
            <p style="margin: 5px 0; color: #666;">Executive Chef, India Palace Restaurant</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 12px; margin: 5px 0;">Email: chefsurendrar@gmail.com</p>
            <p style="color: #666; font-size: 12px; margin: 5px 0;">Restaurant: +1 (630) 681 8002</p>
            <p style="color: #666; font-size: 12px; margin: 5px 0;">India Palace Restaurant, 242 E Geneva Rd, Wheaton, IL 60187</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptionsToChef)
    await transporter.sendMail(mailOptionsToUser)

    return Response.json({ success: true, message: 'Emails sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { success: false, message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
