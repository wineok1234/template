// 나만의 라면 레시피
// 1. 물을 500ml 끓인다.
// 2. 물이 끓으면, (<- 조건문) 스프를 넣는다.
// 3. 면을 넣고 3분간 끓인다.
// 4. 불을 끄고, 계란 1개와 파를 넣는다.
// 5. 그릇에 옮겨 담아서 김치와 함께 먹는다.
function makeRamyun(물양, 짜파) {
    let wateTemp = 20;
    let 재료 = ["계란", "대파", "양파", "김치", "마늘", "치즈"];
    // (계란, 대파, 양파, 김치, 마늘, 치즈);
    console.log(`물을 ${물양} 만큼 냄비에 넣는다.`);
    console.log("인덕션을 8로 올린다.");
    for (; wateTemp <= 100; wateTemp = wateTemp + 10) {
        console.log(`물온도가 ${wateTemp} 입니다.`);
    }
    if (짜파) {
        console.log("면을 넣는다. ");
        console.log("후레이크 넣는다. ");
    } else {
        console.log("스프를 넣는다. ");
        console.log("면을 넣는다. ");
    }
    for (let waitMin = 0; waitMin < 3; waitMin++) {
        console.log("라면을 익히고 있습니다......");
    }
    console.log("인덕션을 종료 합니다.");
    // for (let i = 0; i < 재료.length; i++) {
    //   console.log(`${재료[i]}을/를 넣습니다.(1)`);
    // }
    if (짜파) {
        console.log("물을 버린다.");
        console.log("분말 스프를 넣고 비빈다.");
    } else {
        for (const item of 재료) {
        console.log(`${item}을/를 넣습니다.(2)`);
        }
    }
    console.log("그릇에 옮겨 담아서 김치와 함께 먹는다.");
}
makeRamyun(450, false);