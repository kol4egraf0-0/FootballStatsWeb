import pandas as pd
from sqlalchemy import create_engine

DB_USER = ''
DB_PASSWORD = '' #ваш пароль
DB_HOST = 'localhost'  
DB_PORT = '' #ваш порт     
DB_NAME = 'rpl'
TABLE_NAME = 'rpl_players_time'  

df = pd.read_csv('stats_playing_time_clean.csv')

engine = create_engine(f'postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}')

df.to_sql(
    name=TABLE_NAME,
    con=engine,
    if_exists='replace',  
    index=False           
)

print(f"Данные успешно загружены в таблицу {TABLE_NAME}!")