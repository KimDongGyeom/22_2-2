// enum SEASONS {
//   SPRING,
//   SUMMER,
//   AUTUMN,
//   WINTER,
// }

/*
// javascript로 구현
var SEASONS;
(function (SEASONS) {
  SEASONS[(SEASONS['SPRING'] = 0)] = 'SPRING';
  SEASONS[(SEASONS['SUMMER'] = 1)] = 'SUMMER';
  SEASONS[(SEASONS['AUTUMN'] = 2)] = 'AUTUMN';
  SEASONS[(SEASONS['WINTER'] = 3)] = 'WINTER';
});
*/

// enum 열겨형명{ 열거요소1, 열거요소2, 열거요소3, ... , 열거요소n }
//SPRING:0, SUMMER:1, AUTUMN:2, WINTER:3
// alert(SEASONS.AUTUMN);

// 차례로 10, 11, 12, 13
/* enum SEASONS {
  SPRING = 10,
  SUMMER,
  AUTUMN,
  WINTER,
}
 */

enum SEASONS {
  SPRING = 1,
  SUMMER = 2,
  AUTUMN = 4,
  WINTER = 8,
} // （1）
// 0b0001, ob0010, 0b0100, 0b1000
var season, season1: SEASONS;
season = SEASONS.SPRING + SEASONS.SUMMER; // （2）
// 0b0001 + ob0010 -> 0b0011
// （3）
season1 = SEASONS.SUMMER | SEASONS.WINTER; // |, &, >>, << 비트연산자
// 0b0010 | ob1000 = 0b1010(3)

// 사용자 설정 옵션 1~7개가 있을 때 사람들마다 다르게 사용할 수 있음
switch (season) {
  case SEASONS.SPRING:
    alert('春物です');
    break;
  case SEASONS.SPRING + SEASONS.SUMMER:
    alert('春夏物です');
    break;
  case SEASONS.SUMMER | SEASONS.WINTER:
    alert('여름겨울です');
    break;
  default:
    alert('秋または冬にも使えます');
}
alert(SEASONS.AUTUMN);
