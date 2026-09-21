export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, city, service, message, website } = req.body || {};

    // Honeypot field: silently accept bot submissions.
    if (website) return res.status(200).json({ success: true });

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return res.status(503).json({
        success: false,
        message: 'Email delivery is not configured for this demo yet.',
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New tree service estimate request from ${name}`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `City: ${city || 'Not provided'}`,
          `Service: ${service || 'Not selected'}`,
          '',
          message,
        ].join('\n'),
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Resend error:', details);
      return res.status(502).json({ success: false, message: 'Email provider error' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
