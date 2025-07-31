// 定義構面和因素
const dimensions = {
    A: { name: "科技機會主義", description: "利用新技術所帶來的機會，來推動組織的創新與成長。" },
    B: { name: "資源管弦化", description: "有效配置和整合資源以提升組織效率和能力。" },
    C: { name: "IT人員能力", description: "IT專業人員的技術和行為技能，用於支持和推動企業變革。" },
    D: { name: "數位轉型", description: "透過技術革新來重塑企業運營和商業模式，以提高競爭力。" },
    E: { name: "組織機動性", description: "企業快速適應市場變化和抓住機遇的能力。" }
};

const factors = {
    a1: { 
        name: "科技偵測能力", 
        dimension: "A", 
        description: "指企業能夠識別、理解並反應其所處環境中出現的技術變化的能力。",
        examples: [
            "公司通常對可能影響其業務的技術進步非常敏感。",
            "公司積極尋求可能影響其業務的技術進步信息。",
            "公司定期審查技術變化對其業務的影響。"
        ]
    },
    a2: { 
        name: "科技回應能力", 
        dimension: "A", 
        description: "指企業在識別和理解技術變化後，能夠迅速且有效地調整其資源和業務流程以適應這些技術變革的能力。",
        examples: [
            "公司通常對外部技術變化反應迅速。",
            "公司的業務部門在應對新技術方面不會落後。",
            "公司不會故意對技術進步反應緩慢。"
        ]
    },
    b1: { 
        name: "建構資源", 
        dimension: "B", 
        description: "指企業如何有效地配置和組織其內部資源，支持組織目標的實現。",
        examples: [
            "公司從技術服務提供商採購有價值的數位資源。",
            "公司自主開發有價值的數位資源。",
            "公司善於利用有價值的數位資源。"
        ]
    },
    b2: { 
        name: "組合資源", 
        dimension: "B", 
        description: "指企業將不同的資源(如人力、技術、財務資源等)進行整合和協同，以達到最大化價值的過程。",
        examples: [
            "公司整合現有數位資源以逐步提升營運能力。",
            "公司整合現有數位資源以擴展營運能力。",
            "公司整合現有數位資源以創造提升競爭優勢的新能力。"
        ]
    },
    b3: { 
        name: "善用資源", 
        dimension: "B", 
        description: "指企業在運營過程中，將現有資源的價值最大化，並利用這些資源來支持戰略目標的達成。",
        examples: [
            "公司善於利用數位資源確認抓住商機所需的靈活整合能力。",
            "公司善於利用數位資源確認現有能力的有效整合。",
            "公司善於利用數位資源整合相關策略，如資源優勢策略、市場開發策略或創業策略。"
        ]
    },
    c1: { 
        name: "技術能力", 
        dimension: "C", 
        description: "指在資訊技術領域的專業知識和技能。",
        examples: [
            "公司IT人員精通多樣化和結構化的程式設計方法或工具。",
            "公司IT人員精通分散式處理或運算。",
            "公司IT人員精通網路管理。",
            "公司IT人員精通網頁應用程式。",
            "公司IT人員精通資料倉儲和資料探勘。"
        ]
    },
    c2: { 
        name: "行為能力", 
        dimension: "C", 
        description: "指在工作環境中展現的行為和軟技能。",
        examples: [
            "公司IT人員自動自發。",
            "公司IT人員具備專案規劃、組織與領導能力。",
            "公司IT人員具有協同合作能力。",
            "公司IT人員可以勝任處理業務問題的跨功能團隊。",
            "公司IT人員接受跨領域支援的相關訓練。"
        ]
    },
    c3: { 
        name: "業務能力", 
        dimension: "C", 
        description: "指企業在其運營和市場中取得成功所需的核心能力。",
        examples: [
            "公司IT人員對於公司的關鍵成功因素很有概念。",
            "公司IT人員被鼓勵學習新興科技。",
            "公司IT人員積極跟進新興科技。",
            "公司資訊策略有效配合企業策略。",
            "公司IT人員瞭解公司政策與計畫。",
            "公司IT人員理解業務問題並能提出適當的技術解決方案。",
            "公司IT人員瞭解業務運作方式。"
        ]
    },
    d1: { 
        name: "效率數位轉型", 
        dimension: "D", 
        description: "指企業能夠更迅速地響應市場變化，提升整體生產力。",
        examples: [
            "公司發展可行的數位轉型計畫。",
            "公司調整組織結構以配合數位轉型任務。",
            "公司使用數位科技優化調整重要流程。",
            "公司使用大量的內外部資料以制定明智的決策。"
        ]
    },
    d2: { 
        name: "價值數位轉型", 
        dimension: "D", 
        description: "指企業提供創新的數位解決方案，通過產品、服務和商業模式的數位化來創造新價值。",
        examples: [
            "公司使用數位科技以優化現有產品或服務。",
            "公司有能力開發與提供新的數位產品或服務。",
            "公司透過資料來認定與回應市場變遷與客戶需求。",
            "公司透過資源共享與科技串連方式與利害關係人共創價值。"
        ]
    },
    e1: { 
        name: "營運調整機動性", 
        dimension: "E", 
        description: "指企業能夠迅速調整內部流程和資源配置，以提高效率和響應速度。",
        examples: [
            "面對供應商出貨異常狀況，公司可快速採取替代方案與內部調整。",
            "面對市場需求的波動，公司可以有效彈性調整產品或服務規模。",
            "公司可以有效快速回應客戶的特殊需求，取得客戶信任。"
        ]
    },
    e2: { 
        name: "市場商機機動性", 
        dimension: "E", 
        description: "指企業識別和抓住新興技術帶來的商業機遇的能力。",
        examples: [
            "公司可以快速的制定與推動適當的決策，以回應市場或客戶的變動。",
            "公司看待市場相關變動與重大混亂為可以快速掌握的商機。",
            "公司持續尋求再創或再造組織，以提供客戶更好的服務。"
        ]
    }
};

// 全局變量
let currentStep = 1;
let bestFactor = null;
let worstFactor = null;
let surveyData = {};

// DEMATEL 問題追蹤變量
let currentDimensionQuestion = 0;
let currentFactorQuestion = 0;
let dimensionQuestions = [];
let factorQuestions = [];

// 保存用戶答案的變量
let dimensionAnswers = {};
let factorAnswers = {};

// 在現有代碼中添加以下函數

// 顯示說明頁面
function showInstructions() {
    const modal = new bootstrap.Modal(document.getElementById('instructionModal'));
    modal.show();
}

