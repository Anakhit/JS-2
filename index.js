// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;
// function sumOfPositive(...numbers){
//     let sum = 0;
//     for(let items of numbers){
//         if (items > 0){
//             sum= sum + items;
//         }
//     }
//     console.log(sum);
//     }

// sumOfPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9
// function sumOf(...numbers){
//     let sum=0;
//     for (let items of numbers){
//         sum= sum + items;
//     }
//     console.log(sum);
// }
// sumOf(10, 50, 6, 7, 8, 11, 6, 3, 9);



//   let user = {
//         firstname: 'giorgi',
//         lastname: 'saakadze',
//         age: 32,
//         isloggedin: true
//       }
// function fullName(){
  
//         if (user.isloggedin == true){
//             console.log(user.firstname + " " + user.lastname);
//         }else{
//             console.log("false");
//         }
//     }

//     fullName();
	
// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;


// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// function max(...numbers){
    
//     console.log(Math.max(...numbers));
        
// }

// max(2,5,7);

// მოცემულია მასივი let array = [1,2,4,10,34,5,7,87]
// გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;

// let array = [1,2,4,10,34,5,7,87];
// for (items of array){
//     if (items > 0 && items < 10){
//         console.log(items);
//     }
// }

// მოცემულია მასივი
// Let numbers =[1,2,3,4,5,6,7,8,9,10]
// ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი
// let numbers =[1,2,3,4,5,6,7,8,9,10];
// for (let item of numbers){
//     if (item == 5){
//         break;
//     }
//     console.log(item);
// }
