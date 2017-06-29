using System;


namespace basic
{
    class Program
    {
        static void Main(string[] args)
        {


            //Console.WriteLine("Hello World !");
            /*
             * ===============================================[참조 형식 및 값 형식]==============================================================
             * 값 형식 : 기본적인 데이터 타입으로 스택으로 올라간다 (참조시 스택에 따로 메모리를 생성- 복사본 생성)
             * 참조 형식 : 클래스를 포함한 C#의 복잡한 데이터 형식은 대부분 참조 형식이다. (참조시 힙에 올라가며 복사가 아니라 같은 주소를 참조!!)
            RefTypeRectangle rect1 = new RefTypeRectangle();
            rect1.Width = 10;
            rect1.Height = 15;
            RefTypeRectangle rect2 = rect1;
            Console.WriteLine("Dimensions of rect2 are"+rect2.Width + " x "+rect2.Height);

            rect1.Width = 20;
            rect1.Height = 25;
            Console.WriteLine("Dimensions of rect2 are" + rect2.Width + " x " + rect2.Height);

            ValTypeRectangle rect3 = new ValTypeRectangle();
            //여기에서 Width와 Height의 값을 설정한다.
            rect3.Width = 10;
            rect3.Height = 15;
            ValTypeRectangle rect4 = rect3;
            Console.WriteLine("Dimensions of rect4 are" + rect4.Width + " x " + rect4.Height);
            rect3.Width = 20;
            rect3.Height = 25;
            Console.WriteLine("Dimensions of rect4 are" + rect4.Width + " x " + rect4.Height);
             * */


            /*
            * ===============================================[참조 형식 및 값 형식]==============================================================
              String은 참조 형식이다. 변수를 선언하면 힙에 선언이 된다.
              그래서 String 변수에 String 변수를 대입하면 매모리상의 동일한 문자열을 가리키는 두가지 참조가 발생한다.
              하지만 이 두개의 문자열 중에 하나를 변화시킨다면 다른 문자열은 변화시키지 않고 완전히 새로운 문자열 객체가 생성된다.
            */


            //string s1 = "A string";
            //string s2 = s1;
            //Console.WriteLine("s1 is " + s1);
            //Console.WriteLine("s2 is " + s2);

            //s1 = "Another string ";
            //Console.WriteLine("s1 is " + s1);
            //Console.WriteLine("s2 is " + s2);

            //===============================================[배열]==============================================================


            ////예술가의 이름들의 배열을 정의한다.
            //string[] Artists = { "Leonardo", "Monet", "Van Gogh", "Kell" };


            ////배열 element들을 알파벳 순서로 정렬한다.
            //Array.Sort(Artists);

            ////각 element에 대해서 반복문을 수행하고 이름을 출력한다.
            //for (int i = 0; i < Artists.Length; i++)
            //{
            //    Console.WriteLine(Artists[i]); ;
            //}

            ////배열을 내림차순으로 정렬한다.
            //Array.Reverse(Artists);

            ////각 element에 대해서 반복문을 수행하고 이름을 출력한다.
            //for (int i = 0; i < Artists.Length; i++)
            //{
            //    Console.WriteLine(Artists[i]); ;
            //}



            //===============================================[배열]==============================================================


            ////jagged 배열을 만든다.
            //int[][] a = new int[3][];
            //a[0] = new int[4];
            //a[1] = new int[3];
            //a[2] = new int[1];


            //string[][] Novelists = new string[3][];
            //Novelists[0] = new string[] { "Fyodor", "Mikhailvoich", "Dostoyevsky" };
            //Novelists[1] = new string[] { "James", "Augustine", "Joyce" };
            //Novelists[2] = new string[] { "Miguel", "de Cervantes", "Saavedra" };

            ////소트는 1차원 배열만 가능하다
            //Array.Sort(Novelists[0]);

            //int i;
            //for (i = 0; i<Novelists.GetLength(0); i++) {
            //    int j;
            //    for (j = 0; j < Novelists[i].GetLength(0); j++) { 
            //    //현재 이름을 출력한다.
            //        Console.WriteLine(Novelists[i][j]+" ");
            //    }
            //    //다음 소설가 이름은 새줄에서 시작한다.
            //    Console.WriteLine("\n");
            //}



            //===============================================[형식 변환]==============================================================

            byte value1 = 10;
            byte value2 = 23;
            int total; 

            // 두 바이트 값들이 더해지면 이것들은
            // 암시적으로 int로 변환된다. 그래서
            // 그결과를 byte로 다시 대입하는 것은
            // 오류를 발생시킨다.
            total = value1 + value2;

            Console.WriteLine(total);


            long val = 30000000000;
            int i = (int)val; // 유효하지 않은 캐스트, 최대 int 값은 2147483647

            Console.WriteLine(total);

        }
    }
}
