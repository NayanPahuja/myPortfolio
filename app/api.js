// lib/api.js

export async function fetchDevToPosts() {
    const response = await fetch('https://dev.to/api/articles?username=pahujanayan');
    const data = await response.json();
    return data;
  }
  