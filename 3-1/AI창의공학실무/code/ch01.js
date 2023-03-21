// ## greedy 알고리즘
// cho1.md

// 거스름돈
var n = 1260;

// 거스름돈을 걸러주기 위해 사용된 동전의 수를 변수 count에 저장
var count = 0;

// 동전의 종류를 큰 것부터 작은 것 순으로 리스트에 저장
var coin_types = [500, 100, 50, 10];

// 리스트 coin_types에 저장된 각 동전에 대해서 다음을 반복
/*
    for coin in coin_types :
    n / coin
*/
for (let coin of coin_types) {
  // 나눈 몫이 현재 coin으로 거슬러 줄 수 있는 최대 수
  count += n / coin;
  n %= coin;
  if (n == 0) break;
}
console.log(count);

// 예시
function change(n) {
  let count = 0;

  const array = [500, 100, 50, 10];

  for (let coin of array) {
    count += Math.floor(n / coin); //동전의 개수

    n -= coin * Math.floor(n / coin); // 남은 돈 계산
  }

  return count;
}

// ch02
/*
1. n, m, k 입력받아 저장
2. n개의 수를 입력받아 리스트에 저장
3. 리스트를 정렬해서 가장 큰 수와 두 번째 큰 수를 각각 first, second에 저장
4. m번 더하기 위해 아래를 반복
  - m이 0이면 반복종료
  - 가장 큰 수를 k번 더하고 : 더할때 m을 1씩 감소. m이 0이면 반복종료
  - m이 0이면 반복종료
  - 두 번째 큰 수를 1번 더한다. : m을 1 감소
*/
let n = '';
let m = '';
let k = '';
