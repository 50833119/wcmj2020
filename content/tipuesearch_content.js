var tipuesearch = {"pages": [{'title': '網管', 'text': 'W2 \n 建網站 \n 此內容管理系統以\xa0 https:..github.com.mdecourse.cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n \n 在 github 建立倉儲, git clone 到近端 \n 參考 https:..github.com.mdecourse.newcms , 加入除了 cmsimde 目錄外的所有內容 \n \n 以 git submodule add\xa0 https:..github.com.mdecourse.cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n \n 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n \n git clone --recurse-submodules\xa0 https:..github.com.mdecourse.newcms.git \n W3 \n 筆記 \n terminology 專業術語、particular 特別、technical 技術、application 應用、 \n software 軟體、hardware 硬體、firmwarre 韌體、machine language 機器語言、 \n URL:Uniform Resourse Locator\xa0 統一資源定位、command wundow 命令視窗、submodule 子模組 \n 程式令: \n Y:←指y槽 Y:\\\xa0 \xa0←表示Y槽的root根目錄 > 為回應符號(prormptsign)\xa0 \\ 為blackslash 反斜線 dir為顯示目錄內容的指令 cd tmp 表示change directory 到指定的目錄 git為分散式版次管理的指令名稱 git clone表示要使用git對遠端的倉儲進行clone。 \n W4 \n portable 可攜、Assembly 執行機器速度快但對硬體的相容性差、objective -c \n →開發iphone的前一代程式、compile 編譯、interpret 解譯、unix電腦系統的一種、shell 殼、graphics 圖形、device 物件、interface 介面 \n ps.c++ →加入物件功能的C \n \n W6 \n 大致講解↓的用法和規格 \n portable obs\xa0→直播軟體 \n meet.google.com →google 的視訊軟體 \n \xa0 \n W7 \n abunta→遠端操控電腦、asscii 美國標準交換資訊碼。\xa0 \n tmp>wcmj2020>init.py\xa0 \xa0更改網頁標題 \n W8 \n 網站push的步驟 \n 1.先把網站切成靜態Home \n 2.git add空格.\xa0 \xa0→意思是跟電腦說現在要讀的東西 \n 3.git comit -m"add w□" →跟電腦說你要讀的東西是什麼 \n 4.git push →推上動態網頁 \n 讓我們實作一次分組，弄 meet.google.com 的實際操作。好讓下次上課可以線上上課。 \n', 'tags': '', 'url': '網管.html'}]};