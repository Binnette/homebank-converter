# 💳 homebank-converter #

## 🚀 Usage
* [🌐 homebank-converter (github.io)](http://binnette.github.io/homebank-converter/)

### 📝 Example
1. 🌍 Go on PayPal web site  
2. 📜 Go to your PayPal history  
3. ⬇️ Download your payment history (csv or txt file)  
4. 💻 Go on homebank-converter application  
5. 🏦 Choose PayPal  
6. 📂 Then select your PayPal file  
7. 🔄 Click on Convert  
8. 📊 You will get a csv file readable by Homebank  
9. 🏠 Run Homebank  
10. 📁 Open menu File, then Import...  
11. 📑 Select your converted file  
12. ✅ Finally follow Homebank wizard  

🔗 Homebank: https://www.gethomebank.org

## ❓ What
homebank-converter is a web app that aims to convert export bank files to compatible Homebank csv.  
✨ It won't record any data, track events or whatever.  
🔍 It will try to guess "paymode" by analyzing the "memo" of your files.

### 💳 Paymode
| 🔢 Paymode id | 🏷️ Paymode name       |
| ------------- | --------------------- |
| 1             | 💳 Credit card        |
| 2             | 🧾 Cheque             |
| 3             | 💵 Cash               |
| 4             | 🔄 Transfer           |
| 5             | 🔁 Internal transfer  |
| 6             | 🏧 Debit card         |
| 7             | 📆 Standing order     |
| 8             | 🌐 Electronic payment |
| 9             | 📥 Deposit            |
| 10            | 💸 FI fee             |

📂 To see supported memo, open file: [labelAndPaymode.json](/data/labelAndPaymode.json)

### 📂 Convert export bank file
Supported files:

| 🏦 Bank name          | 📄 File formats |
| --------------------- | --------------- |
| Banque Postale        | csv, tsv        |
| BNP Paribas Fortis    | csv             |
| Boobank               | csv             |
| PayPal                | csv, txt        |

### 🧹 Optimize xhb file
Optimize xhb file by removing useless spaces.

## 🤔 Why
Because your bank doesn't export files compatible with Homebank 🙂

## ⚙️ How
This application uses Html/JavaScript/CSS and is under the terms of the MIT licence.

## 👩‍💻 Who
Developer(s):

* 👤 Binnette <binnette [at] gmail /dot/ com>  
  * 🔗 https://github.com/Binnette  
  * 🔗 https://bitbucket.org/Binnette  

## 🧪 Unit tests
Run unit tests:

1. 🖥️ Open the application  
2. ℹ️ Go on about tab  
3. ▶️ Click on button run tests  

## 🗺️ Roadmap
1. ☑️ Add a checkbox "try to determine paymode"  
2. 🌍 Translate the application  
3. 📏 Manage different end of line  
4. 🗑️ Replace rimraf by del-cli  