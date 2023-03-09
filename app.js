// 載入express套件
const express = require('express')
const app = express()

// 載入 express-handlebars
const exphbs = require('express-handlebars')

// 建立變數，當參數來帶入渲染的頁面
const navbar = [
  {
    title: '首頁'
  },
  {
    title: 'About',
    activeAbout: 'active'
  },
  {
    title: 'Portfolio',
    activePortfolio: 'active'
  },
  {
    title: 'Contact',
    activeContact: 'active'
  }
]

// 連接埠號
const port = 3000

// 設定樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態檔案
app.use(express.static('public'))

// 處理請求和回應
app.get('/', (req, res) => {
  res.render('index', navbar[0])
})

// 處理個別頁面的請求和回應
app.get('/about', (req, res) => {
  res.render('index', navbar[1])
})

app.get('/portfolio', (req, res) => {
  res.render('index', navbar[2])
})

app.get('/contact', (req, res) => {
  res.render('index', navbar[3])
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})