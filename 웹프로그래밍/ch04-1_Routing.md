# 라우팅정리

## 프로젝트 생성(경로: ./code_laravel/route_view_test)
  - curl -s https:/laravel.build/route_view_test | bash

## Routing(라우팅) 방법
- routes/web.php : web서비스 관련
- routes/api.php : api서비스 관련

- Route::HTTP요청메서드(
  'HTTP요청URL',
  클로저 or 컨트롤러 or 액션
  )

```php
// routes/web.php 내 추가
Route::get(
    'home',
    function() { // 클로저의 예시
      return "안녕하세요";
    }
);

// 2-1
Route::get(
    'home/{name}',
    function($name) { // 클로저의 예시
      return "안녕하세요? 저는 " . $name . "입니다";
    }
);
// 2-2
Route::get(
    'home/{name?}',
    function($name = "test") { // 클로저의 예시
      return "안녕하세요? 저는 " . $name . "입니다";
    }
);

// 2-3-2
Route::get(
    'home/{name?}',
    function($name = "test") { // 클로저의 예시
      return "안녕하세요? 저는 " . $name . "입니다";
    }
)-> where('name', '[0-9a-zA-Z@]{5}');

// 3
Route::get(
    'home/{name?}',
    [ 'as'=> 'testhome',
        function($name = "test") { // 클로저의 예시
            return "안녕하세요? 저는 " . $name . "입니다";
        }
    ]
);

Route::get(
    'mytesthome/{param?}',
    function($param='JIT'){
      return redirect(route('testhome', ['name' => $param]));
      //redirect(), route() : 헬퍼함수
    }
);
```

- 'HTTP요청URL'의 지정방법
  1) '문자열1' or '문자열1/문자열2'

  2) 파라미터 지정

    2-1) '문자열1/{param}': function($param){} = 클로저
        // param이라는 문자는 같아야함!

    2-2) '문자열1/{param?}': function($param = '디폴트값'){} 
        // param에 값이 없는 경우에 2-1에서는 에러가 남.. -> 2-2에서는 값이 없는 경우 디폴트 값으로 반환

    2-3) 정규표현식으로 지정하기

      2-3-1) Route::patten('param','정규표현식');

      2-3-2) Route::get('home/{param?}', function($param = "디폴트값"){})
        -> where('param','정규표현식');

  3) 라우팅에 이름부여
    Route::get(
      'HTTP요청URL',
      [
        'as'=>'지정하려는라우트이름',
        클로저 or 컨트롤러 or 액션
      ]
    )

## Response 관련
```php
// html을 리턴 + view와 소스코드가 분리되지않아서 코드가 매우 더러움
Route::get(
    'home/html',
    [ 'as'=> 'homehtml',
        function() { // 클로저의 예시
            $html = <<<HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>라라벨 Heredoc 테스트</h1>
    <h2>단디 해보자</h2>
</body>
</html>
HTML;
            return $html;
        }
    ]
);
```

1) Heredoc사용
2) Response::json()
   reponse()
   view(): blade 처리
   View::make()
3) view쪽으로 데이터 전달하기
```php
//  - blade파일 준비: view / task / view.blade.php

//  - 라우팅 준비
Route::get(
    'task/view/{param?}',
    function($param='default'){
        
     $task = [ // 여기에서 DB 처리
     // DB데이터의 예시..
        'task_name'=> '오늘 할일 1',
        'due_date'=> '2022-10-20 13:00:00',
        'trans_data'=> $param,
     ];
        return view("task.view", compact('task'));
    }
);
```
  3-1) view('블레이드파일명', compact('변수명')); // 변수명에는 $제외
  3-2) view('블레이드파일명')-> with('변수명1' $변수명2); // 변수명이 같지 않아도 됨