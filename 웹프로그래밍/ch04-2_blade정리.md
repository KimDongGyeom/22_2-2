# blade 문법 정리: blade(칼날)
라라벨의 뷰 디폴트 템플릿 엔진
- resources/views폴더 내 ~~~.blade.php로 작성

1. 주석방법: {{-- 내용 --}}
2. 변수 처리:
  기존 php: <?=$변수명 ?>
    -> 문제점: XSS (Cross-Site Scripting): 싸이트간 스크립팅 공격
      * 방지법
        1) 블레이드 처리 {{ $변수명 }}
        2) htmlentities(변수명): 세니타이징(Sanitizing: < - &lt;, > - &gt;)

  => blade(블레이드): {{ $변수명 }} and {{ 함수명() }}
    새니타이징 안하고 출력하기: {!! $변수명 !!}

@ + 문자열: Directives (지시자)
3. 제어문
  3.1. 조건문
    @if(조건)
    @else
    @elseif

    @if(조건)
    @elseif(조건)
    @else
    @elseif

    @unless(조건) // === @if(! 조건)
    @endunless
    // unless: ~하지 않는다면

3.1. 반복문
* @foreach,    @for,    @while     @forelse
* @endforeach, @endfor, @endwhile, @endforelse

@forelse($tasks as %task)
  <li>{{$task['name']}}</li>
@empty
  <li>할 일이 아무것도 없음</li>
@endforelse

4. Layout 처리: 템플릿 상속
- DRY(Don't Repeat Yourself): 코딩 시 중복 제거
@yield('이름1'): 양보, 상속할 파일에게 구현 양보
  - <title>@yield('title', '레이아웃 연습')</title>
  - 'title'값이 없는 경우 , 뒤의 '레이아웃 연습'의 문자열을 사용

@section('이름1')
  양보한 부분에 대한 구현
@endsection or @stop

@extends

@include: 다른 곳의 ~~.blade.php파일을 현재 파일에 포함시킴
  - view > layouts > footer.blade.php 에서 구현한 코드를 가져와서 사용할 수 있음
  - <div>
      @include('layouts.footer')
    </div>

