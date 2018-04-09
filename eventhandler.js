
function getAllPElems() {
    var allP = document.getElementsByTagName('p');
    var num = allP.length;
    alert('there are ' + num + ' paragraph on this page');
}

function div1() {
    var div1 = document.getElementById('one');
    var div1P = div1.getElementsByTagName('p');
    var num = div1P.length;
    alert('there are ' + num + ' paragraph tags in div one')
}
         
function div2() {
    var div2 = document.getElementById('two');
    var div2P = div2.getElementsByTagName('p');
    var num = div2P.length;
    alert('there are ' + num + ' paragraph tags in div two.')
}
