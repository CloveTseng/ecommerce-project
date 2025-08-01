# 六角學院 2025 切版直播班 - VibeVerse 鞋子電商

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-08-01%20193549.png?alt=media&token=13cccbd3-6105-44b4-aef4-5546bf5a5c0a" alt="專案封面圖片" width="700">
</p>

<p align="center">
  一個使用 Next.js 和 Sass 打造的現代化鞋子電商網站
</p>

---

## 專案簡介 (Introduction)

此專案的設計稿源於六角學院的「切版任務」，原始目標是完成靜態頁面的切版。為了深入學習與實踐業界主流框架，我主動選擇使用 Next.js (App Router) 進行重構與功能開發，將其從一個純粹的切版練習，擴展為一個具有動態路由與元件化架構的現代化網站應用。

-   **線上預覽 Demo:** [https://ecommerce-project](https://ecommerce-project-alpha-jade.vercel.app/)

## 專案特色 (Features)

*   **響應式設計 (RWD)**：在桌面、平板、手機上皆有最佳瀏覽體驗。
*   **產品瀏覽**：提供產品列表頁，並可點擊進入產品詳細頁面。
*   **動態路由**：為每一件商品產生獨立的商品頁面 (`/products/[slug]`)。
*   **元件化開發**：將 UI 切割為可重用的 React 元件，提高開發效率與可維護性。
*   **Bento Grid 版面**：首頁採用流行的 Bento UI 設計，展示多樣化的內容。

## 如何開始 (Getting Started)

請先確認你的開發環境中已安裝 [Node.js](https://nodejs.org/) (建議版本 v18.0 以上) 和 npm。

1.  **複製專案**
    ```bash
    git clone https://github.com/your-username/ecommerce-project.git
    ```

2.  **進入專案目錄**
    ```bash
    cd ecommerce-project
    ```

3.  **安裝依賴套件**
    ```bash
    npm install
    ```

4.  **啟動開發伺服器**
    ```bash
    npm run dev
    ```

5.  在瀏覽器開啟 `http://localhost:3000` 即可看到本地運行的網站。

## 使用技術 (Technologies Used)

*   **框架 (Framework)**: [Next.js](https://nextjs.org/) (App Router)
*   **樣式 (Styling)**: [Sass/SCSS](https://sass-lang.com/)
*   **程式語言 (Language)**: JavaScript (ES6+)
*   **程式碼檢查 (Linting)**: [ESLint](https://eslint.org/)

## 專案結構 (Project Structure)

```
/
|-- app/                  # 主要頁面與路由
|   |-- page.js           # 首頁
|   |-- products/         # 產品相關頁面
|   |   |-- page.js       # 產品列表頁
|   |   |-- [slug]/       # 動態產品路由
|   |       |-- page.js   # 產品詳細頁
|   |-- story/            # 品牌故事頁
|   |-- layout.js         # 主要版面佈局
|
|-- components/           # 可重用 React 元件
|   |-- Breadcrumb.js
|   |-- Button.js
|   |-- ColorPickerCard.js
|   |-- IndexIdeaBento.js # 首頁 Bento Grid
|   |-- Pagination.js
|   |-- ProductCard.js
|   |-- ProductGallery.js # 商品頁輪播圖
|   |-- SizePickerButton.js
|
|-- hooks/                # 自定義 Hooks
|   |-- useMediaQuery.js  # 偵測螢幕寬度
|
|-- lib/                  # 資料或輔助函式
|   |-- data.js           # 模擬商品資料
|
|-- styles/               # 全域與元件樣式
|   |-- globals.scss      # 全域樣式
|   |-- _variables.scss   # 樣式變數
|   |-- ... (其他 SCSS Partials)
|
|-- public/               # 靜態資源 (圖片, SVG)
```

## 主要使用的套件 (Packages)

| 套件名稱                                                     | 用途                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [Next Google Fonts](https://fonts.google.com/)               | 引入網站字體                       |
| [React Icons](https://react-icons.github.io/react-icons/)    | 提供豐富的 SVG Icon 元件           |
| [Swiper.js](https://swiperjs.com/)                           | 處理商品內頁的圖片輪播             |

## 主要使用的 Hooks

*   `useState`: 管理元件內部狀態 (e.g., 顏色、尺寸選擇)。
*   `useEffect`: 處理副作用 (e.g., 首次渲染時獲取資料)。
*   `useMediaQuery`: 自定義 Hook，用於實現響應式設計的邏輯。
