function show_result(){
    let t=document.querySelector("#t").value;
    let e=document.querySelector("#e").value;
    let m=document.querySelector("#m").value;
    let s=document.querySelector("#s").value;
    let ss=document.querySelector("#ss").value;

    let to = parseFloat(t)+parseFloat(e)+parseFloat(m)+parseFloat(s)+parseFloat(ss);
    let per = (to*100)/500;

    if(per>=90){
        document.querySelector(".gra").innerHTML="A+";
    }
    else if((per>80)&&(per<89)){
        document.querySelector(".gra").innerHTML="A";
    }
    else if((per>70)&&(per<79)){
        document.querySelector(".gra").innerHTML="B";
    }
    else if((per>60)&&(per<69)){
        document.querySelector(".gra").innerHTML="C";
    }
    else if((per>50)&&(per<59)){
        document.querySelector(".gra").innerHTML="D";
    }
    else if(per<50){
        document.querySelector(".gra").innerHTML="F";
    }


    document.querySelector(".to").innerHTML=to;
    document.querySelector(".per").innerHTML=per;

    if(per>50){
        document.querySelector(".result h2").innerHTML="You are Pass";
    }
    else{
        document.querySelector(".result h2").innerHTML="You are Fail";
    }

}