document.getElementById('copy-uid').addEventListener('click', function () {
    navigator.clipboard.writeText('2126668743');
    this.textContent = '已复制!';
    setTimeout(() => {
        this.textContent = '复制UID';
    }, 2000);
});
window.onload = function () {
    var button = document.getElementById("btn1");
    button.addEventListener("click", function () {
        alert("我不听(」＞＜)」");
    });
};