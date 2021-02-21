import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'

dotenv.config()

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 
  const message = {
    to: 'adam@adamjberkowitz.com',
    from: 'adam@adamjberkowitz.com',
    subject: `${req.body.subject} - ${req.body.email}`,
    html: `
      <h1>${req.body.subject}</h1>
      <div>
        <p><strong>${req.body.email}</strong></p>
        <p>${req.body.message}</p>
      </div>
    `
  }

  try {
    await sgMail.send(message)
    res.status(200).send('Message sent')
  } catch (err) {
    console.log({err: err.response.body.errors})
    res.status(400).send('Message error')
  }
}



