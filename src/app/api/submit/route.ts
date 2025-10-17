import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: (process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "").replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    await auth.authorize();

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), name, email]],
      },
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.log("error", e);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
