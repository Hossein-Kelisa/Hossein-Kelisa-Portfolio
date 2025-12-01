const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(messageData) {
  let options = {
    method: "POST",
  };

  // If messageData is FormData → DO NOT set content-type
  if (messageData instanceof FormData) {
    options.body = messageData;
  } else {
    // Normal JSON for contact form
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(messageData);
  }

  const response = await fetch(`${API_URL}/api/contact`, options);

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}
