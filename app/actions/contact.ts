'use server';

/**
 * Contact form server action — powered by Resend.
 *
 * SETUP CHECKLIST:
 * 1. Install the Resend SDK:  npm install resend
 * 2. Add your API key to your environment file (.env.local):
 *    RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
 * 3. (Optional) Verify your sending domain in the Resend dashboard and
 *    update the `from` address below. Until your domain is verified you can
 *    use Resend's test address: onboarding@resend.dev
 * 4. Uncomment the code below and remove the placeholder return.
 */

// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  dob: string;
  phone: string;
  service: string;
  message: string;
};

export async function sendContactDob(formData: ContactFormData): Promise<{
  success: boolean;
  message: string;
}> {
  // TODO: Paste your RESEND_API_KEY into .env.local, then uncomment the block below.

  /*
  try {
    const { data, error } = await resend.emails.send({
      from: 'Choudhary Capital Crux <onboarding@resend.dev>', // TODO: replace with your verified domain
      to: 'hello@choudharycapitalcrux.com', // TODO: replace with the inbox you want enquiries to land in
      subject: `New enquiry from ${formData.name} — ${formData.service}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return { success: false, message: 'Could not send email. Please try again.' };
    }

    return { success: true, message: 'Thank you! We will get back to you within 24 hours.' };
  } catch (err) {
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
  */

  // Placeholder so the form works in the UI before Resend is wired up.
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.log('Contact form submission (Resend not yet configured):', formData);
  return {
    success: true,
    message:
      'Thank you! Your message has been received. We will get back to you within 24 hours.',
  };
}
