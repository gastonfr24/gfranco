import { EmailTemplateClient } from '@/components/contact/template/email-client';
import { EmailTemplate } from '@/components/contact/template/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:any) {
  try {

      const body = await request.json()
      const {email, name, message} = body
    const data = await resend.emails.send({
      from: `gastonfr.com <noreply@gastonfr.com>`,
      to: ['gastonfr24@gmail.com'],
      subject: 'cotización de página web',
      react: EmailTemplate({ firstName: name, message:message, email:email }),
      text: message
    });


    const data_ = await resend.emails.send({
      from: `gastonfr.com <noreply@gastonfr.com>`,
      to: [email],
      subject: 'cotización de página web',
      react: EmailTemplateClient({ firstName: name, email:email }),
      text: message
    });


    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
