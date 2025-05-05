from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import pandas as pd
import random
import os

def get_random_user_agent(): #ну чтоб уэ точно
    agents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0'
    ]
    return random.choice(agents)

url = 'https://fbref.com/en/comps/30/Russian-Premier-League-Stats'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(user_agent=get_random_user_agent())
    page = context.new_page()
    page.goto(url, timeout=60000)
    page.wait_for_selector("table", state="attached", timeout=60000)
    html = page.content()
    browser.close()
soup = BeautifulSoup(html, "html.parser") #парсер
tables = soup.find_all('table')
print(f"Найдено таблиц: {len(tables)}")
output_dir = "rpl_tables" #папочка
os.makedirs(output_dir, exist_ok=True)
for i, table in enumerate(tables, 1): # сохр каждую таблицу
    try:
        df = pd.read_html(str(table))[0]
        filename = os.path.join(output_dir, f"table_{i}.csv")
        df.to_csv(filename, index=False, encoding="utf-8-sig")
        print(f"Сохранена: {filename}")
    except Exception as e:
        print(f"Ошибка при сохранении таблицы #{i}: {e}")

print("\n Всё топчик.")