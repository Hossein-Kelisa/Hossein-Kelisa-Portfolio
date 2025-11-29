const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(messageData) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }
  return response.json();
}
