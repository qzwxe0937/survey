/**
 * Google App Script: 數位轉型影響因素研究問卷數據收集
 * 參照2.js的設計方式，接收text/plain格式的JSON數據並存儲到Google Sheet
 */

const SHEET_NAME = '問卷數據'; // Google Sheet的工作表名稱
const SHARED_KEY = ''; // 可留空，用於額外的安全驗證
const VERSION = 'v2025-08-05-1'; // 版本號，用來確認是否為新版本

/**
 * 處理POST請求 - 接收問卷數據
 * @param {Object} e - 事件對象
 * @returns {TextOutput} 響應結果
 */
function doPost(e) {
  try {
    // 檢查請求是否有效
    if (!e || !e.postData) {
      return txt('Bad Request: 無效的請求');
    }
    
    // 檢查Content-Type是否為text/plain
    const contentType = e.postData.type || '';
    if (!contentType.startsWith('text/plain')) {
      return txt('Unsupported Media Type: 僅支持text/plain格式');
    }

    // 獲取原始數據
    const rawData = e.postData.contents || '';
    if (!rawData) {
      return txt('Empty body: 請求體為空');
    }

    // 解析JSON數據
    let data;
    try { 
      data = JSON.parse(rawData); 
    } catch (parseError) { 
      return txt('Invalid JSON syntax: JSON格式錯誤'); 
    }

    // 驗證數據格式
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      return txt('Invalid JSON: 必須是對象格式');
    }

    // 檢查共享密鑰（如果設置了的話）
    if (SHARED_KEY && data.key !== SHARED_KEY) {
      return txt('Unauthorized: 未授權的訪問');
    }

    // 驗證必要字段
    const surveyId = String(data.surveyId ?? '').trim();
    if (!surveyId) {
      return txt('Missing field: surveyId 字段缺失');
    }

    // 獲取Google Sheet
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return txt('Sheet not found: 找不到工作表 "' + SHEET_NAME + '"');
    }

    // 準備要寫入的數據行
    const rowData = [
      new Date(),                    // 時間戳
      surveyId,                      // 問卷ID
      data.timestamp || '',          // 提交時間
      data.startTime || '',          // 開始時間
      data.endTime || '',            // 結束時間
      data.totalQuestions || 0,      // 總問題數
      data.gender || '',             // 性別
      data.age || '',                // 年齡
      data.education || '',          // 教育程度
      data.electronics_industry || '', // 是否為電子製造業
      data.experience || '',         // 數位轉型年資
      data.answersData || ''         // 完整答案數據（JSON字符串）
    ];

    // 將數據添加到工作表
    sheet.appendRow(rowData);

    // 返回成功響應
    return json({ 
      ok: true, 
      version: VERSION,
      surveyId: surveyId,
      message: '數據已成功保存到Google Sheet'
    });
    
  } catch (error) {
    // 記錄錯誤並返回錯誤響應
    console.error('doPost error:', error);
    return json({ 
      ok: false, 
      error: String(error), 
      version: VERSION 
    });
  }
}

/**
 * 處理GET請求 - 用於測試連接
 * @param {Object} e - 事件對象
 * @returns {TextOutput} 響應結果
 */
function doGet(e) {
  try {
    return json({ 
      ok: true, 
      version: VERSION,
      message: '數位轉型影響因素研究問卷API服務正常運行',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return json({ 
      ok: false, 
      error: String(error), 
      version: VERSION 
    });
  }
}

/**
 * 創建Google Sheet的標題行
 * 在首次部署時調用此函數來設置工作表結構
 */
function setupSheet() {
  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    if (!sheet) {
      // 如果工作表不存在，創建新的工作表
      const newSheet = SpreadsheetApp.getActive().insertSheet(SHEET_NAME);
      setupSheetHeaders(newSheet);
    } else {
      // 如果工作表存在，檢查是否需要設置標題
      const firstRow = sheet.getRange(1, 1, 1, sheet.getLastColumn());
      if (firstRow.getValue() === '') {
        setupSheetHeaders(sheet);
      }
    }
    
    console.log('工作表設置完成');
    return true;
  } catch (error) {
    console.error('設置工作表時發生錯誤:', error);
    return false;
  }
}

/**
 * 設置工作表標題行
 * @param {Sheet} sheet - Google Sheet對象
 */
function setupSheetHeaders(sheet) {
  const headers = [
    '記錄時間',
    '問卷ID',
    '提交時間',
    '開始時間', 
    '結束時間',
    '總問題數',
    '性別',
    '年齡',
    '教育程度',
    '是否為電子製造業',
    '數位轉型年資',
    '完整答案數據'
  ];
  
  // 設置標題行
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  
  // 設置標題行樣式
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  
  // 自動調整列寬
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
  
  // 凍結標題行
  sheet.setFrozenRows(1);
}

/**
 * 輔助函數：創建文本響應
 * @param {string} text - 響應文本
 * @returns {TextOutput} 文本響應對象
 */
function txt(text) {
  return ContentService.createTextOutput(text)
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * 輔助函數：創建JSON響應
 * @param {Object} obj - 響應對象
 * @returns {TextOutput} JSON響應對象
 */
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 測試函數：用於本地測試
 */
function testLocal() {
  const testData = {
    surveyId: 'TEST_' + Date.now(),
    timestamp: new Date().toISOString(),
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    totalQuestions: 10,
    gender: 'male',
    age: '25~30歲',
    education: '大學',
    electronics_industry: 'yes',
    experience: '5年',
    answersData: JSON.stringify({
      test: 'data',
      timestamp: new Date().toISOString()
    })
  };
  
  console.log('測試數據:', testData);
  return testData;
} 