// 載入express套件
const express = require('express')
const app = express()

// 載入 express-handlebars
const exphbs = require('express-handlebars')

// 連接埠號
const port = 3000

// 設定樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態檔案
app.use(express.static('public'))

// 處理請求和回應
app.get('/', (req, res) => {
  res.render('index', { title: '首頁' })
})

// 動態處理訪問的頁面的請求和回應
app.get('/:page', (req, res) => {
  const pages = ['about', 'portfolio', 'contact']
  // 將字串開頭變大寫，回傳指定範圍內的字串
  const capitalize = (str) => str[0].toUpperCase() + str.substring(1)

  // 判斷當前訪問的頁面是否存在，不存在就導回首頁
  if (pages.includes(req.params.page)) {
    res.render('index', { title: capitalize(req.params.page) })
  } else {
    res.render('index', { title: '首頁' })
  }
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})