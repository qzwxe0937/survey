// 修复基本资料收集问题
// Fix Basic Data Collection Issue

console.log('🔧 开始修复基本资料收集问题...');

// 1. 增强基本资料收集函数
function collectBasicData() {
    console.log('📋 收集基本资料...');
    
    const basicData = {
        gender: null,
        age: null,
        education: null,
        electronics_industry: null,
        experience: null
    };
    
    // 使用多种方式收集数据
    const genderInput = document.querySelector('input[name="gender"]:checked');
    if (genderInput) {
        basicData.gender = genderInput.value;
        console.log('✅ 性别:', basicData.gender);
    } else {
        console.warn('❌ 性别未选择');
    }
    
    const ageInput = document.querySelector('input[name="age"]:checked');
    if (ageInput) {
        basicData.age = ageInput.value;
        console.log('✅ 年龄:', basicData.age);
    } else {
        console.warn('❌ 年龄未选择');
    }
    
    const educationInput = document.querySelector('input[name="education"]:checked');
    if (educationInput) {
        basicData.education = educationInput.value;
        console.log('✅ 教育程度:', basicData.education);
    } else {
        console.warn('❌ 教育程度未选择');
    }
    
    const electronicsInput = document.querySelector('input[name="electronics_industry"]:checked');
    if (electronicsInput) {
        basicData.electronics_industry = electronicsInput.value;
        console.log('✅ 电子制造业:', basicData.electronics_industry);
    } else {
        console.warn('❌ 电子制造业未选择');
    }
    
    const experienceInput = document.querySelector('input[name="experience"]:checked');
    if (experienceInput) {
        basicData.experience = experienceInput.value;
        console.log('✅ 数位转型年资:', basicData.experience);
    } else {
        console.warn('❌ 数位转型年资未选择');
    }
    
    // 检查完整性
    const missingFields = Object.entries(basicData).filter(([key, value]) => !value);
    if (missingFields.length > 0) {
        console.warn('⚠️ 缺少的基本资料字段:', missingFields.map(([key]) => key));
    } else {
        console.log('✅ 所有基本资料已收集完成');
    }
    
    return basicData;
}

// 2. 修复表单提交处理函数
function fixHandleFormSubmit() {
    console.log('🔧 修复表单提交处理函数...');
    
    // 保存原始函数
    const originalHandleFormSubmit = window.handleFormSubmit;
    
    // 创建新的处理函数
    window.handleFormSubmit = function(e) {
        e.preventDefault();
        console.log('=== 修复后的表单提交事件触发 ===');
        
        try {
            // 强制收集基本资料
            const basicData = collectBasicData();
            
            // 检查基本资料完整性
            const missingBasicFields = Object.entries(basicData).filter(([key, value]) => !value);
            if (missingBasicFields.length > 0) {
                console.error('❌ 基本资料不完整，无法提交:', missingBasicFields.map(([key]) => key));
                alert('请完成所有基本资料填写后再提交问卷！');
                return false;
            }
            
            // 收集BWM数据
            const bwmData = {
                bestFactor: window.bwmAnswers?.best_factor || null,
                worstFactor: window.bwmAnswers?.worst_factor || null,
                bestComparisons: {},
                worstComparisons: {}
            };
            
            // 从bwmAnswers中提取比较数据
            if (window.bwmAnswers) {
                Object.keys(window.bwmAnswers).forEach(key => {
                    if (key.startsWith('best_') && key !== 'best_factor') {
                        bwmData.bestComparisons[key] = window.bwmAnswers[key];
                    }
                    if (key.startsWith('worst_') && key !== 'worst_factor') {
                        bwmData.worstComparisons[key] = window.bwmAnswers[key];
                    }
                });
            }
            
            console.log('BWM数据:', bwmData);
            
            // 收集DEMATEL构面数据
            const dematelDimensionData = {};
            if (window.dimensionAnswers) {
                Object.keys(window.dimensionAnswers).forEach(key => {
                    const answers = window.dimensionAnswers[key];
                    Object.keys(answers).forEach(answerKey => {
                        dematelDimensionData[answerKey] = answers[answerKey];
                    });
                });
            }
            
            console.log('DEMATEL构面数据:', dematelDimensionData);
            
            // 收集DEMATEL因素数据
            const dematelFactorData = {};
            if (window.factorAnswers) {
                Object.keys(window.factorAnswers).forEach(key => {
                    const answers = window.factorAnswers[key];
                    Object.keys(answers).forEach(answerKey => {
                        dematelFactorData[answerKey] = answers[answerKey];
                    });
                });
            }
            
            console.log('DEMATEL因素数据:', dematelFactorData);
            
            // 整合所有数据
            const surveyData = {
                basic: basicData,
                bwm: bwmData,
                dematelDimension: dematelDimensionData,
                dematelFactor: dematelFactorData,
                timestamp: new Date().toISOString()
            };
            
            console.log('✅ 完整问卷数据:', surveyData);
            
            // 显示结果
            if (window.displayResults) {
                window.displayResults(surveyData);
            } else {
                console.error('❌ displayResults函数不存在');
            }
            
            // 滚动到页面顶部
            window.scrollTo(0, 0);
            
        } catch (error) {
            console.error('❌ 表单提交处理错误:', error);
            alert('提交问卷时发生错误，请重试！');
        }
    };
    
    console.log('✅ 表单提交处理函数修复完成');
}

