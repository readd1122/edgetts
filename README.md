# 供特教師生使用之語音報讀系統

## 來源

本語音報讀系統改寫自 https://github.com/wxxxcxx/ms-ra-forwarder

## 部署

報讀系統僅讀取非圖檔格式之PDF，請参考下列部署方式。

### 部署到 Vercel

教學影片： https://youtu.be/h-Rr_x-fEHk?feature=shared

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/flysupers-projects/import?s=https%3A%2F%2Fgithub.com%2Fflysuper1122%2Fedgetts&hasTrialAvailable=1&showOptionalTeamCreation=false&project-name=edgetts&framework=other&totalProjects=1&remainingProjects=1)</p>
運行Demo網址： https://edgetts-lovat.vercel.app/ (本系統受限於Vercel次數限制，請自行部署於自己的Github+Vercel。)</p>
1.本系統可以開啟本地PDF檔案，也可以網址後面加  「？googlesheetid=試算表的id&file=雲端硬碟pdf檔的id」 。  <br>
例： https://edgetts-lovat.vercel.app/?googlesheetid=1LX0cOdhO7dI_9zYBTs3MVKz5qEAF4LwDege0OHzghyc&file=17miE5mg1_GPlerNur0eg0BE_6Y3dC1tu </p>
2.googlesheet和googledrive檔案要開放知道連結的使用者檢視權。</p>
3.因為AI有些語詞發音錯誤，可用googlesheet過濾，試算表第一欄為原語詞，第二欄為替換語詞。<br>
例: https://docs.google.com/spreadsheets/d/1LX0cOdhO7dI_9zYBTs3MVKz5qEAF4LwDege0OHzghyc/edit?usp=drive_link </p>
4.雲端硬碟id支援是使用GAS代理伺服器，為分散流量請自行部屬，將edgetts/public/index.html內第410行及public/localvoice.html 內第395行換成自己的GAS網址。</p>
代理伺服器源碼： https://script.google.com/home/projects/1xBf9RBw31tIQFqBuniN6Sm6-sOUitwNnjy2WVKf9fAWMzn5FkuZIWHW8/edit?pli=1</p>
5.如果想自動讀取雲端硬碟檔案形成公告用檔案列表可至 https://script.google.com/d/1j9yP29FGPiBKRXhmG_a5zy_mQwEtnL4wfFrFW3-Mlv96diUtsvprQ7BW/edit?usp=drive_link 複製GAS原始碼，修改參數部署後可供使用。

### 部署到 Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### 校內桌機PHP安裝版

https://www.dfes.ntpc.edu.tw/p/404-1000-8135.php<br>
這個有完整的管理介面。

### 瀏覽器內建發音靜態網頁

下載後可部署於黑快馬的形象頁 https://github.com/flysuper1122/edgetts/blob/master/public/localvoice.html



