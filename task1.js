window.onload = function () {
    var newWindow = window.open('', 'newWindow', 'width=300,height=600');
    
    newWindow.document.title = 'Нове вікно';

    setTimeout(function () { newWindow.close(); }, 3000);
}
