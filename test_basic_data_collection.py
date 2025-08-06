#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试基本资料收集功能
Test Basic Data Collection

专门用于测试问卷基本资料收集是否正常工作
"""

import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import os

def find_chromedriver():
    """查找ChromeDriver"""
    possible_paths = [
        "chromedriver.exe",
        "chromedriver/chromedriver.exe",
        "C:/chromedriver.exe",
        "D:/chromedriver.exe"
    ]
    
    for path in possible_paths:
        if os.path.exists(path):
            return path
    
    return None

def test_basic_data_collection():
    """测试基本资料收集功能"""
    print("🧪 测试基本资料收集功能...")
    
    driver = None
    try:
        # 设置Chrome驱动
        print("🔧 设置Chrome驱动...")
        chromedriver_path = find_chromedriver()
        
        if not chromedriver_path:
            print("❌ 找不到ChromeDriver，请先运行 quick_fix.py")
            return False
        
        service = Service(executable_path=chromedriver_path)
        
        options = Options()
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        # options.add_argument('--headless')  # 暂时不使用无头模式，方便观察
        
        driver = webdriver.Chrome(service=service, options=options)
        wait = WebDriverWait(driver, 10)
        
        print("✅ Chrome驱动设置完成")
        
        # 打开问卷页面
        print("📄 打开问卷页面...")
        driver.get("file:///" + os.path.abspath("index.html"))
        
        # 等待页面加载
        time.sleep(3)
        
        # 检查是否在步骤1
        try:
            step1 = wait.until(EC.presence_of_element_located((By.ID, "step1")))
            print("✅ 步骤1已加载")
        except TimeoutException:
            print("❌ 步骤1加载失败")
            return False
        
        # 填写基本资料
        print("📝 开始填写基本资料...")
        
        # 填写性别
        try:
            gender_male = wait.until(EC.element_to_be_clickable((By.ID, "gender_male")))
            gender_male.click()
            print("✅ 性别：男")
        except TimeoutException:
            print("❌ 性别选择失败")
            return False
        
        # 填写年龄
        try:
            age_31_35 = wait.until(EC.element_to_be_clickable((By.ID, "age_31_35")))
            age_31_35.click()
            print("✅ 年龄：31~35岁")
        except TimeoutException:
            print("❌ 年龄选择失败")
            return False
        
        # 填写教育程度
        try:
            education_master = wait.until(EC.element_to_be_clickable((By.ID, "education_master")))
            education_master.click()
            print("✅ 教育程度：硕士")
        except TimeoutException:
            print("❌ 教育程度选择失败")
            return False
        
        # 填写数位转型年资
        try:
            experience_6_10 = wait.until(EC.element_to_be_clickable((By.ID, "experience_6_10")))
            experience_6_10.click()
            print("✅ 数位转型年资：6~10年")
        except TimeoutException:
            print("❌ 数位转型年资选择失败")
            return False
        
        # 填写是否电子制造业
        try:
            electronics_yes = wait.until(EC.element_to_be_clickable((By.ID, "electronics_yes")))
            electronics_yes.click()
            print("✅ 电子制造业：是")
        except TimeoutException:
            print("❌ 电子制造业选择失败")
            return False
        
        print("✅ 所有基本资料填写完成")
        
        # 检查填写结果
        print("🔍 检查填写结果...")
        
        # 验证所有选项是否被选中
        selected_fields = [
            ("gender", "male"),
            ("age", "31~35歲"),
            ("education", "碩士"),
            ("experience", "6~10年"),
            ("electronics_industry", "yes")
        ]
        
        for field_name, expected_value in selected_fields:
            try:
                input_element = driver.find_element(By.CSS_SELECTOR, f'input[name="{field_name}"]:checked')
                actual_value = input_element.get_attribute("value")
                if actual_value == expected_value:
                    print(f"✅ {field_name}: {actual_value}")
                else:
                    print(f"❌ {field_name}: 期望 {expected_value}, 实际 {actual_value}")
            except NoSuchElementException:
                print(f"❌ {field_name}: 未找到选中的选项")
        
        # 执行JavaScript检查
        print("🔍 执行JavaScript检查...")
        
        # 注入修复脚本
        with open("fix_basic_data_collection.js", "r", encoding="utf-8") as f:
            fix_script = f.read()
        
        driver.execute_script(fix_script)
        time.sleep(2)
        
        # 点击调试按钮
        try:
            debug_button = driver.find_element(By.XPATH, "//button[contains(text(), '调试基本资料')]")
            debug_button.click()
            print("✅ 调试按钮点击成功")
            time.sleep(3)
        except NoSuchElementException:
            print("⚠️ 调试按钮未找到，可能修复脚本未正确加载")
        
        # 检查控制台输出
        print("📋 检查基本资料收集状态...")
        
        # 执行JavaScript收集基本资料
        basic_data_script = """
        const basicData = {
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            age: document.querySelector('input[name="age"]:checked')?.value,
            education: document.querySelector('input[name="education"]:checked')?.value,
            electronics_industry: document.querySelector('input[name="electronics_industry"]:checked')?.value,
            experience: document.querySelector('input[name="experience"]:checked')?.value
        };
        return basicData;
        """
        
        basic_data = driver.execute_script(basic_data_script)
        print("📊 收集到的基本资料:")
        print(json.dumps(basic_data, ensure_ascii=False, indent=2))
        
        # 检查是否有空值
        missing_fields = [key for key, value in basic_data.items() if not value]
        if missing_fields:
            print(f"❌ 缺少的基本资料字段: {missing_fields}")
            return False
        else:
            print("✅ 所有基本资料字段都已填写")
        
        # 测试表单验证
        print("🔍 测试表单验证...")
        
        validation_script = """
        const requiredFields = ['gender', 'age', 'education', 'electronics_industry', 'experience'];
        const missingFields = [];
        
        requiredFields.forEach(fieldName => {
            const input = document.querySelector(`input[name="${fieldName}"]:checked`);
            if (!input) {
                missingFields.push(fieldName);
            }
        });
        
        return {
            isValid: missingFields.length === 0,
            missingFields: missingFields
        };
        """
        
        validation_result = driver.execute_script(validation_script)
        print(f"验证结果: {validation_result}")
        
        if validation_result['isValid']:
            print("✅ 表单验证通过")
        else:
            print(f"❌ 表单验证失败，缺少字段: {validation_result['missingFields']}")
            return False
        
        print("🎉 基本资料收集测试完成！")
        return True
        
    except Exception as e:
        print(f"❌ 测试过程中发生错误: {e}")
        return False
        
    finally:
        if driver:
            print("🔄 关闭浏览器...")
            driver.quit()

def main():
    """主函数"""
    print("=" * 50)
    print("基本资料收集功能测试")
    print("=" * 50)
    
    success = test_basic_data_collection()
    
    print("\n" + "=" * 50)
    if success:
        print("✅ 测试成功！基本资料收集功能正常")
        print("💡 如果问卷结果仍然抓不到基本资料，请检查：")
        print("1. 是否使用了修复脚本 fix_basic_data_collection.js")
        print("2. 浏览器控制台是否有错误信息")
        print("3. 表单提交时是否正确调用了收集函数")
    else:
        print("❌ 测试失败！基本资料收集功能有问题")
        print("🔧 建议解决方案：")
        print("1. 检查问卷页面是否正常加载")
        print("2. 确认ChromeDriver版本兼容性")
        print("3. 查看浏览器控制台错误信息")
    print("=" * 50)

if __name__ == "__main__":
    main() 