// 3. 添加调试工具
function addDebugTools() {
    console.log('🔧 添加调试工具...');
    
    // 创建调试按钮
    const debugButton = document.createElement('button');
    debugButton.textContent = '🔍 调试基本资料';
    debugButton.className = 'btn btn-warning btn-sm';
    debugButton.style.position = 'fixed';
    debugButton.style.top = '10px';
    debugButton.style.right = '10px';
    debugButton.style.zIndex = '9999';
    
    debugButton.onclick = function() {
        console.log('=== 调试基本资料 ===');
        const basicData = collectBasicData();
        console.log('当前基本资料:', basicData);
        
        // 显示在页面上
        const debugInfo = document.createElement('div');
        debugInfo.style.cssText = `
            position: fixed;
            top: 50px;
            right: 10px;
            background: white;
            border: 2px solid #ffc107;
            padding: 10px;
            border-radius: 5px;
            z-index: 9999;
            max-width: 300px;
            font-size: 12px;
        `;
        debugInfo.innerHTML = `
            <h6>基本资料调试信息</h6>
            <pre>${JSON.stringify(basicData, null, 2)}</pre>
            <button onclick="this.parentElement.remove()" class="btn btn-sm btn-secondary">关闭</button>
        `;
        document.body.appendChild(debugInfo);
    };
    
    document.body.appendChild(debugButton);
    console.log('✅ 调试工具添加完成');
}

// 4. 修复表单验证
function fixFormValidation() {
    console.log('🔧 修复表单验证...');
    
    // 保存原始验证函数
    const originalValidateStep1 = window.validateStep1;
    
    // 创建新的验证函数
    window.validateStep1 = function() {
        console.log('🔍 验证步骤1（基本资料）...');
        
        const requiredFields = ['gender', 'age', 'education', 'electronics_industry', 'experience'];
        const missingFields = [];
        
        requiredFields.forEach(fieldName => {
            const input = document.querySelector(`input[name="${fieldName}"]:checked`);
            if (!input) {
                missingFields.push(fieldName);
            }
        });
        
        if (missingFields.length > 0) {
            console.warn('❌ 步骤1验证失败，缺少字段:', missingFields);
            alert(`请完成以下基本资料：\n${missingFields.join('\n')}`);
            return false;
        }
        
        console.log('✅ 步骤1验证通过');
        return true;
    };
    
    console.log('✅ 表单验证修复完成');
}

// 5. 主修复函数
function fixBasicDataCollection() {
    console.log('🚀 开始修复基本资料收集问题...');
    
    // 等待页面加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(runFixes, 1000);
        });
    } else {
        setTimeout(runFixes, 1000);
    }
}

function runFixes() {
    console.log('🔧 执行修复...');
    
    // 执行所有修复
    fixFormValidation();
    fixHandleFormSubmit();
    addDebugTools();
    
    console.log('✅ 所有修复完成！');
    console.log('📝 使用说明：');
    console.log('1. 页面右上角有"🔍 调试基本资料"按钮');
    console.log('2. 点击按钮可以查看当前基本资料状态');
    console.log('3. 提交问卷时会强制检查基本资料完整性');
    console.log('4. 如果基本资料不完整，会显示具体缺少哪些字段');
}

// 自动执行修复
fixBasicDataCollection(); 