// 開始填寫問卷
function startQuestionnaire() {
    // 關閉說明頁面
    const modal = bootstrap.Modal.getInstance(document.getElementById('instructionModal'));
    modal.hide();
    
    // 滾動到問卷開始位置
    document.querySelector('.container').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// 初始化問卷
document.addEventListener('DOMContentLoaded', function() {
    generateFactorExplanations();
    generateBWMSelections();
    generateDEMATELDimensionComparison();
    generateDEMATELFactorComparison();
    updateProgress();
    
    // 確保表單提交事件監聽器正確綁定
    const form = document.getElementById('questionnaireForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        console.log('表單提交事件監聽器已綁定');
    } else {
        console.error('找不到問卷表單元素');
    }
    
    // 自動顯示說明頁面
    setTimeout(() => {
        showInstructions();
    }, 500);
});

// 生成因素說明
function generateFactorExplanations() {
    const container = document.getElementById('factor-explanations');
    
    // 按構面分組顯示因素
    const dimensionGroups = {};
    Object.entries(factors).forEach(([key, factor]) => {
        if (!dimensionGroups[factor.dimension]) {
            dimensionGroups[factor.dimension] = [];
        }
        dimensionGroups[factor.dimension].push({ key, factor });
    });
    
    Object.entries(dimensionGroups).forEach(([dimension, factorList]) => {
        const dimensionDiv = document.createElement('div');
        dimensionDiv.className = 'mb-4';
        
        const dimensionTitle = document.createElement('h6');
        dimensionTitle.className = 'text-primary border-bottom pb-2 mb-3';
        dimensionTitle.innerHTML = `<strong>${dimension}、${dimensions[dimension].name}</strong>`;
        dimensionDiv.appendChild(dimensionTitle);
        
        factorList.forEach(({ key, factor }) => {
            const factorDiv = document.createElement('div');
            factorDiv.className = 'card mb-2';
            
            let examplesHtml = '';
            if (factor.examples) {
                examplesHtml = `
                    <div class="mt-2">
                        <small class="text-primary"><strong>舉例：</strong></small>
                        <ul class="list-unstyled mt-1">
                            ${factor.examples.map(example => 
                                `<li><small class="text-muted">• ${example}</small></li>`
                            ).join('')}
                        </ul>
                    </div>
                `;
            }
            
            factorDiv.innerHTML = `
                <div class="card-body py-2">
                    <div class="row">
                        <div class="col-md-3">
                            <strong class="text-success">${key}.</strong> ${factor.name}
                        </div>
                        <div class="col-md-9">
                            <p class="text-muted mb-0">${factor.description}</p>
                            ${examplesHtml}
                        </div>
                    </div>
                </div>
            `;
            dimensionDiv.appendChild(factorDiv);
        });
        
        container.appendChild(dimensionDiv);
    });
}

// 生成BWM選擇
function generateBWMSelections() {
    // 生成最佳因素選項
    const bestContainer = document.getElementById('best-factor-selection');
    Object.entries(factors).forEach(([key, factor]) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'factor-option';
        
        let examplesHtml = '';
        if (factor.examples) {
            examplesHtml = `
                <div class="mt-2">
                    <small class="text-primary"><strong>舉例：</strong></small>
                    <ul class="list-unstyled mt-1">
                        ${factor.examples.map(example => 
                            `<li><small class="text-muted">• ${example}</small></li>`
                        ).join('')}
                    </ul>
                </div>
            `;
        }
        
        optionDiv.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <strong class="text-primary">${key}.</strong> ${factor.name}
                </div>
                <div class="col-md-9">
                    <small class="text-muted">${factor.description}</small>
                    ${examplesHtml}
                </div>
            </div>
        `;
        optionDiv.onclick = () => selectBestFactor(key, optionDiv);
        bestContainer.appendChild(optionDiv);
    });

    // 生成最劣因素選項
    const worstContainer = document.getElementById('worst-factor-selection');
    Object.entries(factors).forEach(([key, factor]) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'factor-option';
        
        let examplesHtml = '';
        if (factor.examples) {
            examplesHtml = `
                <div class="mt-2">
                    <small class="text-primary"><strong>舉例：</strong></small>
                    <ul class="list-unstyled mt-1">
                        ${factor.examples.map(example => 
                            `<li><small class="text-muted">• ${example}</small></li>`
                        ).join('')}
                    </ul>
                </div>
            `;
        }
        
        optionDiv.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <strong class="text-danger">${key}.</strong> ${factor.name}
                </div>
                <div class="col-md-9">
                    <small class="text-muted">${factor.description}</small>
                    ${examplesHtml}
                </div>
            </div>
        `;
        optionDiv.onclick = () => selectWorstFactor(key, optionDiv);
        worstContainer.appendChild(optionDiv);
    });
}

// 選擇最佳因素
function selectBestFactor(factorKey, element) {
    bestFactor = factorKey;
    
    // 清除其他選項的選中狀態
    document.querySelectorAll('#best-factor-selection .factor-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 選中當前選項
    element.classList.add('selected');
    
    // 生成最佳因素比較表格
    generateBestFactorComparison();
}

// 選擇最劣因素
function selectWorstFactor(factorKey, element) {
    // 移除之前的選擇
    document.querySelectorAll('#worst-factor-selection .factor-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // 設置新的選擇
    element.classList.add('selected');
    worstFactor = factorKey;
    
    // 生成最劣因素比較表格
    generateWorstFactorComparison();
    
    // 驗證步驟3
    validateStep3();
}

// 選擇評分
function selectRating(button, name, value) {
    // 找到同一行的所有按鈕
    const row = button.closest('tr');
    const buttons = row.querySelectorAll('.rating-btn');
    
    // 移除同行其他按鈕的選中狀態
    buttons.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-secondary');
        btn.textContent = '選擇';
    });
    
    // 設置當前按鈕為選中狀態
    button.classList.remove('btn-outline-secondary');
    button.classList.add('btn-primary');
    button.textContent = '已選';
    
    // 設置隱藏的 input 值
    let hiddenInput = document.querySelector(`input[name="${name}"]`);
    if (!hiddenInput) {
        hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = name;
        row.appendChild(hiddenInput);
    }
    hiddenInput.value = value;
    
    // 驗證步驟3
    validateStep3();
}

