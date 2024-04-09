const cols = document.querySelectorAll(".col");
cols.forEach(col => {
  col.addEventListener("click", function(){
    this.classList.toggle("active");
  })
})