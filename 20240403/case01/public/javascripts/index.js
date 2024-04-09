const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const myDate = document.querySelector(".myDate");
const btnAddShow = document.querySelector(".btn-addShow"); //點擊計算機icon ， bsoffcanvas左側欄會出現
const bsOffcanvas = new bootstrap.Offcanvas('#inputArea');  //Bootstrap 的 Offcanvas 元件是一個側邊面板，可以在頁面的邊緣展開和收縮。它通常用於顯示側邊欄、選單或其他內容，這些內容在用戶需要時才顯示出來，以節省空間並提供更好的用戶體驗
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");
const btnSend = document.querySelector(".btn-send");
const form1 = document.querySelector("form");
const lists = document.querySelector(".lists");
const btnUpdate = document.querySelector(".btn-update");
const btnDel = document.querySelector(".btn-del")


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
	updateSet.classList.add("d-none");
	updateSet.classList.remove("d-flex");
	bsOffcanvas.show();
})
btnSend.addEventListener("click",()=>{
    form1.submit(); //送出表單
})
lists.addEventListener("click", e=>{
    // console.log(e.target);
    // console.log(e.target.closest(".list"));
    const clip = e.target.closest(".list");
    /*  將剛剛放在在 <div class="unit fs-6 list" title="<%=item.title%>"的屬性一一抓出來
    money="<%=item.money%>" 
    id="<%=item.id%>"
    sort="<%=item.sort%>"
    >*/
    // 點選該列消費，左側欄會直接呈現資料
    document.querySelector("input[name=title]").value = clip.getAttribute("title");
	document.querySelector("input[name=money]").value = clip.getAttribute("money");
    document.querySelector("input[name=id]").value = clip.getAttribute("id");
	document.querySelector("select").selectedIndex = clip.getAttribute("sort");

    updateSet.classList.add("d-flex");
	updateSet.classList.remove("d-none");

    newSet.classList.add("d-none");
	newSet.classList.remove("d-flex");
    bsOffcanvas.show();
})

//修改表單
btnUpdate.addEventListener("click",()=>{
    const url ="/expe";
    const formData = new FormData(form1);

    fetch(url,{
        method:"PUT",
        body:formData        
    }).then(response => response.json()).then(result =>{
        if(result.result === true){
            window.location.href = "/expe/d/" + myDate.value;
        }else{
            alert("修改錯誤")
        }
        console.log(result);
    }).catch(error =>{
        console.log(error)
    });
}) //response.json 解析json資料


// 刪除資料
btnDel.addEventListener("click",()=>{
    const url ="/expe";
    const formData = new FormData(form1);

    fetch(url,{
        method:"DELETE",
        body:formData        
    }).then(response => response.json()).then(result =>{
        if(result.result === true){
            window.location.href = "/expe/d/" + myDate.value;
        }else{
            alert("刪除錯誤")
        }
        console.log(result);
    }).catch(error =>{
        console.log(error)
    });
}) //response.json 解析json資料