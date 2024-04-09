const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const myDate = document.querySelector(".myDate");
const btnAddShow = document.querySelector(".btn-addShow"); //點擊計算機icon ， bsoffcanvas左側欄會出現
const bsOffcanvas = new bootstrap.Offcanvas('#inputArea');  //Bootstrap 的 Offcanvas 元件是一個側邊面板，可以在頁面的邊緣展開和收縮。它通常用於顯示側邊欄、選單或其他內容，這些內容在用戶需要時才顯示出來，以節省空間並提供更好的用戶體驗
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");

myDate.addEventListener("change", e => {
    const date = e.currentTarget.value;
    window.location.href = "/expe/d/"+date; //將瀏覽器的當前位置重新定向到指定的 URL。
})

btnPrevDate.addEventListener("click", () => {
    const date = new Date(myDate.value);
    date.setDate(date.getDate() - 1);
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})

btnNextDate.addEventListener("click", () => {
    const date = new Date(myDate.value);
    date.setDate(date.getDate() + 1);
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})


btnAddShow.addEventListener("click",(e)=>{
	document.querySelector("input[name=title]").value = ""; //"input[name=title]" 是 CSS 選擇器，指定了要選擇的元素。它選擇了第一個具有 name 屬性為 "title" 的 <input> 元素。
	document.querySelector("input[name=money]").value = "";
	document.querySelector("input[name=id]").value = "";
	document.querySelector("select").selectedIndex = 0;
	newSet.classList.add("d-flex");
	newSet.classList.remove("d-none");
	// updateSet.classList.add("d-none");
	updateSet.classList.remove("d-flex");
	bsOffcanvas.show();
})
