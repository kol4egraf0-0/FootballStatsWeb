import pandas as pd

df = pd.read_csv('stats_playing_time.csv')
columns_to_keep = ['Rk', 'Player', 'Nation', 'Pos', 'Squad', 'Age', 'MP', 'Min', 'Starts', 'Compl', 'Subs', 'unSub']
df_clean = df[columns_to_keep]
df_clean.to_csv('stats_playing_time_clean.csv', index=False, encoding='utf-8-sig')

print("удалено!")