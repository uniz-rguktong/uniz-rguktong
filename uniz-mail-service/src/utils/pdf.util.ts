
import puppeteer from 'puppeteer';

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
    if (gradePoint > 0) { // Only count passed/graded subjects for points? Or all? Usually attempts.
       // Assuming standard calculation
       earnedPoints += (credit * gradePoint);
    }
  });

  // Calculate SGPA (Round to 2 decimal places)
  const sgpa = totalCredits > 0 ? (earnedPoints / totalCredits).toFixed(2) : "0.00";

  // Academic Year Inference (e.g., if sem is E1-S1 and year is 2024, it's AY24-25)
  // For now, hardcoding or using semesterId prefix to guess?
  // User image says "AY2526 SEMESTER-1 RESULTS".
  // I'll default to "AY24-25" if not provided, or simpler just "SEMESTER RESULTS"
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
          <td>${g.subject.code}</td>
          <td>${g.subject.name}</td>
          <td class="center">${g.subject.credits.toFixed(1)}</td>
          <td class="center">${getGradeLetter(g.grade)}</td>
      </tr>
  `).join('');

  // Logo: Using an online URL for RGUKT logo or a base64 string would be better.
  // For reliability, I'll use a public URL or just styling.
  const LOGO_URL = "data:image/jpeg;base64,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";

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');
      body { font-family: 'Times New Roman', serif; padding: 40px; color: #000; -webkit-print-color-adjust: exact; }
      
      .header-container { 
        text-align: center; 
        margin-bottom: 20px; 
        border-bottom: 3px solid #ff9900; 
        padding-bottom: 10px;
        position: relative;
      }
      
      .logo { 
        width: 80px; 
        position: absolute; 
        left: 0; 
        top: 0;
      }
      
      .uni-name { 
        color: #cc0000; 
        font-size: 24px; 
        font-weight: bold; 
        text-transform: uppercase; 
        margin-bottom: 5px;
        padding-left: 90px; /* Space for logo */
      }
      
      .sub-name { 
        color: #cc0000; 
        font-size: 11px; 
        font-weight: bold; 
        padding-left: 90px;
      }

      .student-info { 
        width: 100%; 
        border-collapse: collapse; 
        margin-bottom: 25px; 
        font-size: 14px;
      }
      .student-info td { 
        border: 1px solid #ddd; 
        padding: 8px 12px; 
      }
      .info-label { font-weight: bold; width: 15%; background-color: #fafafa; }
      .info-val { width: 35%; font-weight: bold; }

      .results-title { 
        text-align: center; 
        font-weight: bold; 
        font-size: 18px; 
        margin: 20px 0; 
        text-transform: uppercase; 
        letter-spacing: 0.5px;
      }

      .results-table { 
        width: 100%; 
        border-collapse: collapse; 
        border: 2px solid #000; 
        font-size: 14px;
      }

      .results-table th { 
        border: 1px solid #000; 
        border-bottom: 2px solid #000; /* As per image might be green? */
        border-top: 2px solid #008000;
        border-bottom: 2px solid #008000;
        border-left: 1px solid #000;
        border-right: 1px solid #000;

        padding: 10px; 
        text-align: left; 
        font-weight: bold;
        color: #000;
      }
      
      /* Specific green border for header as requested */
      .green-header th {
        border-top: 2px solid #008000;
        border-bottom: 2px solid #008000;
      }
      
      .results-table td { 
        border: 1px solid #000; 
        padding: 8px 10px; 
      }
      
      .center { text-align: center; }

      .footer-row td {
        background-color: #fff;
        font-weight: bold;
      }

      .watermark {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        font-size: 100px;
        color: rgba(0, 0, 0, 0.05);
        z-index: -1;
        white-space: nowrap;
        pointer-events: none;
      }
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
          <tr>
              <td class="info-label">ID</td>
              <td class="info-val">${username}</td>
              <td class="info-label">Branch:</td>
              <td class="info-val">${branch}</td>
          </tr>
          <tr>
              <td class="info-label">Name:</td>
              <td class="info-val">${name}</td>
              <td class="info-label">Campus:</td>
              <td class="info-val">${campus}</td>
          </tr>
      </table>

      <div class="results-title">${titleText}</div>

      <table class="results-table">
          <thead class="green-header">
              <tr>
                  <th style="border-left: 2px solid #008000;">COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th class="center">Credits</th>
                  <th class="center" style="border-right: 2px solid #008000;">Grade</th>
              </tr>
          </thead>
          <tbody>
              ${rows}
              <tr class="footer-row">
                  <td colspan="2" style="text-align: right; padding-right: 20px;">Total</td>
                  <td class="center">${totalCredits.toFixed(0)}</td>
                  <td class="center">${earnedPoints.toFixed(1)}</td>
              </tr>
              <tr class="footer-row">
                  <td colspan="3" style="text-align: right; padding-right: 20px;">SGPA</td>
                  <td class="center">${sgpa}</td>
              </tr>
          </tbody>
      </table>
  </body>
  </html>
  `;

  const browser = await puppeteer.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setContent(html);
  const pdfBuffer = await page.pdf({ 
    format: 'A4', 
    printBackground: true,
    margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
  });
  await browser.close();
  return Buffer.from(pdfBuffer);
};
