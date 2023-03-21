var Message: string;
class Cat {
  age: number;
  weight: number;
}

var myCat = new Cat();
myCat.age = 14;
myCat.weight = 23;

Message = '고양이는' + myCat.age + '살이고, 체중은' + myCat.weight + '입니다.';

alert(Message);
