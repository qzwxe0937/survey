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
            "公司通常很敏感可能影響業務的科技進展。",
            "公司主動尋求可能影響業務的科技進展情報。",
            "公司定期檢視科技變革對業務的影響。"
        ]
    },
    a2: { 
        name: "科技回應能力", 
        dimension: "A", 
        description: "指企業在識別和理解技術變化後，能夠迅速且有效地調整其資源和業務流程以適應這些技術變革的能力。",
        examples: [
            "公司通常快速回應外在科技變革。",
            "公司的業務單位對新科技的回應不落人後。",
            "公司不會藉故緩慢回應科技進展。"
        ]
    },
    b1: { 
        name: "建構資源", 
        dimension: "B", 
        description: "指企業如何有效地配置和組織其內部資源，支持組織目標的實現。",
        examples: [
            "公司從科技服務供應商採購有價值的數位資源。",
            "公司自行發展有值價的數位資源。",
            "公司善用有價值的數位資源。"
            
        ]
    },
    b2: { 
        name: "組合資源", 
        dimension: "B", 
        description: "指企業將不同的資源(如人力、技術、財務資源等)進行整合和協同，以達到最大化價值的過程。",
        examples: [
            "公司整合現有數位資源逐步改善營運能力。",
            "公司整合現有數位資源擴充營運能力。",
            "公司整合現有數位資源創造改善競爭優勢的新能力。"
        ]
    },
    b3: { 
        name: "善用資源", 
        dimension: "B", 
        description: "指企業在運營過程中，將現有資源的價值最大化，並利用這些資源來支持戰略目標的達成。",
        examples: [
            "公司善用數位資源以確認為了爭取商機必須具備的彈性整合能力。",
            "公司善用數位資源以確認有效的整合現有能力。",
            "公司善用數位資源以整合相關策略，例如資源優勢策略、市場開拓策略或創業策略。"
        ]
    },
    c1: { 
        name: "技術能力", 
        dimension: "C", 
        description: "指在資訊技術領域的專業知識和技能。",
        examples: [
            "公司IT人員擅長多元與結構化的程式方法或工具。",
            "公司IT人員擅長分散式處理或運算。",       
            "公司IT人員擅長網路管理。",
            "公司IT人員擅長網頁應用程式。",
            "公司IT人員擅長資料倉儲與資料探勘。"

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

// BWM 問題管理變數
let currentBWMQuestion = 0;
let bwmQuestions = [];
let bwmAnswers = {};

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
    // 生成BWM問題列表
    bwmQuestions = [];
    
    // 問題1：選擇最佳因素
    bwmQuestions.push({
        type: 'best_selection',
        title: '請選出最佳因素',
        description: '請從以下因素中選出您認為最重要的最佳因素。',
        question: '哪一個因素對數位轉型最重要？'
    });
    
    // 問題2-8：最佳因素與其他因素的比較
    const factorKeys = Object.keys(factors);
    factorKeys.forEach((factorKey, index) => {
        bwmQuestions.push({
            type: 'best_comparison',
            title: `最佳因素比較 (${index + 1}/${factorKeys.length})`,
            description: '請比較最佳因素與其他因素的重要性。',
            question: `比較「最佳因素」與「${factorKey}. ${factors[factorKey].name}」的重要性`,
            factorKey: factorKey,
            factorName: factors[factorKey].name,
            factorDescription: factors[factorKey].description,
            factorExamples: factors[factorKey].examples
        });
    });
    
    // 問題9：選擇最劣因素
    bwmQuestions.push({
        type: 'worst_selection',
        title: '請選出最劣因素',
        description: '請從以下因素中選出您認為最不重要的最劣因素。',
        question: '哪一個因素對數位轉型最不重要？'
    });
    
    // 問題10-16：其他因素與最劣因素的比較
    factorKeys.forEach((factorKey, index) => {
        bwmQuestions.push({
            type: 'worst_comparison',
            title: `最劣因素比較 (${index + 1}/${factorKeys.length})`,
            description: '請比較其他因素與最劣因素的重要性。',
            question: `比較「${factorKey}. ${factors[factorKey].name}」與「最劣因素」的重要性`,
            factorKey: factorKey,
            factorName: factors[factorKey].name,
            factorDescription: factors[factorKey].description,
            factorExamples: factors[factorKey].examples
        });
    });
    
    // 初始化BWM問題顯示
    showCurrentBWMQuestion();
}

// 顯示當前BWM問題
function showCurrentBWMQuestion() {
    if (currentBWMQuestion >= bwmQuestions.length) {
        return;
    }
    
    const question = bwmQuestions[currentBWMQuestion];
    const container = document.getElementById('bwm-question-content');
    
    // 更新進度
    updateBWMProgress();
    
    // 清空容器
    container.innerHTML = '';
    
    // 創建問題卡片
    const questionCard = document.createElement('div');
    questionCard.className = 'card';
    
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.innerHTML = `<h5 class="mb-0">${question.title}</h5>`;
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // 添加問題描述
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'mb-3';
    descriptionDiv.innerHTML = `
        <p class="text-muted">${question.description}</p>
        <h6 class="text-primary">${question.question}</h6>
    `;
    cardBody.appendChild(descriptionDiv);
    
    // 根據問題類型生成不同的內容
    if (question.type === 'best_selection') {
        generateBestFactorSelection(cardBody);
    } else if (question.type === 'worst_selection') {
        generateWorstFactorSelection(cardBody);
    } else if (question.type === 'best_comparison') {
        generateBestFactorComparison(cardBody, question);
    } else if (question.type === 'worst_comparison') {
        generateWorstFactorComparison(cardBody, question);
    }
    
    questionCard.appendChild(cardHeader);
    questionCard.appendChild(cardBody);
    container.appendChild(questionCard);
    
    // 更新按鈕狀態
    updateBWMButtons();
    
    // 恢復已保存的答案
    restoreBWMAnswers();
    
    // 如果是最後一題，確保驗證
    if (currentBWMQuestion >= bwmQuestions.length - 1) {
        console.log('顯示最後一題，確保驗證');
        validateStep3();
    }
}

// 更新BWM進度
function updateBWMProgress() {
    const counter = document.getElementById('bwm-question-counter');
    const progressBar = document.getElementById('bwm-progress-bar');
    
    if (counter && progressBar) {
        counter.textContent = `${currentBWMQuestion + 1} / ${bwmQuestions.length}`;
        const progress = ((currentBWMQuestion + 1) / bwmQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// 更新BWM按鈕狀態
function updateBWMButtons() {
    const prevBtn = document.getElementById('prev-bwm-btn');
    const nextBtn = document.getElementById('next-bwm-btn');
    const step3NextBtn = document.getElementById('step3-next');
    
    if (prevBtn) {
        prevBtn.style.display = currentBWMQuestion > 0 ? 'inline-block' : 'none';
    }
    
    // 隱藏下一題按鈕，因為現在會自動跳轉
    if (nextBtn) {
        nextBtn.style.display = 'none';
    }
    
    if (step3NextBtn) {
        step3NextBtn.style.display = currentBWMQuestion >= bwmQuestions.length - 1 ? 'inline-block' : 'none';
        // 當顯示下一步按鈕時，也要驗證並啟用
        if (currentBWMQuestion >= bwmQuestions.length - 1) {
            validateStep3();
        }
    }
}

// 生成最佳因素選擇
function generateBestFactorSelection(container) {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'factor-options';
    
    Object.entries(factors).forEach(([key, factor]) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'factor-option card mb-2';
        optionDiv.style.cursor = 'pointer';
        
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
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <strong class="text-primary">${key}.</strong> ${factor.name}
                    </div>
                    <div class="col-md-9">
                        <small class="text-muted">${factor.description}</small>
                        ${examplesHtml}
                    </div>
                </div>
            </div>
        `;
        
        optionDiv.onclick = () => selectBestFactor(key, optionDiv);
        optionsDiv.appendChild(optionDiv);
    });
    
    container.appendChild(optionsDiv);
}

// 生成最劣因素選擇
function generateWorstFactorSelection(container) {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'factor-options';
    
    Object.entries(factors).forEach(([key, factor]) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'factor-option card mb-2';
        optionDiv.style.cursor = 'pointer';
        
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
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <strong class="text-danger">${key}.</strong> ${factor.name}
                    </div>
                    <div class="col-md-9">
                        <small class="text-muted">${factor.description}</small>
                        ${examplesHtml}
                    </div>
                </div>
            </div>
        `;
        
        optionDiv.onclick = () => selectWorstFactor(key, optionDiv);
        optionsDiv.appendChild(optionDiv);
    });
    
    container.appendChild(optionsDiv);
}

// 選擇最佳因素
function selectBestFactor(factorKey, element) {
    // 如果重新選擇最佳因素，清除所有相關的比較答案
    if (bestFactor && bestFactor !== factorKey) {
        console.log(`重新選擇最佳因素: ${bestFactor} -> ${factorKey}, 清除相關比較答案`);
        
        // 清除所有以 "best_" 開頭的比較答案
        Object.keys(bwmAnswers).forEach(key => {
            if (key.startsWith('best_')) {
                delete bwmAnswers[key];
                console.log(`清除比較答案: ${key}`);
            }
        });
    }
    
    bestFactor = factorKey;
    
    // 清除其他選項的選中狀態
    const container = element.closest('.factor-options');
    if (container) {
        container.querySelectorAll('.factor-option').forEach(opt => {
            opt.classList.remove('selected');
            opt.style.borderColor = '#dee2e6';
            opt.style.backgroundColor = '#fff';
        });
    }
    
    // 選中當前選項
    element.classList.add('selected');
    element.style.borderColor = '#007bff';
    element.style.backgroundColor = '#e3f2fd';
    
    // 保存答案
    bwmAnswers['best_factor'] = factorKey;
    
    // 檢查是否是最後一題
    const isLastQuestion = currentBWMQuestion >= bwmQuestions.length - 1;
    console.log(`選擇最佳因素: ${factorKey}, 是否最後一題: ${isLastQuestion}`);
    
    // 自動跳轉到下一題
    setTimeout(() => {
        nextBWMQuestion();
        // 如果是最後一題，立即驗證
        if (isLastQuestion) {
            console.log('最後一題已答完，立即驗證');
            validateStep3();
        }
    }, 500);
}

// 選擇最劣因素
function selectWorstFactor(factorKey, element) {
    // 如果重新選擇最劣因素，清除所有相關的比較答案
    if (worstFactor && worstFactor !== factorKey) {
        console.log(`重新選擇最劣因素: ${worstFactor} -> ${factorKey}, 清除相關比較答案`);
        
        // 清除所有以 "worst_" 開頭的比較答案
        Object.keys(bwmAnswers).forEach(key => {
            if (key.startsWith('worst_')) {
                delete bwmAnswers[key];
                console.log(`清除比較答案: ${key}`);
            }
        });
    }
    
    // 清除其他選項的選中狀態
    const container = element.closest('.factor-options');
    if (container) {
        container.querySelectorAll('.factor-option').forEach(opt => {
            opt.classList.remove('selected');
            opt.style.borderColor = '#dee2e6';
            opt.style.backgroundColor = '#fff';
        });
    }
    
    // 選中當前選項
    element.classList.add('selected');
    element.style.borderColor = '#dc3545';
    element.style.backgroundColor = '#f8d7da';
    
    // 保存答案
    worstFactor = factorKey;
    bwmAnswers['worst_factor'] = factorKey;
    
    // 檢查是否是最後一題
    const isLastQuestion = currentBWMQuestion >= bwmQuestions.length - 1;
    console.log(`選擇最劣因素: ${factorKey}, 是否最後一題: ${isLastQuestion}`);
    
    // 自動跳轉到下一題
    setTimeout(() => {
        nextBWMQuestion();
        // 如果是最後一題，立即驗證
        if (isLastQuestion) {
            console.log('最後一題已答完，立即驗證');
            validateStep3();
        }
    }, 500);
}

// 選擇BWM評分
function selectBWMRating(button, name, value) {
    // 找到同一表格中的所有按鈕
    const table = button.closest('table');
    const buttons = table.querySelectorAll('.rating-btn');
    
    // 移除所有按鈕的選中狀態
    buttons.forEach(btn => {
        btn.classList.remove('btn-primary', 'selected');
        btn.classList.add('btn-outline-secondary');
        btn.textContent = '選擇';
    });
    
    // 設置當前按鈕為選中狀態
    button.classList.remove('btn-outline-secondary');
    button.classList.add('btn-primary', 'selected');
    button.textContent = '已選';
    
    // 保存答案
    bwmAnswers[name] = value;
    
    // 檢查是否是最後一題
    const isLastQuestion = currentBWMQuestion >= bwmQuestions.length - 1;
    console.log(`選擇評分: ${name} = ${value}, 是否最後一題: ${isLastQuestion}`);
    
    // 自動跳轉到下一題
    setTimeout(() => {
        nextBWMQuestion();
        // 如果是最後一題，立即驗證
        if (isLastQuestion) {
            console.log('最後一題已答完，立即驗證');
            validateStep3();
        }
    }, 500);
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
function generateBestFactorComparison(container, question) {
    if (!bestFactor) {
        container.innerHTML = '<div class="alert alert-warning">請先選擇最佳因素</div>';
        return;
    }
    
    // 如果比較的是最佳因素自己，自動填入1並跳過
    if (question.factorKey === bestFactor) {
        // 自動填入1
        bwmAnswers[`best_${bestFactor}_${bestFactor}`] = 1;
        console.log(`自動填入自己比較: best_${bestFactor}_${bestFactor} = 1`);
        // 自動跳過這個問題
        setTimeout(() => {
            nextBWMQuestion();
        }, 100);
        return;
    }
    
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
        <h6><strong>最佳因素：${bestFactor}. ${factors[bestFactor].name}</strong></h6>
        <p class="mb-0"><small>${factors[bestFactor].description}</small></p>
        ${bestExamplesHtml}
    `;
    container.appendChild(bestFactorInfo);
    
    // 添加比較因素說明
    const compareFactorInfo = document.createElement('div');
    compareFactorInfo.className = 'alert alert-light mb-3';
    
    let compareExamplesHtml = '';
    if (question.factorExamples) {
        compareExamplesHtml = `
            <div class="mt-2">
                <small class="text-primary"><strong>舉例：</strong></small>
                <ul class="list-unstyled mt-1">
                    ${question.factorExamples.map(example => 
                        `<li><small class="text-muted">• ${example}</small></li>`
                    ).join('')}
                </ul>
            </div>
        `;
    }
    
    compareFactorInfo.innerHTML = `
        <h6><strong>比較因素：${question.factorKey}. ${question.factorName}</strong></h6>
        <p class="mb-0"><small>${question.factorDescription}</small></p>
        ${compareExamplesHtml}
    `;
    container.appendChild(compareFactorInfo);
    
    // 創建評分選項（橫式布局）
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating-options';
    
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
    
    // 創建橫式評分表
    const ratingTable = document.createElement('table');
    ratingTable.className = 'table table-bordered';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // 創建表頭：第一列為標題，其餘為評分選項
    let headerHtml = '<th style="width: 20%;">評分選項</th>';
    ratingOptions.forEach(option => {
        headerHtml += `<th style="width: ${80/ratingOptions.length}%; text-align: center;">${option.text}</th>`;
    });
    headerRow.innerHTML = headerHtml;
    thead.appendChild(headerRow);
    ratingTable.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    const buttonRow = document.createElement('tr');
    
    // 第一列為標題
    buttonRow.innerHTML = '<td><strong>選擇評分</strong></td>';
    
    // 其餘列為按鈕
    ratingOptions.forEach(option => {
        const buttonCell = document.createElement('td');
        buttonCell.className = 'text-center';
        buttonCell.innerHTML = `
            <button type="button" class="btn btn-outline-secondary btn-sm rating-btn" 
                    data-value="${option.value}" 
                    onclick="selectBWMRating(this, 'best_${bestFactor}_${question.factorKey}', ${option.value})">
                選擇
            </button>
        `;
        buttonRow.appendChild(buttonCell);
    });
    
    tbody.appendChild(buttonRow);
    ratingTable.appendChild(tbody);
    ratingDiv.appendChild(ratingTable);
    container.appendChild(ratingDiv);
}

// 生成最劣因素比較表格
function generateWorstFactorComparison(container, question) {
    if (!worstFactor) {
        container.innerHTML = '<div class="alert alert-warning">請先選擇最劣因素</div>';
        return;
    }
    
    // 如果比較的是最劣因素自己，自動填入1並跳過
    if (question.factorKey === worstFactor) {
        // 自動填入1
        bwmAnswers[`worst_${worstFactor}_${worstFactor}`] = 1;
        console.log(`自動填入自己比較: worst_${worstFactor}_${worstFactor} = 1`);
        // 自動跳過這個問題
        setTimeout(() => {
            nextBWMQuestion();
        }, 100);
        return;
    }
    
    // 添加比較因素說明
    const compareFactorInfo = document.createElement('div');
    compareFactorInfo.className = 'alert alert-light mb-3';
    
    let compareExamplesHtml = '';
    if (question.factorExamples) {
        compareExamplesHtml = `
            <div class="mt-2">
                <small class="text-primary"><strong>舉例：</strong></small>
                <ul class="list-unstyled mt-1">
                    ${question.factorExamples.map(example => 
                        `<li><small class="text-muted">• ${example}</small></li>`
                    ).join('')}
                </ul>
            </div>
        `;
    }
    
    compareFactorInfo.innerHTML = `
        <h6><strong>比較因素：${question.factorKey}. ${question.factorName}</strong></h6>
        <p class="mb-0"><small>${question.factorDescription}</small></p>
        ${compareExamplesHtml}
    `;
    container.appendChild(compareFactorInfo);
    
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
        <h6><strong>最劣因素：${worstFactor}. ${factors[worstFactor].name}</strong></h6>
        <p class="mb-0"><small>${factors[worstFactor].description}</small></p>
        ${worstExamplesHtml}
    `;
    container.appendChild(worstFactorInfo);
    
    // 創建評分選項（橫式布局）
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating-options';
    
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
    
    // 創建橫式評分表
    const ratingTable = document.createElement('table');
    ratingTable.className = 'table table-bordered';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // 創建表頭：第一列為標題，其餘為評分選項
    let headerHtml = '<th style="width: 20%;">評分選項</th>';
    ratingOptions.forEach(option => {
        headerHtml += `<th style="width: ${80/ratingOptions.length}%; text-align: center;">${option.text}</th>`;
    });
    headerRow.innerHTML = headerHtml;
    thead.appendChild(headerRow);
    ratingTable.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    const buttonRow = document.createElement('tr');
    
    // 第一列為標題
    buttonRow.innerHTML = '<td><strong>選擇評分</strong></td>';
    
    // 其餘列為按鈕
    ratingOptions.forEach(option => {
        const buttonCell = document.createElement('td');
        buttonCell.className = 'text-center';
        buttonCell.innerHTML = `
            <button type="button" class="btn btn-outline-secondary btn-sm rating-btn" 
                    data-value="${option.value}" 
                    onclick="selectBWMRating(this, 'worst_${question.factorKey}_${worstFactor}', ${option.value})">
                選擇
            </button>
        `;
        buttonRow.appendChild(buttonCell);
    });
    
    tbody.appendChild(buttonRow);
    ratingTable.appendChild(tbody);
    ratingDiv.appendChild(ratingTable);
    container.appendChild(ratingDiv);
}

// 驗證步驟3
function validateStep3() {
    console.log('=== BWM驗證開始 ===');
    console.log('bwmAnswers:', bwmAnswers);
    console.log('bwmQuestions:', bwmQuestions);
    
    // 檢查BWM答案是否完整
    const requiredAnswers = bwmQuestions.length;
    const answeredCount = Object.keys(bwmAnswers).length;
    
    console.log(`問題總數: ${requiredAnswers}, 已回答數: ${answeredCount}`);
    
    // 檢查是否所有問題都已回答
    const allAnswered = answeredCount >= requiredAnswers;
    
    // 檢查是否選擇了最佳和最劣因素
    const hasBestFactor = bwmAnswers.hasOwnProperty('best_factor');
    const hasWorstFactor = bwmAnswers.hasOwnProperty('worst_factor');
    
    console.log(`最佳因素: ${bwmAnswers.best_factor || '未選擇'}, 最劣因素: ${bwmAnswers.worst_factor || '未選擇'}`);
    
    // 檢查比較問題是否完整
    const factorKeys = Object.keys(factors);
    const bestFactor = bwmAnswers.best_factor;
    const worstFactor = bwmAnswers.worst_factor;
    
    // 計算預期的比較數量（排除自己與自己的比較）
    const expectedBestComparisons = factorKeys.length - 1; // 最佳因素與其他因素的比較（排除自己）
    const expectedWorstComparisons = factorKeys.length - 1; // 其他因素與最劣因素的比較（排除自己）
    
    console.log(`因素總數: ${factorKeys.length}, 最佳因素: ${bestFactor}, 最劣因素: ${worstFactor}`);
    console.log(`預期最佳比較: ${expectedBestComparisons}, 預期最劣比較: ${expectedWorstComparisons}`);
    
    let bestComparisonsCount = 0;
    let worstComparisonsCount = 0;
    
    Object.keys(bwmAnswers).forEach(key => {
        if (key.startsWith('best_') && key !== 'best_factor') {
            // 檢查是否為自己與自己的比較
            const parts = key.split('_');
            if (parts.length >= 3 && parts[1] === bestFactor && parts[2] === bestFactor) {
                console.log(`跳過自己比較: ${key}`);
            } else {
                bestComparisonsCount++;
                console.log(`最佳比較答案: ${key} = ${bwmAnswers[key]}`);
            }
        }
        if (key.startsWith('worst_') && key !== 'worst_factor') {
            // 檢查是否為自己與自己的比較
            const parts = key.split('_');
            if (parts.length >= 3 && parts[1] === worstFactor && parts[2] === worstFactor) {
                console.log(`跳過自己比較: ${key}`);
            } else {
                worstComparisonsCount++;
                console.log(`最劣比較答案: ${key} = ${bwmAnswers[key]}`);
            }
        }
    });
    
    console.log(`實際最佳比較數: ${bestComparisonsCount}, 實際最劣比較數: ${worstComparisonsCount}`);
    
    const allComparisonsComplete = bestComparisonsCount >= expectedBestComparisons && 
                                  worstComparisonsCount >= expectedWorstComparisons;
    
    const isValid = hasBestFactor && hasWorstFactor && allComparisonsComplete;
    
    console.log(`比較完整: ${allComparisonsComplete}, 總體驗證: ${isValid}`);
    
    // 更新按鈕狀態
    const step3NextBtn = document.getElementById('step3-next');
    if (step3NextBtn) {
        console.log(`找到step3-next按鈕，當前disabled狀態: ${step3NextBtn.disabled}`);
        step3NextBtn.disabled = !isValid;
        console.log(`設置disabled為: ${!isValid}`);
        if (isValid) {
            step3NextBtn.classList.remove('btn-secondary');
            step3NextBtn.classList.add('btn-success');
            console.log('按鈕樣式已更新為成功狀態');
        }
    } else {
        console.log('未找到step3-next按鈕');
    }
    
    console.log(`BWM驗證結果: 最佳因素=${hasBestFactor}, 最劣因素=${hasWorstFactor}, 比較完整=${allComparisonsComplete}, 總體=${isValid}`);
    console.log('=== BWM驗證結束 ===');
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
    
    // 顯示導航按鈕
    if (prevBtn) prevBtn.style.display = currentDimensionQuestion > 0 ? 'inline-block' : 'none';
    if (nextBtn) nextBtn.style.display = 'none'; // 保持隱藏，因為是自動跳轉模式
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
    
    // 顯示導航按鈕（保持之前的設置）
    if (prevBtn) prevBtn.style.display = currentDimensionQuestion > 0 ? 'inline-block' : 'none';
    if (nextBtn) nextBtn.style.display = 'none'; // 保持隱藏，因為是自動跳轉模式
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
    
    // 顯示導航按鈕
    if (prevBtn) prevBtn.style.display = currentFactorQuestion > 0 ? 'inline-block' : 'none';
    if (nextBtn) nextBtn.style.display = 'none'; // 保持隱藏，因為是自動跳轉模式
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
    
    // 顯示導航按鈕（保持之前的設置）
    if (prevBtn) prevBtn.style.display = currentFactorQuestion > 0 ? 'inline-block' : 'none';
    if (nextBtn) nextBtn.style.display = 'none'; // 保持隱藏，因為是自動跳轉模式
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
        // 檢查步驟一的驗證
        if (currentStep === 1) {
            if (!validateStep1()) {
                alert('請填寫所有基本資料後再進入下一步！');
                return;
            }
        }
        
        // 檢查步驟三的驗證
        if (currentStep === 3) {
            // 使用新的BWM驗證邏輯
            validateStep3();
            const step3NextBtn = document.getElementById('step3-next');
            if (step3NextBtn && step3NextBtn.disabled) {
                alert('請完成所有BWM問題後再進入下一步！');
                return;
            }
        }
        
        // 隱藏頁面上方的標題和說明部分
        hideHeaderContent();
        
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // 如果進入步驟3，初始化BWM問題
        if (currentStep === 3) {
            generateBWMSelections();
        }
        
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

// 驗證步驟一的基本資料
function validateStep1() {
    const name = document.querySelector('input[name="name"]').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.querySelector('input[name="age"]').value.trim();
    const education = document.querySelector('input[name="education"]').value.trim();
    const electronicsIndustry = document.querySelector('input[name="electronics_industry"]:checked');
    const experience = document.querySelector('input[name="experience"]').value.trim();
    
    // 檢查所有欄位是否已填寫
    if (!name) {
        alert('請輸入姓名');
        return false;
    }
    
    if (!gender) {
        alert('請選擇性別');
        return false;
    }
    
    if (!age) {
        alert('請輸入年齡');
        return false;
    }
    
    if (!education) {
        alert('請輸入教育程度');
        return false;
    }
    
    if (!electronicsIndustry) {
        alert('請選擇是否為電子製造業');
        return false;
    }
    
    if (!experience) {
        alert('請輸入數位轉型相關年資');
        return false;
    }
    
    // 檢查年齡範圍
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
        alert('請輸入有效的年齡（18-100歲）');
        return false;
    }
    
    // 檢查年資範圍
    const experienceNum = parseInt(experience);
    if (isNaN(experienceNum) || experienceNum < 0 || experienceNum > 50) {
        alert('請輸入有效的年資（0-50年）');
        return false;
    }
    
    return true;
}

// 分離表單提交處理函數
function handleFormSubmit(e) {
    e.preventDefault();
    console.log('表單提交事件觸發');
    
    try {
        // 收集基本資料
        const basicData = {
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            age: document.querySelector('input[name="age"]')?.value,
            education: document.querySelector('input[name="education"]')?.value,
            electronics_industry: document.querySelector('input[name="electronics_industry"]:checked')?.value,
            experience: document.querySelector('input[name="experience"]')?.value,
            name: document.querySelector('input[name="name"]')?.value
        };
        
        console.log('基本資料:', basicData);
        
        // 收集BWM數據
        const bwmData = {
            bestFactor: bwmAnswers.best_factor,
            worstFactor: bwmAnswers.worst_factor,
            bestComparisons: {},
            worstComparisons: {}
        };
        
        // 從bwmAnswers中提取比較數據，包含自己與自己的比較
        Object.keys(bwmAnswers).forEach(key => {
            if (key.startsWith('best_') && key !== 'best_factor') {
                bwmData.bestComparisons[key] = bwmAnswers[key];
            }
            if (key.startsWith('worst_') && key !== 'worst_factor') {
                bwmData.worstComparisons[key] = bwmAnswers[key];
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
                        <li class="list-group-item">姓名: ${data.basic.name || '未填寫'}</li>
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
    content += `姓名：${data.basic.name || '未填寫'}\n`;
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

// 啟用下一題按鈕
function enableNextBWMQuestion() {
    const nextBtn = document.getElementById('next-bwm-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.classList.remove('btn-secondary');
        nextBtn.classList.add('btn-primary');
    }
}

// 下一題BWM問題
function nextBWMQuestion() {
    if (currentBWMQuestion < bwmQuestions.length - 1) {
        currentBWMQuestion++;
        showCurrentBWMQuestion();
        
        // 如果到達最後一題，驗證並啟用下一步按鈕
        if (currentBWMQuestion >= bwmQuestions.length - 1) {
            console.log('到達最後一題，調用validateStep3');
            validateStep3();
        }
    } else {
        // 如果已經在最後一題，也要驗證
        console.log('已在最後一題，調用validateStep3');
        validateStep3();
    }
}

// 上一題BWM問題
function prevBWMQuestion() {
    if (currentBWMQuestion > 0) {
        currentBWMQuestion--;
        showCurrentBWMQuestion();
    }
}

// 恢復已保存的BWM答案
function restoreBWMAnswers() {
    const question = bwmQuestions[currentBWMQuestion];
    if (!question) return;
    
    if (question.type === 'best_selection') {
        // 恢復最佳因素選擇
        const savedBestFactor = bwmAnswers.best_factor;
        if (savedBestFactor) {
            // 查找包含該因素代碼的選項
            const options = document.querySelectorAll('.factor-option');
            options.forEach(option => {
                const factorText = option.querySelector('.text-primary');
                if (factorText && factorText.textContent.includes(savedBestFactor)) {
                    // 移除其他選項的選中狀態
                    options.forEach(opt => {
                        opt.classList.remove('selected');
                        opt.style.borderColor = '#dee2e6';
                        opt.style.backgroundColor = '#fff';
                    });
                    // 選中當前選項
                    option.classList.add('selected');
                    option.style.borderColor = '#007bff';
                    option.style.backgroundColor = '#e3f2fd';
                }
            });
        }
    } else if (question.type === 'worst_selection') {
        // 恢復最劣因素選擇
        const savedWorstFactor = bwmAnswers.worst_factor;
        if (savedWorstFactor) {
            // 查找包含該因素代碼的選項
            const options = document.querySelectorAll('.factor-option');
            options.forEach(option => {
                const factorText = option.querySelector('.text-danger');
                if (factorText && factorText.textContent.includes(savedWorstFactor)) {
                    // 移除其他選項的選中狀態
                    options.forEach(opt => {
                        opt.classList.remove('selected');
                        opt.style.borderColor = '#dee2e6';
                        opt.style.backgroundColor = '#fff';
                    });
                    // 選中當前選項
                    option.classList.add('selected');
                    option.style.borderColor = '#dc3545';
                    option.style.backgroundColor = '#f8d7da';
                }
            });
        }
    } else if (question.type === 'best_comparison') {
        // 恢復最佳因素比較評分
        const answerKey = `best_${bwmAnswers.best_factor}_${question.factorKey}`;
        const savedRating = bwmAnswers[answerKey];
        if (savedRating) {
            // 查找對應的評分按鈕
            const buttons = document.querySelectorAll('.rating-btn');
            buttons.forEach(button => {
                if (button.getAttribute('data-value') === savedRating.toString()) {
                    // 移除其他按鈕的選中狀態
                    buttons.forEach(btn => {
                        btn.classList.remove('btn-primary', 'selected');
                        btn.classList.add('btn-outline-secondary');
                        btn.textContent = '選擇';
                    });
                    // 選中當前按鈕
                    button.classList.remove('btn-outline-secondary');
                    button.classList.add('btn-primary', 'selected');
                    button.textContent = '已選';
                }
            });
        }
    } else if (question.type === 'worst_comparison') {
        // 恢復最劣因素比較評分
        const answerKey = `worst_${question.factorKey}_${bwmAnswers.worst_factor}`;
        const savedRating = bwmAnswers[answerKey];
        if (savedRating) {
            // 查找對應的評分按鈕
            const buttons = document.querySelectorAll('.rating-btn');
            buttons.forEach(button => {
                if (button.getAttribute('data-value') === savedRating.toString()) {
                    // 移除其他按鈕的選中狀態
                    buttons.forEach(btn => {
                        btn.classList.remove('btn-primary', 'selected');
                        btn.classList.add('btn-outline-secondary');
                        btn.textContent = '選擇';
                    });
                    // 選中當前按鈕
                    button.classList.remove('btn-outline-secondary');
                    button.classList.add('btn-primary', 'selected');
                    button.textContent = '已選';
                }
            });
        }
    }
} 