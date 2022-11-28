# 코틀린(Kotlin)의 정보:
  * 파일의 확장자: kt
  * 파일 이름과 클래스명이 동일하지 않아도 됨.
  * 한 파일 안에 두 개 이상의 클래스를 선언가능.
  * 클래스에 소속되지 않는 함수와 변수를 선언가능.
    - Top level functions and variables
  * 문장의 끝에 ;을 사용하지 않음.
  * NULL이 엄격하게 관리됨.
    - 변수 선언 후 타입 지정 할때 ?의 여부로 결정

# package명 작성 협약
  * 소문자 사용
  * _는 사용하지 않음.
  * 낙타표기법(camelCase)
  * 상수 & 최상위 레벨 값(val)의 이름: 대문자 & _를 사용
  * 싱글톤 객체를 참조하는 변수: 첫글자를 대문자로하는 낙타 표기법(CamelCase)으로 사용

# 권장 클래스 레이아웃 순서
  * Property declarations and initializer blocks
  * Secondary constructors
  * Method declarations
  * Companion object

# 콘솔 프로그램의 진입접은 main 함수(Android / Framework의 경우 각 framework의 동작에 따름)
  fun main() {
    println("Hello world!")
  }

# 주석
  * JAVA의 주석의 지원
    - //
    - /* */
  * /* */ 주석의 경우 중첩이 가능..

# 타입의 비교연산자(JAVA의 개념과 다름..)
  * == : 같이 같은가?
  * ===: 타입의 주소가 같은가?

# 함수 정의 방법:
  * fun 키워드를 사용
  * 함수의 return type은 파라미터 정의 뒤에 :와 함께 적음.
  <!-- 함수의 예시 -->
  fun sum(a: int, b:int): int {
    return a + b
  }

  * 함수의 body로 *expression*을 사용할 수 있음.
  =>
  fun sum(a: int, b:int) = a + b

  * 값을 반환하지 않는 경우 return type을 Unit로 정의하거나 생략가능
  * 함수에 {}를 무조건 적어야하는 것은 아님

# 표현식(Expression) & 서술문(Statement)
  * 표현식: 식, 수식, 표현식
    - Statement의 부분 집합
    - 평가(Evaluation)를 통해 하나의 값이 되는 코드 - 수학연산, 함수 호출 등..
      * 평가과정: 사칙연산 / 비교(true / false) / 변수 / 함수 호출(return 한 값) 등 계산을 걸치는 모든 과정
  * 서술문: 진술, 서술, 서술문
    - 실행 가능한(Executable)최소의 독립적인 코드
    - for문과 같은 제어문 등이 포함

# 변수 선언 val(values) / var(variables)
  * 값 val(values): 한 번만 할당 가능
    - 선언 후 바로 할당 시 type은 생략가능.
  * 변수 var(variables): 여러 번 값 할당 가능.

  * val / var은 null을 허용하지 않음..
    => null허용방법: 변수타입?
      * 위와 같이 ?를 사용하여 표현 / 아래 변수 선언 방법의 예시로 확인..

  * 변수 선언방법:
    - val/var 변수명: 변수타입 = 할당할 값
  <!-- 변수 선언 예시 -->
  class Address {
    var name: String = "Holmes, Serlock"
    var street: String = "Baker"
    var city: String = "London"
      // String(변수타입)? 을 사용해 null값 허용
    var state: String? = null
    var zip: String = "123456"
  }

# null safety
  1) <!-- if문을 사용한 null 체크 -->
    val l = if (b != null) b.length else -1
  2) <!-- ?연산자를 이용한 안전한 멤버 함수 사용 -->
    val b: String? = null
    println(b?.length)
  3) Not null assertion operator
    <!-- null허용 타입을 null이 아닌 타입으로 변환해 반환 -->
    fun main() {
      var b:String? = "ABC"
      var C:String? = b!!
      print(c)
    } // 만약 null일 경우 예외(Exception) 발생


<!--    pdf      날짜       페이지 -->
<!-- first pdf 9/8 02:53 page: 17/34 -->