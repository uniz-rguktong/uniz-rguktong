
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export interface ResultData {
  username: string;
  name: string;
  branch: string;
  campus: string;
  semesterId: string;
  grades: {
    grade: number;
    subject: {
      code: string;
      name: string;
      credits: number;
    };
  }[];
}

export const generateResultPdf = async (data: ResultData): Promise<Buffer> => {
  const { name, username, branch, semesterId, grades, campus } = data;

  // Calculate GPA/Credits
  let totalCredits = 0;
  let earnedPoints = 0;
  grades.forEach((g) => {
    const credit = Number(g.subject.credits);
    const gradePoint = Number(g.grade);
    totalCredits += credit;
    // GPA typically includes all credits registered, but let's follow standard
    // If gradePoint is 0 (Remedial), it counts as attempted (credits added) but 0 points.
    if (credit > 0) {
       earnedPoints += (credit * (gradePoint > 0 ? gradePoint : 0));
    }
  });

  const sgpa = totalCredits > 0 ? (earnedPoints / totalCredits).toFixed(2) : "0.00";
  /* 
    Title Logic:
    1. Try to parse E#S# or P#S# from semesterId (e.g., "E2S1", "AY24-E3-S2")
    2. If not found, try to infer from first subject code (e.g., "CS2101" -> E2 S1)
    3. Fallback to raw semesterId
  */
  let titleText = `${semesterId.toUpperCase()} RESULTS`;
  
  // Regex for E1S1, P2S1, E3-S2, etc.
  // Regex for E1S1, P2S1, E3-S2, etc.
  // We decouple Year and Sem extraction to handle cases like "SEM-1" (Year missing)
  
  let yearStr = "";
  let semStr = "";

  // 1. Try to extract Year (E1-E4, P1-P2) from semesterId
  const yearMatch = semesterId.match(/([EP])[-_ ]?([1-4])/i);
  if (yearMatch) {
      yearStr = `${yearMatch[1].toUpperCase()}${yearMatch[2]}`;
  }

  // 2. Try to extract Semester (S1-S3) from semesterId
  const semMatch = semesterId.match(/S(?:em(?:ester)?)?[-_ ]?([1-3])/i);
  if (semMatch) {
      semStr = semMatch[1];
  }

  // 3. Fallback: Infer Year from Subject Code if missing (e.g. CS2101 -> E2)
  if (!yearStr && grades.length > 0 && grades[0].subject && grades[0].subject.code) {
      // Matches: First digit after letters (CS2... -> 2)
      const codeMatch = grades[0].subject.code.match(/^[a-zA-Z]+[-_ ]?([1-4])/);
      if (codeMatch) {
          yearStr = `E${codeMatch[1]}`; // Default to Engineering
      }
  }

  if (yearStr && semStr) {
      titleText = `${yearStr} SEMESTER-${semStr} RESULTS`;
  } else {
      // Fallback if partial info
      titleText = `${semesterId.toUpperCase()} RESULTS`.replace(' RESULTS RESULTS', ' RESULTS');
  }

  const getGradeLetter = (point: number) => {
    if (point >= 10) return "EX";
    if (point >= 9) return "A";
    if (point >= 8) return "B";
    if (point >= 7) return "C";
    if (point >= 6) return "D";
    if (point >= 5) return "E";
    return "R";
  };

  const rows = grades.map((g) => `
      <tr>
          <td>${g.subject.name}</td>
          <td class="center">${g.subject.credits.toFixed(1)}</td>
          <td class="center">${getGradeLetter(g.grade)}</td>
      </tr>
  `).join('');

  const LOGO_URL = "https://res.cloudinary.com/dy2fjgt46/image/upload/v1770094547/rguktongole_logo_tzdkrc.jpg";

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');
      body { font-family: 'Times New Roman', serif; padding: 40px; color: #000; -webkit-print-color-adjust: exact; }
      
      .header-container { text-align: center; margin-bottom: 20px; border-bottom: 3px solid #ff9900; padding-bottom: 10px; position: relative; }
      .logo { width: 80px; position: absolute; left: 0; top: 0; }
      .uni-name { color: #cc0000; font-size: 24px; font-weight: bold; text-transform: uppercase; margin-bottom: 5px; padding-left: 90px; }
      .sub-name { color: #cc0000; font-size: 11px; font-weight: bold; padding-left: 90px; }
      .student-info { width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px; }
      .student-info td { border: 1px solid #ddd; padding: 8px 12px; }
      .info-label { font-weight: bold; width: 15%; background-color: #fafafa; }
      .info-val { width: 35%; font-weight: bold; }
      .results-title { text-align: center; font-weight: bold; font-size: 18px; margin: 20px 0; text-transform: uppercase; letter-spacing: 0.5px; }
      .results-table { width: 100%; border-collapse: collapse; border: 2px solid #000; font-size: 14px; }
      .results-table th { border: 1px solid #000; padding: 10px; text-align: left; font-weight: bold; color: #000; }
      .green-header th { border-top: 2px solid #008000; border-bottom: 2px solid #008000; }
      .results-table td { border: 1px solid #000; padding: 8px 10px; }
      .center { text-align: center; }
      .footer-row td { background-color: #fff; font-weight: bold; }
      .watermark { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); font-size: 100px; color: rgba(0, 0, 0, 0.05); z-index: -1; white-space: nowrap; pointer-events: none; }
  </style>
  </head>
  <body>
      <div class="watermark">RGUKT ${campus.toUpperCase()}</div>
      <div class="header-container">
          <img src="${LOGO_URL}" class="logo" alt="RGUKT Logo" />
          <div class="uni-name">Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh</div>
          <div class="sub-name">(Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f), 12(B) of UGC Act, 1956)</div>
      </div>
      <table class="student-info">
          <tr><td class="info-label">ID</td><td class="info-val">${username}</td><td class="info-label">Branch:</td><td class="info-val">${branch}</td></tr>
          <tr><td class="info-label">Name:</td><td class="info-val">${name}</td><td class="info-label">Campus:</td><td class="info-val">${campus}</td></tr>
      </table>
      <div class="results-title">${titleText}</div>
      <table class="results-table">
          <thead class="green-header">
              <tr><th style="border-left: 2px solid #008000;">COURSE TITLE</th><th class="center">Credits</th><th class="center" style="border-right: 2px solid #008000;">Grade</th></tr>
          </thead>
          <tbody>
              ${rows}
              <tr class="footer-row">
                  <td style="text-align: right; padding-right: 20px;">Total</td>
                  <td class="center">${totalCredits.toFixed(0)}</td>
                  <td class="center">${earnedPoints.toFixed(1)}</td>
              </tr>
              <tr class="footer-row">
                  <td colspan="2" style="text-align: right; padding-right: 20px;">SGPA</td>
                  <td class="center">${sgpa}</td>
              </tr>
          </tbody>
      </table>
  </body>
  </html>
  `;

  let browser;
  const launchBrowser = async (retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const isProduction = process.env.NODE_ENV === 'production';
        const execPath = isProduction 
           ? await chromium.executablePath()
           : (process.env.PUPPETEER_EXECUTABLE_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome');
  
        // @ts-ignore
        return await puppeteer.launch({
            args: isProduction ? chromium.args : [],
            // @ts-ignore
            defaultViewport: isProduction ? chromium.defaultViewport : { width: 1200, height: 800 },
            executablePath: execPath,
            // @ts-ignore
            headless: isProduction ? chromium.headless : true,
        });
      } catch (err: any) {
        if (i < retries - 1 && (err.code === 'ETXTBSY' || err.message.includes('ETXTBSY'))) {
          console.warn(`Launch failed (attempt ${i + 1}), retrying in 200ms...`);
          await new Promise(r => setTimeout(r, 200));
        } else {
          throw err;
        }
      }
    }
  };

  try {
      browser = await launchBrowser();
      if (!browser) throw new Error("Failed to launch browser after retries");

      const page = await browser.newPage();
      await page.setContent(html);
      const pdfBuffer = await page.pdf({ 
        format: 'A4', 
        printBackground: true,
        margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
      });
      return Buffer.from(pdfBuffer);
  } catch (error) {
     console.error("Puppeteer Launch Error:", error);
     throw error;
  } finally {
      if (browser) await browser.close();
  }
};
