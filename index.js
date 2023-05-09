let nilai = prompt("Input nilai: ");

if (nilai >= 80 && nilai <= 100) {
  alert("Nilai anda A");
} else if (nilai >= 60 && nilai < 80) {
  alert("Nilai anda B");
} else if (nilai >= 40 && nilai < 60) {
  alert("Nilai anda C");
} else if (nilai >= 20 && nilai < 60) {
  alert("Nilai anda D");
} else {
  alert("Nilai anda E");
}

// <script>
//      function konversi(){
//         var nilai_a = Number(document.getElementById("a").value);
//         var nilai_huruf;

//         if((nilai_a>90)&&(nilai_a<=100))
//             nilai_huruf = 'A';
//         else if((nilai_a>80)&&(nilai_a<=90))
//             nilai_huruf = 'B+';
//         else if((nilai_a>70)&&(nilai_a<=80))
//             nilai_huruf = 'B';
//         else if((nilai_a>65)&&(nilai_a<=70))
//             nilai_huruf = 'C+';
//         else if((nilai_a>59)&&(nilai_a<=65))
//             nilai_huruf = 'C';
//         else if((nilai_a>49)&&(nilai_a<=59))
//             nilai_huruf = 'D';
//         else
//             nilai_huruf = 'E';
//         document.getElementById("c").value = nilai_huruf;
// }    
// </script>