// 生成最佳因素比較表格
function generateBestFactorComparison() {
    const container = document.getElementById('best-factor-comparison');
    container.innerHTML = '';
    
    // 添加最佳因素說明
    const bestFactorInfo = document.createElement('div');
    bestFactorInfo.className = 'alert alert-info mb-3';
    
    let bestExamplesHtml = '';
    if (factors[bestFactor].examples) {
        bestExamplesHtml = `
            <div class="mt-2">
                <small class="text-primary"><strong>舉例：</strong></small>
                <ul class="list-unstyled mt-1">
                    ${factors[bestFactor].examples.map(example => 
                        `<li><small class="text-muted">• ${example}</small></li>`
                    ).join('')}
                </ul>
            </div>
        `;
    }
    
    bestFactorInfo.innerHTML = `
        <h5><strong>最佳因素：${bestFactor}. ${factors[bestFactor].name}</strong></h5>
        <p class="mb-0"><strong>說明：</strong>${factors[bestFactor].description}</p>
        ${bestExamplesHtml}
    `;
    container.appendChild(bestFactorInfo);
    
    const table = document.createElement('table');
    table.className = 'table table-bordered comparison-matrix';
    
    // 表頭 - 最佳因素在頂部
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th style="width: 200px;">其他因素</th>';
    
    // 添加評分選項作為表頭
    const ratingOptions = [
        {value: 1, text: '相等重要 (1)'},
        {value: 2, text: '略為重要 (2)'},
        {value: 3, text: '稍微重要 (3)'},
        {value: 4, text: '中度重要 (4)'},
        {value: 5, text: '明顯重要 (5)'},
        {value: 6, text: '強烈重要 (6)'},
        {value: 7, text: '非常重要 (7)'},
        {value: 8, text: '極度重要 (8)'},
        {value: 9, text: '絕對重要 (9)'}
    ];
    
    ratingOptions.forEach(option => {
        headerRow.innerHTML += `<th class="text-center" style="width: 120px;">${option.text}</th>`;
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // 表身 - 其他因素在左邊
    const tbody = document.createElement('tbody');
    Object.entries(factors).forEach(([key, factor]) => {
        if (key !== bestFactor) {
            const row = document.createElement('tr');
            
            // 左邊的因素說明
            const factorCell = document.createElement('td');
            
            let examplesHtml = '';
            if (factor.examples) {
                examplesHtml = `
                    <div class="mt-2">
                        <small class="text-primary"><strong>舉例：</strong></small>
                        <ul class="list-unstyled mt-1">
                            ${factor.examples.map(example => 
                                `<li><small class="text-muted">• ${example}</small></li>`
                            ).join('')}
                        </ul>
                    </div>
                `;
            }
            
            factorCell.innerHTML = `
                <div class="factor-info">
                    <strong>${key}. ${factor.name}</strong>
                    <br><small class="text-muted">${factor.description}</small>
                    ${examplesHtml}
                </div>
            `;
            row.appendChild(factorCell);
            
            // 評分按鈕
            ratingOptions.forEach(option => {
                const ratingCell = document.createElement('td');
                ratingCell.className = 'text-center';
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'btn btn-outline-secondary btn-sm rating-btn';
                button.setAttribute('data-value', option.value);
                button.onclick = function() { selectRating(this, `best_${bestFactor}_${key}`, option.value); };
                button.textContent = '選擇';
                ratingCell.appendChild(button);
                row.appendChild(ratingCell);
            });
            
            tbody.appendChild(row);
        }
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
}

// 生成最劣因素比較表格
function generateWorstFactorComparison() {
    const container = document.getElementById('worst-factor-comparison');
    container.innerHTML = '';
    
    // 添加最劣因素說明
    const worstFactorInfo = document.createElement('div');
    worstFactorInfo.className = 'alert alert-warning mb-3';
    
    let worstExamplesHtml = '';
    if (factors[worstFactor].examples) {
        worstExamplesHtml = `
            <div class="mt-2">
                <small class="text-primary"><strong>舉例：</strong></small>
                <ul class="list-unstyled mt-1">
                    ${factors[worstFactor].examples.map(example => 
                        `<li><small class="text-muted">• ${example}</small></li>`
                    ).join('')}
                </ul>
            </div>
        `;
    }
    
    worstFactorInfo.innerHTML = `
        <h5><strong>最劣因素：${worstFactor}. ${factors[worstFactor].name}</strong></h5>
        <p class="mb-0"><strong>說明：</strong>${factors[worstFactor].description}</p>
        ${worstExamplesHtml}
    `;
    container.appendChild(worstFactorInfo);
    
    const table = document.createElement('table');
    table.className = 'table table-bordered comparison-matrix';
    
    // 表頭 - 最劣因素在頂部
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th style="width: 200px;">其他因素</th>';
    
    // 添加評分選項作為表頭
    const ratingOptions = [
        {value: 1, text: '相等重要 (1)'},
        {value: 2, text: '略為重要 (2)'},
        {value: 3, text: '稍微重要 (3)'},
        {value: 4, text: '中度重要 (4)'},
        {value: 5, text: '明顯重要 (5)'},
        {value: 6, text: '強烈重要 (6)'},
        {value: 7, text: '非常重要 (7)'},
        {value: 8, text: '極度重要 (8)'},
        {value: 9, text: '絕對重要 (9)'}
    ];
    
    ratingOptions.forEach(option => {
        headerRow.innerHTML += `<th class="text-center" style="width: 120px;">${option.text}</th>`;
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // 表身 - 其他因素在左邊
    const tbody = document.createElement('tbody');
    Object.entries(factors).forEach(([key, factor]) => {
        if (key !== worstFactor) {
            const row = document.createElement('tr');
            
            // 左邊的因素說明
            const factorCell = document.createElement('td');
            
            let examplesHtml = '';
            if (factor.examples) {
                examplesHtml = `
                    <div class="mt-2">
                        <small class="text-primary"><strong>舉例：</strong></small>
                        <ul class="list-unstyled mt-1">
                            ${factor.examples.map(example => 
                                `<li><small class="text-muted">• ${example}</small></li>`
                            ).join('')}
                        </ul>
                    </div>
                `;
            }
            
            factorCell.innerHTML = `
                <div class="factor-info">
                    <strong>${key}. ${factor.name}</strong>
                    <br><small class="text-muted">${factor.description}</small>
                    ${examplesHtml}
                </div>
            `;
            row.appendChild(factorCell);
            
            // 評分按鈕
            ratingOptions.forEach(option => {
                const ratingCell = document.createElement('td');
                ratingCell.className = 'text-center';
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'btn btn-outline-secondary btn-sm rating-btn';
                button.setAttribute('data-value', option.value);
                button.onclick = function() { selectRating(this, `worst_${key}_${worstFactor}`, option.value); };
                button.textContent = '選擇';
                ratingCell.appendChild(button);
                row.appendChild(ratingCell);
            });
            
            tbody.appendChild(row);
        }
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
}

// 驗證步驟3
function validateStep3() {
    // 取得所有 best/worst 比較行的 input name
    const bestRows = document.querySelectorAll('#best-factor-comparison tbody tr');
    const worstRows = document.querySelectorAll('#worst-factor-comparison tbody tr');
    let allFilled = bestFactor && worstFactor;

    bestRows.forEach(row => {
        const input = row.querySelector('input[type="hidden"][name^="best_"]');
        if (!input || !input.value) {
            allFilled = false;
        }
    });

    worstRows.forEach(row => {
        const input = row.querySelector('input[type="hidden"][name^="worst_"]');
        if (!input || !input.value) {
            allFilled = false;
        }
    });

    document.getElementById('step3-next').disabled = !allFilled;
}

// 生成DEMATEL構面比較問題列表
function generateDEMATELDimensionComparison() {
    const container = document.getElementById('dematel-dimension-comparison');
    
    // 清空容器
    container.innerHTML = '';
    
    // 生成問題列表
    dimensionQuestions = [];
    const dimensionKeys = Object.keys(dimensions);
    
    for (let i = 0; i < dimensionKeys.length - 1; i++) {
        const xKey = dimensionKeys[i];
        const xName = dimensions[xKey].name;
        const xDesc = dimensions[xKey].description;
        
        for (let j = i + 1; j < dimensionKeys.length; j++) {
            const yKey = dimensionKeys[j];
            const yName = dimensions[yKey].name;
            const yDesc = dimensions[yKey].description;
            
            dimensionQuestions.push({
                xKey: xKey,
                xName: xName,
                xDesc: xDesc,
                yKey: yKey,
                yName: yName,
                yDesc: yDesc,
                questionIndex: dimensionQuestions.length + 1
            });
        }
    }
    
    // 顯示第一個問題
    showCurrentDimensionQuestion();
}

// 顯示當前構面問題
function showCurrentDimensionQuestion() {
    const container = document.getElementById('dematel-dimension-comparison');
    const prevBtn = document.getElementById('prev-dimension-btn');
    const nextBtn = document.getElementById('next-dimension-btn');
    const stepNextBtn = document.getElementById('step4-next');
    
    if (currentDimensionQuestion >= dimensionQuestions.length) {
        // 所有問題已完成，顯示並啟用下一步按鈕
        console.log('所有問題已完成，啟用下一步按鈕');
        if (stepNextBtn) {
            stepNextBtn.style.display = 'inline-block';
            stepNextBtn.disabled = false;
            stepNextBtn.classList.add('btn-pulse'); // 添加視覺反饋
            console.log('下一步按鈕已啟用');
        } else {
            console.error('找不到step4-next按鈕');
        }
        return;
    }
    
    const question = dimensionQuestions[currentDimensionQuestion];
    
    // 隱藏導航按鈕（自動跳轉模式）
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (stepNextBtn) stepNextBtn.style.display = 'none';
    
    container.innerHTML = `
        <div class="question-progress mb-3">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${((currentDimensionQuestion + 1) / dimensionQuestions.length) * 100}%"></div>
            </div>
            <small class="text-muted">問題 ${currentDimensionQuestion + 1} / ${dimensionQuestions.length}</small>
        </div>
        
        <div class="question-content">
            <h4 class="mb-4">構面關係比較 ${question.questionIndex}</h4>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">構面 X：${question.xKey}、${question.xName}</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted">${question.xDesc}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">構面 Y：${question.yKey}、${question.yName}</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted">${question.yDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="comparison-section">
                <h5 class="mb-3">請選擇這兩個構面之間的關係：</h5>
                
                <div class="dematel-relation mb-4">
                    <div class="relation-option">
                        <input type="radio" name="dim_relation_${question.xKey}_${question.yKey}" value="none" onchange="handleRelationChange(this)" id="dim_relation_${question.xKey}_${question.yKey}_none">
                        <label for="dim_relation_${question.xKey}_${question.yKey}_none">╳</label>
                        <small class="d-block text-muted">無關係</small>
                    </div>
                    <div class="relation-option">
                        <input type="radio" name="dim_relation_${question.xKey}_${question.yKey}" value="forward" onchange="handleRelationChange(this)" id="dim_relation_${question.xKey}_${question.yKey}_forward">
                        <label for="dim_relation_${question.xKey}_${question.yKey}_forward">→</label>
                        <small class="d-block text-muted">X影響Y</small>
                    </div>
                    <div class="relation-option">
                        <input type="radio" name="dim_relation_${question.xKey}_${question.yKey}" value="backward" onchange="handleRelationChange(this)" id="dim_relation_${question.xKey}_${question.yKey}_backward">
                        <label for="dim_relation_${question.xKey}_${question.yKey}_backward">←</label>
                        <small class="d-block text-muted">Y影響X</small>
                    </div>
                    <div class="relation-option">
                        <input type="radio" name="dim_relation_${question.xKey}_${question.yKey}" value="both" onchange="handleRelationChange(this)" id="dim_relation_${question.xKey}_${question.yKey}_both">
                        <label for="dim_relation_${question.xKey}_${question.yKey}_both">↔</label>
                        <small class="d-block text-muted">相互影響</small>
                    </div>
                </div>
                
                <div class="impact-level" id="dim_forward_${question.xKey}_${question.yKey}_container" style="display: none;">
                    <h6 class="mb-3">請選擇 ${question.xName} 對 ${question.yName} 的影響程度：</h6>
                    <div class="impact-options">
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_forward_${question.xKey}_${question.yKey}', 1)">1</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_forward_${question.xKey}_${question.yKey}', 2)">2</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_forward_${question.xKey}_${question.yKey}', 3)">3</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_forward_${question.xKey}_${question.yKey}', 4)">4</button>
                    </div>
                    <input type="hidden" name="dim_forward_${question.xKey}_${question.yKey}" value="">
                    <small class="text-muted d-block mt-2">1=無影響，2=輕微影響，3=中等影響，4=強烈影響</small>
                </div>
                
                <div class="impact-level" id="dim_backward_${question.xKey}_${question.yKey}_container" style="display: none;">
                    <h6 class="mb-3">請選擇 ${question.yName} 對 ${question.xName} 的影響程度：</h6>
                    <div class="impact-options">
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_backward_${question.xKey}_${question.yKey}', 1)">1</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_backward_${question.xKey}_${question.yKey}', 2)">2</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_backward_${question.xKey}_${question.yKey}', 3)">3</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'dim_backward_${question.xKey}_${question.yKey}', 4)">4</button>
                    </div>
                    <input type="hidden" name="dim_backward_${question.xKey}_${question.yKey}" value="">
                    <small class="text-muted d-block mt-2">1=無影響，2=輕微影響，3=中等影響，4=強烈影響</small>
                </div>
            </div>
        </div>
    `;
    
    // 隱藏導航按鈕（自動跳轉模式）
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (stepNextBtn) stepNextBtn.style.display = 'none';
    
    // 恢復已保存的答案
    const key = `${question.xKey}_${question.yKey}`;
    if (dimensionAnswers[key]) {
        // 恢復關係選擇
        const relationValue = dimensionAnswers[key][`dim_relation_${question.xKey}_${question.yKey}`];
        if (relationValue) {
            const relationRadio = document.querySelector(`input[name="dim_relation_${question.xKey}_${question.yKey}"][value="${relationValue}"]`);
            if (relationRadio) {
                relationRadio.checked = true;
                // 觸發關係變化處理
                handleRelationChange(relationRadio);
            }
        }
        
        // 恢復影響程度選擇
        setTimeout(() => {
            const forwardValue = dimensionAnswers[key][`dim_forward_${question.xKey}_${question.yKey}`];
            if (forwardValue) {
                const forwardInput = document.querySelector(`input[name="dim_forward_${question.xKey}_${question.yKey}"]`);
                if (forwardInput) {
                    forwardInput.value = forwardValue;
                    // 更新按鈕狀態
                    const forwardContainer = document.getElementById(`dim_forward_${question.xKey}_${question.yKey}_container`);
                    if (forwardContainer) {
                        const forwardBtn = forwardContainer.querySelector(`.impact-btn[onclick*="${forwardValue}"]`);
                        if (forwardBtn) {
                            forwardBtn.classList.remove('btn-outline-secondary');
                            forwardBtn.classList.add('btn-primary');
                        }
                    }
                }
            }
            
            const backwardValue = dimensionAnswers[key][`dim_backward_${question.xKey}_${question.yKey}`];
            if (backwardValue) {
                const backwardInput = document.querySelector(`input[name="dim_backward_${question.xKey}_${question.yKey}"]`);
                if (backwardInput) {
                    backwardInput.value = backwardValue;
                    // 更新按鈕狀態
                    const backwardContainer = document.getElementById(`dim_backward_${question.xKey}_${question.yKey}_container`);
                    if (backwardContainer) {
                        const backwardBtn = backwardContainer.querySelector(`.impact-btn[onclick*="${backwardValue}"]`);
                        if (backwardBtn) {
                            backwardBtn.classList.remove('btn-outline-secondary');
                            backwardBtn.classList.add('btn-primary');
                        }
                    }
                }
            }
        }, 100);
    }
}

// 下一題構面問題
function nextDimensionQuestion() {
    if (currentDimensionQuestion < dimensionQuestions.length - 1) {
        currentDimensionQuestion++;
        showCurrentDimensionQuestion();
    }
}

// 上一題構面問題
function prevDimensionQuestion() {
    if (currentDimensionQuestion > 0) {
        currentDimensionQuestion--;
        showCurrentDimensionQuestion();
    }
}

// 生成DEMATEL因素比較問題列表
function generateDEMATELFactorComparison() {
    const container = document.getElementById('dematel-factor-comparison');
    
    // 清空容器
    container.innerHTML = '';
    
    // 生成問題列表
    factorQuestions = [];
    const factorKeys = Object.keys(factors);
    
    for (let i = 0; i < factorKeys.length - 1; i++) {
        const xKey = factorKeys[i];
        const xName = factors[xKey].name;
        const xDesc = factors[xKey].description;
        const xDimension = dimensions[factors[xKey].dimension].name;
        
        for (let j = i + 1; j < factorKeys.length; j++) {
            const yKey = factorKeys[j];
            const yName = factors[yKey].name;
            const yDesc = factors[yKey].description;
            const yDimension = dimensions[factors[yKey].dimension].name;
            
            factorQuestions.push({
                xKey: xKey,
                xName: xName,
                xDesc: xDesc,
                xDimension: xDimension,
                yKey: yKey,
                yName: yName,
                yDesc: yDesc,
                yDimension: yDimension,
                questionIndex: factorQuestions.length + 1
            });
        }
    }
    
    // 顯示第一個問題
    showCurrentFactorQuestion();
}

// 顯示當前因素問題
function showCurrentFactorQuestion() {
    const container = document.getElementById('dematel-factor-comparison');
    const prevBtn = document.getElementById('prev-factor-btn');
    const nextBtn = document.getElementById('next-factor-btn');
    const submitBtn = document.getElementById('step5-submit');
    
    if (currentFactorQuestion >= factorQuestions.length) {
        // 所有問題已完成
        container.innerHTML = `
            <div class="alert alert-success text-center">
                <h4>因素比較完成！</h4>
                <p>您已完成所有因素關係的比較，請點擊提交問卷。</p>
            </div>
        `;
        // 隱藏導航按鈕，顯示提交按鈕
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (submitBtn) submitBtn.style.display = 'inline-block';
        return;
    }
    
    const question = factorQuestions[currentFactorQuestion];
    
    // 隱藏導航按鈕（自動跳轉模式）
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
    
    container.innerHTML = `
        <div class="question-progress mb-3">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${((currentFactorQuestion + 1) / factorQuestions.length) * 100}%"></div>
            </div>
            <small class="text-muted">問題 ${currentFactorQuestion + 1} / ${factorQuestions.length}</small>
        </div>
        
        <div class="question-content">
            <h4 class="mb-4">因素關係比較 ${question.questionIndex}</h4>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">因素 X：${question.xKey}. ${question.xName}</h5>
                            <small class="text-muted">構面：${question.xDimension}</small>
                        </div>
                        <div class="card-body">
                            <p class="text-muted mb-3"><strong>說明：</strong>${question.xDesc}</p>
                            ${factors[question.xKey].examples ? `
                                <div class="factor-examples">
                                    <h6 class="text-primary mb-2">舉例：</h6>
                                    <ul class="list-unstyled">
                                        ${factors[question.xKey].examples.map((example, index) => 
                                            `<li class="mb-1"><small class="text-muted">• ${example}</small></li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">因素 Y：${question.yKey}. ${question.yName}</h5>
                            <small class="text-muted">構面：${question.yDimension}</small>
                        </div>
                        <div class="card-body">
                            <p class="text-muted mb-3"><strong>說明：</strong>${question.yDesc}</p>
                            ${factors[question.yKey].examples ? `
                                <div class="factor-examples">
                                    <h6 class="text-primary mb-2">舉例：</h6>
                                    <ul class="list-unstyled">
                                        ${factors[question.yKey].examples.map((example, index) => 
                                            `<li class="mb-1"><small class="text-muted">• ${example}</small></li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="comparison-section">
                <h5 class="mb-3">請選擇這兩個因素之間的關係：</h5>
                
                <div class="dematel-relation mb-4">
                    <div class="relation-option">
                        <input type="radio" name="factor_relation_${question.xKey}_${question.yKey}" value="none" onchange="handleRelationChange(this)" id="factor_relation_${question.xKey}_${question.yKey}_none">
                        <label for="factor_relation_${question.xKey}_${question.yKey}_none">╳</label>
                        <small class="d-block text-muted">無關係</small>
                    </div>
                    <div class="relation-option">
                        <input type="radio" name="factor_relation_${question.xKey}_${question.yKey}" value="forward" onchange="handleRelationChange(this)" id="factor_relation_${question.xKey}_${question.yKey}_forward">
                        <label for="factor_relation_${question.xKey}_${question.yKey}_forward">→</label>
                        <small class="d-block text-muted">X影響Y</small>
                    </div>
                    <div class="relation-option">
                        <input type="radio" name="factor_relation_${question.xKey}_${question.yKey}" value="backward" onchange="handleRelationChange(this)" id="factor_relation_${question.xKey}_${question.yKey}_backward">
                        <label for="factor_relation_${question.xKey}_${question.yKey}_backward">←</label>
                        <small class="d-block text-muted">Y影響X</small>
                    </div>
                    <div class="relation-option">
                        <input type="radio" name="factor_relation_${question.xKey}_${question.yKey}" value="both" onchange="handleRelationChange(this)" id="factor_relation_${question.xKey}_${question.yKey}_both">
                        <label for="factor_relation_${question.xKey}_${question.yKey}_both">↔</label>
                        <small class="d-block text-muted">相互影響</small>
                    </div>
                </div>
                
                <div class="impact-level" id="factor_forward_${question.xKey}_${question.yKey}_container" style="display: none;">
                    <h6 class="mb-3">請選擇 ${question.xName} 對 ${question.yName} 的影響程度：</h6>
                    <div class="impact-options">
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_forward_${question.xKey}_${question.yKey}', 1)">1</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_forward_${question.xKey}_${question.yKey}', 2)">2</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_forward_${question.xKey}_${question.yKey}', 3)">3</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_forward_${question.xKey}_${question.yKey}', 4)">4</button>
                    </div>
                    <input type="hidden" name="factor_forward_${question.xKey}_${question.yKey}" value="">
                    <small class="text-muted d-block mt-2">1=無影響，2=輕微影響，3=中等影響，4=強烈影響</small>
                </div>
                
                <div class="impact-level" id="factor_backward_${question.xKey}_${question.yKey}_container" style="display: none;">
                    <h6 class="mb-3">請選擇 ${question.yName} 對 ${question.xName} 的影響程度：</h6>
                    <div class="impact-options">
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_backward_${question.xKey}_${question.yKey}', 1)">1</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_backward_${question.xKey}_${question.yKey}', 2)">2</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_backward_${question.xKey}_${question.yKey}', 3)">3</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm impact-btn" onclick="selectImpactLevel(this, 'factor_backward_${question.xKey}_${question.yKey}', 4)">4</button>
                    </div>
                    <input type="hidden" name="factor_backward_${question.xKey}_${question.yKey}" value="">
                    <small class="text-muted d-block mt-2">1=無影響，2=輕微影響，3=中等影響，4=強烈影響</small>
                </div>
            </div>
        </div>
    `;
    
    // 隱藏導航按鈕（自動跳轉模式）
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
    
    // 恢復已保存的答案
    const key = `${question.xKey}_${question.yKey}`;
    if (factorAnswers[key]) {
        // 恢復關係選擇
        const relationValue = factorAnswers[key][`factor_relation_${question.xKey}_${question.yKey}`];
        if (relationValue) {
            const relationRadio = document.querySelector(`input[name="factor_relation_${question.xKey}_${question.yKey}"][value="${relationValue}"]`);
            if (relationRadio) {
                relationRadio.checked = true;
                // 觸發關係變化處理
                handleRelationChange(relationRadio);
            }
        }
        
        // 恢復影響程度選擇
        setTimeout(() => {
            const forwardValue = factorAnswers[key][`factor_forward_${question.xKey}_${question.yKey}`];
            if (forwardValue) {
                const forwardInput = document.querySelector(`input[name="factor_forward_${question.xKey}_${question.yKey}"]`);
                if (forwardInput) {
                    forwardInput.value = forwardValue;
                    // 更新按鈕狀態
                    const forwardContainer = document.getElementById(`factor_forward_${question.xKey}_${question.yKey}_container`);
                    if (forwardContainer) {
                        const forwardBtn = forwardContainer.querySelector(`.impact-btn[onclick*="${forwardValue}"]`);
                        if (forwardBtn) {
                            forwardBtn.classList.remove('btn-outline-secondary');
                            forwardBtn.classList.add('btn-primary');
                        }
                    }
                }
            }
            
            const backwardValue = factorAnswers[key][`factor_backward_${question.xKey}_${question.yKey}`];
            if (backwardValue) {
                const backwardInput = document.querySelector(`input[name="factor_backward_${question.xKey}_${question.yKey}"]`);
                if (backwardInput) {
                    backwardInput.value = backwardValue;
                    // 更新按鈕狀態
                    const backwardContainer = document.getElementById(`factor_backward_${question.xKey}_${question.yKey}_container`);
                    if (backwardContainer) {
                        const backwardBtn = backwardContainer.querySelector(`.impact-btn[onclick*="${backwardValue}"]`);
                        if (backwardBtn) {
                            backwardBtn.classList.remove('btn-outline-secondary');
                            backwardBtn.classList.add('btn-primary');
                        }
                    }
                }
            }
        }, 100);
    }
}

// 下一題因素問題
function nextFactorQuestion() {
    if (currentFactorQuestion < factorQuestions.length - 1) {
        currentFactorQuestion++;
        showCurrentFactorQuestion();
    }
}

// 上一題因素問題
function prevFactorQuestion() {
    if (currentFactorQuestion > 0) {
        currentFactorQuestion--;
        showCurrentFactorQuestion();
    }
}

// 選擇影響程度分數 - 獨立選擇，不進行同步
function selectImpactLevel(button, name, value) {
    // 重置同組內所有按鈕（只重置當前方向的按鈕）
    const container = button.closest('.impact-level');
    const buttons = container.querySelectorAll('.impact-btn');
    buttons.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-secondary');
    });
    
    // 設置選中的按鈕
    button.classList.remove('btn-outline-secondary');
    button.classList.add('btn-primary');
    
    // 更新隱藏的 input 值
    const hiddenInput = container.querySelector('input[type="hidden"]');
    if (hiddenInput) {
        hiddenInput.value = value;
    }
    
    console.log(`選擇影響程度: ${name} = ${value} (獨立選擇，不進行同步)`);
    
    // 保存答案
    if (name.startsWith('dim_')) {
        const question = dimensionQuestions[currentDimensionQuestion];
        const key = `${question.xKey}_${question.yKey}`;
        if (!dimensionAnswers[key]) {
            dimensionAnswers[key] = {};
        }
        dimensionAnswers[key][name] = value;
        console.log(`保存構面答案: ${key}.${name} = ${value}`);
        console.log('當前構面答案狀態:', dimensionAnswers);
        validateStep4();
    } else if (name.startsWith('factor_')) {
        const question = factorQuestions[currentFactorQuestion];
        const key = `${question.xKey}_${question.yKey}`;
        if (!factorAnswers[key]) {
            factorAnswers[key] = {};
        }
        factorAnswers[key][name] = value;
        console.log(`保存因素答案: ${key}.${name} = ${value}`);
        console.log('當前因素答案狀態:', factorAnswers);
        validateStep5();
    }
}

// 修正驗證步驟4 - 檢查當前問題是否完成
function validateStep4() {
    console.log('=== 開始驗證步驟4 ===');
    console.log('當前問題索引:', currentDimensionQuestion);
    console.log('總問題數量:', dimensionQuestions.length);
    
    if (currentDimensionQuestion >= dimensionQuestions.length) {
        // 所有問題已完成，顯示並啟用下一步按鈕
        console.log('所有問題已完成，啟用下一步按鈕');
        const stepNextBtn = document.getElementById('step4-next');
        if (stepNextBtn) {
            stepNextBtn.style.display = 'inline-block';
            stepNextBtn.disabled = false;
            stepNextBtn.classList.add('btn-pulse'); // 添加視覺反饋
            console.log('下一步按鈕已啟用');
        } else {
            console.error('找不到step4-next按鈕');
        }
        return;
    }
    
    const question = dimensionQuestions[currentDimensionQuestion];
    const xKey = question.xKey;
    const yKey = question.yKey;
    
    // 檢查當前問題是否有選擇關係
    const relationSelected = document.querySelector(`#step4 input[name="dim_relation_${xKey}_${yKey}"]:checked`);
    console.log(`當前問題 ${xKey}-${yKey} 關係選擇狀態:`, relationSelected ? relationSelected.value : '未選擇');
    
    if (!relationSelected) {
        console.log('步驟4驗證失敗：當前問題關係未選擇');
        return;
    }
    
    const relationValue = relationSelected.value;
    console.log('選擇的關係:', relationValue);
    
    // 根據關係類型檢查影響程度
    let allImpactLevelsValid = true;
    let invalidPairs = [];
    
    if (relationValue === 'forward') {
        const forwardInput = document.querySelector(`#step4 input[name="dim_forward_${xKey}_${yKey}"]`);
        if (!forwardInput || !forwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (正向影響未選擇)`);
        }
    } else if (relationValue === 'backward') {
        const backwardInput = document.querySelector(`#step4 input[name="dim_backward_${xKey}_${yKey}"]`);
        if (!backwardInput || !backwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (反向影響未選擇)`);
        }
    } else if (relationValue === 'both') {
        const forwardInput = document.querySelector(`#step4 input[name="dim_forward_${xKey}_${yKey}"]`);
        const backwardInput = document.querySelector(`#step4 input[name="dim_backward_${xKey}_${yKey}"]`);
        if (!forwardInput || !forwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (正向影響未選擇)`);
        }
        if (!backwardInput || !backwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (反向影響未選擇)`);
        }
    }
    
    console.log('影響程度驗證結果:', allImpactLevelsValid);
    console.log('無效的配對:', invalidPairs);
    
    // 檢查當前問題是否完成
    const isCurrentQuestionComplete = relationSelected && (relationValue === 'none' || allImpactLevelsValid);
    console.log('當前問題是否完成:', isCurrentQuestionComplete);
    
    // 如果當前問題完成，自動跳轉到下一題
    if (isCurrentQuestionComplete) {
        console.log('問題完成，準備自動跳轉');
        setTimeout(() => {
            if (currentDimensionQuestion < dimensionQuestions.length - 1) {
                console.log('跳轉到下一題');
                currentDimensionQuestion++;
                showCurrentDimensionQuestion();
            } else {
                // 所有問題已完成，顯示並啟用下一步按鈕
                console.log('所有問題已完成，啟用下一步按鈕');
                const stepNextBtn = document.getElementById('step4-next');
                if (stepNextBtn) {
                    stepNextBtn.style.display = 'inline-block';
                    stepNextBtn.disabled = false;
                    stepNextBtn.classList.add('btn-pulse'); // 添加視覺反饋
                    console.log('下一步按鈕已啟用');
                } else {
                    console.error('找不到step4-next按鈕');
                }
            }
        }, 500); // 延遲500毫秒讓用戶看到選擇結果
    }
}

// 修正驗證步驟5 - 檢查當前問題是否完成
function validateStep5() {
    console.log('=== 開始驗證步驟5 ===');
    
    if (currentFactorQuestion >= factorQuestions.length) {
        // 所有問題已完成，顯示並啟用提交按鈕
        const submitBtn = document.getElementById('step5-submit');
        if (submitBtn) {
            submitBtn.style.display = 'inline-block';
            submitBtn.disabled = false;
        }
        return;
    }
    
    const question = factorQuestions[currentFactorQuestion];
    const xKey = question.xKey;
    const yKey = question.yKey;
    
    // 檢查當前問題是否有選擇關係
    const relationSelected = document.querySelector(`#step5 input[name="factor_relation_${xKey}_${yKey}"]:checked`);
    console.log(`當前問題 ${xKey}-${yKey} 關係選擇狀態:`, relationSelected ? relationSelected.value : '未選擇');
    
    if (!relationSelected) {
        console.log('步驟5驗證失敗：當前問題關係未選擇');
        return;
    }
    
    const relationValue = relationSelected.value;
    console.log('選擇的關係:', relationValue);
    
    // 根據關係類型檢查影響程度
    let allImpactLevelsValid = true;
    let invalidPairs = [];
    
    if (relationValue === 'forward') {
        const forwardInput = document.querySelector(`#step5 input[name="factor_forward_${xKey}_${yKey}"]`);
        if (!forwardInput || !forwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (正向影響未選擇)`);
        }
    } else if (relationValue === 'backward') {
        const backwardInput = document.querySelector(`#step5 input[name="factor_backward_${xKey}_${yKey}"]`);
        if (!backwardInput || !backwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (反向影響未選擇)`);
        }
    } else if (relationValue === 'both') {
        const forwardInput = document.querySelector(`#step5 input[name="factor_forward_${xKey}_${yKey}"]`);
        const backwardInput = document.querySelector(`#step5 input[name="factor_backward_${xKey}_${yKey}"]`);
        if (!forwardInput || !forwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (正向影響未選擇)`);
        }
        if (!backwardInput || !backwardInput.value) {
            allImpactLevelsValid = false;
            invalidPairs.push(`${xKey}-${yKey} (反向影響未選擇)`);
        }
    }
    
    console.log('影響程度驗證結果:', allImpactLevelsValid);
    console.log('無效的配對:', invalidPairs);
    
    // 檢查當前問題是否完成
    const isCurrentQuestionComplete = relationSelected && (relationValue === 'none' || allImpactLevelsValid);
    
    // 如果當前問題完成，自動跳轉到下一題
    if (isCurrentQuestionComplete) {
        setTimeout(() => {
            if (currentFactorQuestion < factorQuestions.length - 1) {
                currentFactorQuestion++;
                showCurrentFactorQuestion();
            } else {
                // 所有問題已完成，顯示並啟用提交按鈕
                const submitBtn = document.getElementById('step5-submit');
                if (submitBtn) {
                    submitBtn.style.display = 'inline-block';
                    submitBtn.disabled = false;
                }
            }
        }, 500); // 延遲500毫秒讓用戶看到選擇結果
    }
}

// 刪除雙向同步功能 - 讓用戶可以獨立選擇分數
function setupBidirectionalSync(prefix, x, y) {
    console.log(`雙向同步功能已移除: ${prefix}_${x}_${y}`);
    // 此函數保留但不再執行任何同步操作
    // 用戶現在可以為每個方向獨立選擇不同的分數
}

// 改進處理關係變化的函數 - 使用更精確的選擇器
function handleRelationChange(input) {
    console.log(`關係變化: ${input.name} = ${input.value}`);
    
    const [prefix, relation, x, y] = input.name.split('_');
    const relationValue = input.value;
    const stepSelector = prefix === 'dim' ? '#step4' : '#step5';
    
    // 保存關係選擇
    if (prefix === 'dim') {
        const question = dimensionQuestions[currentDimensionQuestion];
        const key = `${question.xKey}_${question.yKey}`;
        if (!dimensionAnswers[key]) {
            dimensionAnswers[key] = {};
        }
        dimensionAnswers[key][`${prefix}_relation_${x}_${y}`] = relationValue;
        console.log(`保存構面關係: ${key}.${prefix}_relation_${x}_${y} = ${relationValue}`);
        console.log('當前構面答案狀態:', dimensionAnswers);
    } else if (prefix === 'factor') {
        const question = factorQuestions[currentFactorQuestion];
        const key = `${question.xKey}_${question.yKey}`;
        if (!factorAnswers[key]) {
            factorAnswers[key] = {};
        }
        factorAnswers[key][`${prefix}_relation_${x}_${y}`] = relationValue;
        console.log(`保存因素關係: ${key}.${prefix}_relation_${x}_${y} = ${relationValue}`);
        console.log('當前因素答案狀態:', factorAnswers);
    }
    
    // 獲取分數選項容器
    const forwardContainer = document.getElementById(`${prefix}_forward_${x}_${y}_container`);
    const backwardContainer = document.getElementById(`${prefix}_backward_${x}_${y}_container`);
    
    // 重置所有分數選擇
    if (forwardContainer) {
        const forwardButtons = forwardContainer.querySelectorAll('.impact-btn');
        forwardButtons.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-secondary');
        });
        const forwardInput = forwardContainer.querySelector('input[type="hidden"]');
        if (forwardInput) forwardInput.value = '';
    }
    
    if (backwardContainer) {
        const backwardButtons = backwardContainer.querySelectorAll('.impact-btn');
        backwardButtons.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-secondary');
        });
        const backwardInput = backwardContainer.querySelector('input[type="hidden"]');
        if (backwardInput) backwardInput.value = '';
    }
    
    // 根據關係類型控制分數選項的顯示
    switch (relationValue) {
        case 'none':
            console.log(`隱藏 ${x}-${y} 的所有影響程度選項`);
            if (forwardContainer) forwardContainer.style.display = 'none';
            if (backwardContainer) backwardContainer.style.display = 'none';
            break;
        case 'forward':
            console.log(`只顯示 ${x}-${y} 的正向影響選項`);
            if (forwardContainer) forwardContainer.style.display = 'block';
            if (backwardContainer) backwardContainer.style.display = 'none';
            break;
        case 'backward':
            console.log(`只顯示 ${x}-${y} 的反向影響選項`);
            if (forwardContainer) forwardContainer.style.display = 'none';
            if (backwardContainer) backwardContainer.style.display = 'block';
            break;
        case 'both':
            console.log(`顯示 ${x}-${y} 的雙向影響選項`);
            if (forwardContainer) forwardContainer.style.display = 'block';
            if (backwardContainer) backwardContainer.style.display = 'block';
            break;
    }
    
    // 雙向同步功能已移除，用戶可以獨立選擇每個方向的分數
    if (relationValue === 'both') {
        console.log('雙向關係選擇：用戶可以為每個方向獨立選擇不同的分數');
    }
    
    // 根據當前步驟調用相應的驗證函數
    if (prefix === 'dim') {
        validateStep4();
    } else if (prefix === 'factor') {
        validateStep5();
    }
}

// 添加調試按鈕到步驟4
function addDebugButton() {
    const step4Container = document.querySelector('#step4 .question-card');
    const debugDiv = document.createElement('div');
    debugDiv.className = 'mt-3 p-3 bg-warning bg-opacity-10 border border-warning rounded';
    debugDiv.innerHTML = `
        <h6>調試工具</h6>
        <button type="button" class="btn btn-warning btn-sm me-2" onclick="debugStep4()">
            檢查步驟4狀態
        </button>
        <button type="button" class="btn btn-info btn-sm me-2" onclick="showAllRelations()">
            顯示所有關係
        </button>
        <button type="button" class="btn btn-success btn-sm" onclick="forceEnableStep4()">
            強制啟用下一步
        </button>
    `;
    step4Container.appendChild(debugDiv);
}

// 改進調試函數
function debugStep4() {
    console.log('=== 步驟4 詳細調試 ===');
    
    const relationInputs = document.querySelectorAll('#step4 input[name^="dim_relation_"]');
    console.log('總關係數:', relationInputs.length);
    
    relationInputs.forEach(input => {
        console.log(`${input.name}: ${input.checked ? input.value : '未選擇'}`);
    });
    
    // 檢查每個配對的影響程度
    const dimensionKeys = Object.keys(dimensions);
    for (let i = 0; i < dimensionKeys.length - 1; i++) {
        const xKey = dimensionKeys[i];
        for (let j = i + 1; j < dimensionKeys.length; j++) {
            const yKey = dimensionKeys[j];
            
            const relationValue = document.querySelector(`#step4 input[name="dim_relation_${xKey}_${yKey}"]:checked`)?.value;
            const forwardValue = document.querySelector(`#step4 input[name="dim_forward_${xKey}_${yKey}"]:checked`)?.value;
            const backwardValue = document.querySelector(`#step4 input[name="dim_backward_${xKey}_${yKey}"]:checked`)?.value;
            
            console.log(`${xKey}-${yKey}: 關係=${relationValue}, 正向=${forwardValue}, 反向=${backwardValue}`);
        }
    }
    
    const nextButton = document.getElementById('step4-next');
    console.log('下一步按鈕狀態:', nextButton.disabled);
}

function showAllRelations() {
    console.log('=== 所有關係狀態 ===');
    const allInputs = document.querySelectorAll('#step4 input[type="radio"]');
    allInputs.forEach(input => {
        if (input.checked) {
            console.log(`已選中: ${input.name} = ${input.value}`);
        }
    });
}

function forceEnableStep4() {
    document.getElementById('step4-next').disabled = false;
    console.log('已強制啟用步驟4下一步按鈕');
}

// 修改 nextStep 函數，在進入下一步時隱藏頁面上方內容
function nextStep() {
    if (currentStep < 5) {
        // 檢查步驟三的驗證
        if (currentStep === 3) {
            const bestInputs = document.querySelectorAll('input[name^="best_"]');
            const worstInputs = document.querySelectorAll('input[name^="worst_"]');
            let allFilled = bestFactor && worstFactor;
            
            bestInputs.forEach(input => {
                if (!input.value || input.value === '') {
                    allFilled = false;
                }
            });
            
            worstInputs.forEach(input => {
                if (!input.value || input.value === '') {
                    allFilled = false;
                }
            });
            
            if (!allFilled) {
                alert('請完成所有因素比較評分後再進入下一步！');
                return;
            }
        }
        
        // 隱藏頁面上方的標題和說明部分
        hideHeaderContent();
        
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        updateStepIndicator();
        updateProgress();
    }
}

// 修改 prevStep 函數，在返回第一步時重新顯示頁面上方內容
function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // 如果回到第一步，重新顯示頁面上方內容
        if (currentStep === 1) {
            showHeaderContent();
        }
        
        updateStepIndicator();
        updateProgress();
    }
}

// 隱藏頁面上方內容的函數
function hideHeaderContent() {
    const headerElements = document.querySelectorAll('.header-content, .questionnaire-description');
    headerElements.forEach(element => {
        element.style.display = 'none';
    });
    
    // 調整容器間距
    const container = document.querySelector('.container');
    if (container) {
        container.style.marginTop = '20px';
    }
}

// 顯示頁面上方內容的函數
function showHeaderContent() {
    const headerElements = document.querySelectorAll('.header-content, .questionnaire-description');
    headerElements.forEach(element => {
        element.style.display = 'block';
    });
    
    // 恢復容器間距
    const container = document.querySelector('.container');
    if (container) {
        container.style.marginTop = '';
    }
}

// 更新步驟指示器
function updateStepIndicator() {
    document.querySelectorAll('.step-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 === currentStep) {
            dot.classList.add('active');
        } else if (index + 1 < currentStep) {
            dot.classList.add('completed');
        }
    });
}

// 更新進度條
function updateProgress() {
    const totalSteps = 5;
    const progress = (currentStep / totalSteps) * 100;
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
}

// 分離表單提交處理函數
function handleFormSubmit(e) {
    e.preventDefault();
    console.log('表單提交事件觸發');
    
    try {
        // 收集基本資料
        const basicData = {
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            age: document.querySelector('input[name="age"]:checked')?.value,
            education: document.querySelector('input[name="education"]:checked')?.value,
            electronics_industry: document.querySelector('input[name="electronics_industry"]:checked')?.value,
            experience: document.querySelector('input[name="experience"]:checked')?.value
        };
        
        console.log('基本資料:', basicData);
        
        // 收集BWM數據
        const bwmData = {
            bestFactor: bestFactor,
            worstFactor: worstFactor,
            bestComparisons: {},
            worstComparisons: {}
        };
        
        document.querySelectorAll('input[name^="best_"]').forEach(input => {
            if (input.value) {
                bwmData.bestComparisons[input.name] = input.value;
            }
        });
        
        document.querySelectorAll('input[name^="worst_"]').forEach(input => {
            if (input.value) {
                bwmData.worstComparisons[input.name] = input.value;
            }
        });
        
        console.log('BWM數據:', bwmData);
        
        // 收集DEMATEL構面數據 - 使用保存的答案
        const dematelDimensionData = {};
        console.log('保存的構面答案:', dimensionAnswers);
        
        Object.keys(dimensionAnswers).forEach(key => {
            const answers = dimensionAnswers[key];
            Object.keys(answers).forEach(answerKey => {
                dematelDimensionData[answerKey] = answers[answerKey];
            });
        });
        
        console.log('DEMATEL構面數據:', dematelDimensionData);
        
        // 收集DEMATEL因素數據 - 使用保存的答案
        const dematelFactorData = {};
        console.log('保存的因素答案:', factorAnswers);
        
        Object.keys(factorAnswers).forEach(key => {
            const answers = factorAnswers[key];
            Object.keys(answers).forEach(answerKey => {
                dematelFactorData[answerKey] = answers[answerKey];
            });
        });
        
        console.log('DEMATEL因素數據:', dematelFactorData);
        
        // 整合所有數據
        surveyData = {
            basic: basicData,
            bwm: bwmData,
            dematelDimension: dematelDimensionData,
            dematelFactor: dematelFactorData,
            timestamp: new Date().toISOString()
        };
        
        console.log('完整問卷數據:', surveyData);
        
        // 顯示結果
        displayResults(surveyData);
        
        // 滾動到頁面頂部
        window.scrollTo(0, 0);
        
    } catch (error) {
        console.error('表單提交處理錯誤:', error);
        alert('提交問卷時發生錯誤，請檢查控制台獲取詳細信息。');
    }
}

// 改進顯示結果函數
function displayResults(data) {
    console.log('開始顯示結果');
    
    const container = document.querySelector('.container');
    if (!container) {
        console.error('找不到容器元素');
        return;
    }
    
    try {
        container.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">問卷提交成功！</h4>
                <p>感謝您的參與，問卷數據已成功收集。</p>
                <hr>
                <p class="mb-0">您填寫的數據如下：</p>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <h4>基本資料</h4>
                    <ul class="list-group">
                        <li class="list-group-item">性別: ${data.basic.gender === 'male' ? '男' : data.basic.gender === 'female' ? '女' : '未填寫'}</li>
                        <li class="list-group-item">年齡: ${data.basic.age || '未填寫'}</li>
                        <li class="list-group-item">教育程度: ${data.basic.education || '未填寫'}</li>
                        <li class="list-group-item">是否為電子製造業: ${data.basic.electronics_industry === 'yes' ? '是' : data.basic.electronics_industry === 'no' ? '否' : '未填寫'}</li>
                        <li class="list-group-item">數位轉型相關年資: ${data.basic.experience || '未填寫'}</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h4>BWM 結果</h4>
                    <ul class="list-group">
                        <li class="list-group-item">最佳因素: ${data.bwm.bestFactor ? factors[data.bwm.bestFactor].name : '未選擇'}</li>
                        <li class="list-group-item">最劣因素: ${data.bwm.worstFactor ? factors[data.bwm.worstFactor].name : '未選擇'}</li>
                        <li class="list-group-item">比較數量: ${Object.keys(data.bwm.bestComparisons).length + Object.keys(data.bwm.worstComparisons).length}</li>
                    </ul>
                </div>
            </div>
            
            <div class="row mt-3">
                <div class="col-12">
                    <h4>DEMATEL 影響關係</h4>
                    <p>構面影響關係矩陣已收集完成，共 ${Object.keys(data.dematelDimension).length} 個構面關係評分。</p>
                    <p>因素影響關係矩陣已收集完成，共 ${Object.keys(data.dematelFactor).length} 個因素關係評分。</p>
                </div>
            </div>
            
            <div class="mt-4">
                <button class="btn btn-primary me-2" onclick="location.reload()">重新填寫問卷</button>
                <button class="btn btn-secondary me-2" onclick="downloadData(surveyData)">下載數據</button>
                <button class="btn btn-success" onclick="sendEmailData(surveyData)">寄送數據至 Gmail</button>
            </div>
        `;
        
        console.log('結果顯示完成');
        
    } catch (error) {
        console.error('顯示結果時發生錯誤:', error);
        container.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">顯示結果時發生錯誤</h4>
                <p>${error.message}</p>
            </div>
        `;
    }
}

// 改進下載數據功能
function downloadData(data) {
    try {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `bwm_dematel_survey_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        console.log('數據下載完成');
    } catch (error) {
        console.error('下載數據時發生錯誤:', error);
        alert('下載數據時發生錯誤，請檢查控制台獲取詳細信息。');
    }
}

// 寄送數據至 Gmail 功能
function sendEmailData(data) {
    try {
        // 格式化郵件內容
        const emailSubject = encodeURIComponent('數位轉型影響因素研究問卷數據');
        const emailBody = formatEmailContent(data);
        
        // 創建 mailto 連結
        const mailtoLink = `mailto:as0937705251@gmail.com?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;
        
        // 打開用戶的預設郵件客戶端
        window.open(mailtoLink, '_blank');
        
        console.log('郵件客戶端已開啟');
        
        // 顯示成功訊息
        alert('郵件客戶端已開啟，請檢查您的預設郵件應用程式。\n\n收件人：as0937705251@gmail.com\n主旨：數位轉型影響因素研究問卷數據\n\n如果郵件客戶端沒有自動開啟，請手動開啟您的郵件應用程式。');
        
    } catch (error) {
        console.error('寄送郵件時發生錯誤:', error);
        alert('寄送郵件時發生錯誤，請檢查控制台獲取詳細信息。');
    }
}

// 格式化郵件內容
function formatEmailContent(data) {
    const timestamp = new Date().toLocaleString('zh-TW');
    
    let content = `數位轉型影響因素研究問卷數據\n`;
    content += `提交時間：${timestamp}\n`;
    content += `==========================================\n\n`;
    
    // 基本資料
    content += `【基本資料】\n`;
    content += `性別：${data.basic.gender === 'male' ? '男' : data.basic.gender === 'female' ? '女' : '未填寫'}\n`;
    content += `年齡：${data.basic.age || '未填寫'}\n`;
    content += `教育程度：${data.basic.education || '未填寫'}\n`;
    content += `是否為電子製造業：${data.basic.electronics_industry === 'yes' ? '是' : data.basic.electronics_industry === 'no' ? '否' : '未填寫'}\n`;
    content += `數位轉型相關年資：${data.basic.experience || '未填寫'}\n\n`;
    
    // BWM 結果
    content += `【BWM 結果】\n`;
    content += `最佳因素：${data.bwm.bestFactor ? factors[data.bwm.bestFactor].name : '未選擇'}\n`;
    content += `最劣因素：${data.bwm.worstFactor ? factors[data.bwm.worstFactor].name : '未選擇'}\n`;
    content += `比較數量：${Object.keys(data.bwm.bestComparisons).length + Object.keys(data.bwm.worstComparisons).length}\n\n`;
    
    // DEMATEL 結果
    content += `【DEMATEL 影響關係】\n`;
    content += `構面影響關係矩陣：${Object.keys(data.dematelDimension).length} 個構面關係評分\n`;
    content += `因素影響關係矩陣：${Object.keys(data.dematelFactor).length} 個因素關係評分\n\n`;
    
    // 完整 JSON 數據
    content += `【完整 JSON 數據】\n`;
    content += JSON.stringify(data, null, 2);
    
    return content;
} 