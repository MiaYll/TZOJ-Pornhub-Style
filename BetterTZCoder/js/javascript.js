document.getElementById("nav").style.background = "#212121";
document.getElementById("nav").style.borderTop = "#1px dashed #000";
document.getElementById("nav").style.borderRadius = "0";

if(document.getElementsByName("searchForm").length != 0){
    document.getElementsByName("searchForm")[0].style.color = "#FFFFFF";
}


var classproblem = document.getElementsByClassName("problem_todo");
for(i = 0;i<classproblem.length;i++){
    classproblem[i].style.background = "#212121";
    classproblem[i].style.color = "#FFFFFF";
    classproblem[i].style.back = "#FFFFFF";
    classproblem[i].style.border = "1px solid #FFFFFF"
};

var classproblemdone = document.getElementsByClassName("problem_prog_done");
for(i = 0;i<classproblemdone.length;i++){
    classproblemdone[i].style.background = "#212121";
    classproblemdone[i].style.color = "#f7971e";
    classproblemdone[i].style.border = "1px solid #FFFFFF"
};

var tables = document.getElementsByTagName("TABLE");
var tds = document.getElementsByTagName("TD");
var ths = document.getElementsByTagName("TH");
var h2s = document.getElementsByTagName("H2");
var as = document.getElementsByTagName("A");
document.getElementsByTagName("body")[0].style.background = "#000000";
for(i = 0;i<tables.length;i++){
    tables[i].style.background = "#000000";
};
for(i = 0;i<tds.length;i++){
    if(tds[i].className=="ODDLINE" || tds[i].className=="EVENLINE"){
        tds[i].style.background = "#000000";
        tds[i].style.color = "#FFFFFF";
        continue;
    }
    tds[i].style.background = "#000000";
};
for(i = 0;i<ths.length;i++){
    ths[i].style.color = "#FFFFFF";
    ths[i].style.background = "#000000";
};
for(i = 0;i<h2s.length;i++){
    h2s[i].style.background = "#000000";
};
for(i = 0;i<as.length;i++){
    if(as[i].parentElement.className == "tag"){
        as[i].style.color = "#000000";
        continue;
    }
    as[i].style.color = "#FFFFFF";
};

var tags = document.getElementsByClassName("tag");
for(i = 0;i<tags.length;i++){
    tags[i].style.border = "0px";
    tags[i].style.background = "#f7971e";
    tags[i].style.color = "#000000";
};

var imgs=document.getElementsByTagName("img");
for(i = 0;i<imgs.length;i++){
    if(imgs[i].src == "http://tzcoder.cn/acmhome/images/logo3.jpg"){
        imgs[i].src="https://i.loli.net/2021/01/26/DoJUHr5NpVgnhk6.png";
    }
};