const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(messageData) {
  const options = {
    method: "POST",
  };

  // Case 1: FormData (service request with file)
  if (messageData instanceof FormData) {
    options.body = messageData; // DO NOT add Content-Type
  }

  // Case 2: Normal JSON (contact form)
  else {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(messageData);
  }

  const response = await fetch(`${API_URL}/api/contact`, options);

  if (!response.ok) {
    const text = await response.text();
    console.error("❌ Server Response:", text);
    throw new Error("Failed to send message");
  }

  return response.json();
}
