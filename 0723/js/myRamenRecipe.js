/* 나만의 라면 레시피
1. 물을 400ml 끓인다.
2. 건더기 스프를 먼저 넣는다.
2. 물이 끓으면, (조건문) 국물 스프와 면을 넣는다.
4. 계란과 치즈를 넣고 적당히 끓인다.
5. 그릇에 옮겨 담아서 김치와 함께 먹는다.
*/ 

function makeRamen(){
    let waterTemp = 20;
    let egg = true;
    let cheese = true;

    console.log("물을 400ml을 냄비에 넣습니다.");
    console.log("가스레인지 불을 킵니다.");
    console.log("건더기 스프를 넣습니다.");
    for(; waterTemp<=100; waterTemp = waterTemp + 20){
        console.log(`물 온도가 ${waterTemp} 입니다.`);
    }
    if (waterTemp >= 100){
        //물이 끓으면
        console.log("국물 스프를 넣습니다.");
        console.log("면을 넣습니다.");
    }
    if(egg){
        console.log("계란을 1개 넣습니다.");
    }else{
        console.log("아쉽지만, 계란을 넣지 않습니다.");
    }
    if(cheese){
        console.log("치즈를 1개 넣습니다.");
    }else{
        console.log("아쉽지만, 치즈를 넣지 않습니다.");
    }

    for(let waitMin = 0; waitMin < 3; waitMin++){
        console.log("라면을 익히고 있습니다....");
    }
    console.log("불을 끕니다.");
    console.log("그릇에 옮겨 담고, 김치와 함께 먹습니다.");
}

makeRamen();