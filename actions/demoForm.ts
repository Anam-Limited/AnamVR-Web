"use server";

import { Resend } from "resend";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  size: string;
  role: string;
  phone?: string;
  message?: string;
}

export async function submitDemoForm(prevState: any, formData: FormData) {
  // Initialize Resend inside the server action
  const resend = new Resend("re_hLJDvSti_BTiCbNeoTyUX98beqjF2d57k");

  try {
    // Extract and validate form data
    const data = {
      firstName: formData.firstName?.trim(),
      lastName: formData.lastName?.trim(),
      email: formData.email?.trim().toLowerCase(),
      company: formData.company?.trim(),
      size: formData.size,
      role: formData.role,
      phone: formData.phone?.trim() || null,
      message: formData.message?.trim() || null,
    };

    // Basic validation
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.company ||
      !data.size ||
      !data.role
    ) {
      return {
        error: "Please fill in all required fields.",
        success: false,
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        error: "Please enter a valid email address.",
        success: false,
      };
    }

    // Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
      from: "AnamVR <onboarding@resend.dev>",
      to: [data.email],
      subject: "Demo Request Confirmation - AnamVR",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7745b8, #487ce5); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Your Interest!</h1>
          </div>
          
          <div style="padding: 40px 20px; background: #f9f9f9;">
            <h2 style="color: #545454; margin-bottom: 20px;">Hi ${data.firstName},</h2>
            
            <p style="color: #545454; line-height: 1.6; margin-bottom: 20px;">
              Thank you for requesting a demo of AnamVR for your organization. We're excited to show you how our VR-based mental wellness platform can transform your workplace culture.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #7745b8; margin-top: 0;">Your Demo Request Details:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p style="margin: 5px 0;"><strong>Company:</strong> ${data.company}</p>
              <p style="margin: 5px 0;"><strong>Role:</strong> ${data.role}</p>
              <p style="margin: 5px 0;"><strong>Company Size:</strong> ${data.size}</p>
              ${data.phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${data.phone}</p>` : ""}
              ${data.message ? `<p style="margin: 5px 0;"><strong>Message:</strong> ${data.message}</p>` : ""}
            </div>
            
            <h3 style="color: #3c8c4f;">What happens next?</h3>
            <ul style="color: #545454; line-height: 1.6;">
              <li>Our team will review your request within 24 hours</li>
              <li>We'll contact you to schedule a personalized demo at your convenience</li>
              <li>During the demo, we'll show you how AnamVR can address your specific needs</li>
              <li>You'll see real data on ROI and employee engagement improvements</li>
            </ul>
            
            <p style="color: #545454; line-height: 1.6; margin-top: 30px;">
              If you have any immediate questions, feel free to reply to this email.
            </p>
            
            <p style="color: #545454; line-height: 1.6;">
              Best regards,<br>
              The AnamVR Team
            </p>
          </div>
          
          <div style="background: #545454; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              © 2024 AnamVR. Transforming mental wellness through VR technology.
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to your team
    const teamEmailResult = await resend.emails.send({
      from: "AnamVR Demo Requests <onboarding@resend.dev>",
      to: ["your-email@example.com"], // Replace with your actual email
      subject: `New Demo Request from ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7745b8;">🎯 New Demo Request</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #545454; margin-top: 0;">Contact Information:</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #7745b8;">${data.email}</a></p>
            <p style="margin: 8px 0;"><strong>Company:</strong> ${data.company}</p>
            <p style="margin: 8px 0;"><strong>Role:</strong> ${data.role}</p>
            <p style="margin: 8px 0;"><strong>Company Size:</strong> ${data.size}</p>
            ${data.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #7745b8;">${data.phone}</a></p>` : ""}
          </div>
          
          ${
            data.message
              ? `
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #7745b8;">
              <h3 style="color: #545454; margin-top: 0;">Additional Information:</h3>
              <p style="color: #545454; line-height: 1.6; margin: 0;">${data.message}</p>
            </div>
          `
              : ""
          }
          
          <div style="background: #e9ffdb; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3c8c4f;">
            <p style="margin: 0; color: #3c8c4f;"><strong>⏰ Action Required:</strong> Please reach out to schedule their demo within 24 hours for best conversion rates.</p>
          </div>
        </div>
      `,
    });

    console.log("User email sent:", userEmailResult.data?.id);
    console.log("Team email sent:", teamEmailResult.data?.id);

    return {
      success: true,
      message: "Demo request submitted successfully!",
    };
  } catch (error) {
    console.error("Error submitting demo form:", error);
    return {
      error: "Something went wrong. Please try again or contact us directly.",
      success: false,
    };
  }
}
