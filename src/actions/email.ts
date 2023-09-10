"use server";

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};


export const sendEmail = async (formData: FormData) => {
  console.log("Here is the form data: ", formData)
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(name);
  console.log(email);
  console.log(message);

  if (!validateString(name, 30)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(email, 100)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
      data = {formData} //TODO TL mock impl
  
    // await resend.emails.send({
    //   from: "Contact Form <onboarding@resend.dev>",
    //   to: "bytegrad@gmail.com",
    //   subject: "Message from contact form",
    //   reply_to: senderEmail,
    //   react: React.createElement(ContactFormEmail, {
    //     message: message,
    //     senderEmail: senderEmail,
    //   }),
    // });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};