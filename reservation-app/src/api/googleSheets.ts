import { google } from 'googleapis';
import credentials from './credentials.json';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = 'your_spreadsheet_id';
const SHEET_NAME = 'Sheet1';

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export const getSheetData = async () => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A1:Z1000`,
  });
  return response.data.values;
};

export const updateSheetData = async (range: string, values: any[][]) => {
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!${range}`,
    valueInputOption: 'RAW',
    requestBody: { values },
  });
};
