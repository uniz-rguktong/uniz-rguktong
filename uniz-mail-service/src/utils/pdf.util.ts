
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
  const titleText = `${semesterId.toUpperCase()} RESULTS`;

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
              <tr class="footer-row"><td colspan="2" style="text-align: right; padding-right: 20px;">Total</td><td class="center">${totalCredits.toFixed(0)}</td><td class="center">${earnedPoints.toFixed(1)}</td></tr>
              <tr class="footer-row"><td colspan="3" style="text-align: right; padding-right: 20px;">SGPA</td><td class="center">${sgpa}</td></tr>
          </tbody>
      </table>
  </body>
  </html>
  `;

  let browser;
  try {
      const isProduction = process.env.NODE_ENV === 'production';
      
      /* Font loading removed due to incompatibility
      if (isProduction) {
          try {
             await chromium.font('https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf');
          } catch (e) { console.warn("Font load failed:", e); }
      }
      */

      const execPath = isProduction 
         ? await chromium.executablePath()
         : (process.env.PUPPETEER_EXECUTABLE_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome');

      // @ts-ignore: ignoring specific type mismatches for now
      browser = await puppeteer.launch({
        args: isProduction ? chromium.args : [],
              // @ts-ignore: ignoring specific type mismatches for now

          defaultViewport: isProduction ? chromium.defaultViewport : { width: 1200, height: 800 },
        executablePath: execPath,
                // @ts-ignore: ignoring specific type mismatches for now

          headless: isProduction ? chromium.headless : true,
      });

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
