// 1) sumTo(n) — 1 dan n gacha yig‘indi
// Vazifa:
// sumTo(n) nomli function yozing. U n sonini qabul qiladi va 1 dan n gacha bo‘lgan sonlar
// yig‘indisini qaytarsin.
// Shartlar:
// ● n har doim butun son bo‘ladi.
// ● Agar n <= 0 bo‘lsa, 0 qaytaring.
// ● Array metodlardan foydalanmang (reduce va h.k. yo‘q).
// ● Natijani return qiling.
// Misollar:
// ● sumTo(5) → 15 (1+2+3+4+5)
// ● sumTo(1) → 1
// ● sumTo(0) → 0
// ● sumTo(-10) → 0
// 2) isPrime(n) — tub son tekshirish
// Vazifa:
// isPrime(n) function yozing. U n sonini qabul qiladi va n tub son bo‘lsa true, aks holda
// false qaytarsin.
// Shartlar:
// ● Tub son: 1 dan katta va faqat 1 va o‘ziga bo‘linadigan son.
// ● n butun son bo‘ladi.
// ● n <= 1 bo‘lsa, false qaytaring.
// ● Juda katta tekshiruv qilmaslik uchun tekshiruvni i*i <= n usulida qiling (ixtiyoriy, lekin
// tavsiya).
// Misollar:
// ● isPrime(2) → true
// ● isPrime(3) → true
// ● isPrime(4) → false
// ● isPrime(1) → false
// ● isPrime(17) → true
// 3) reverseStr(str) — stringni teskari qilish
// Vazifa:
// reverseStr(str) function yozing. U str (string) qabul qiladi va stringni teskari qilib
// qaytarsin.
// Shartlar:
// ● split(), reverse(), join() ishlatmang.
// ● Loop (for) yoki while ishlatib bajaring.
// ● Natijani return qiling.
// Misollar:
// ● reverseStr("salom") → "molas"
// ● reverseStr("abc") → "cba"
// ● reverseStr("") → ""
// 4) countVowels(str) — unlilar sonini topish
// Vazifa:
// countVowels(str) function yozing. U str qabul qiladi va string ichidagi unlilar (a, e, i,
// o, u) sonini qaytarsin.
// Shartlar:
// ● Katta-kichik harflarni bir xil hisoblang (A ham a).
// ● Unlilar faqat: a, e, i, o, u.
// ● return son qaytarsin.
// ● regex ishlatish mumkin, lekin ishlatmasangiz ham bo‘ladi.
// Misollar:
// ● countVowels("Salom") → 2 (a, o)
// ● countVowels("JAVA") → 2 (A, A)
// ● countVowels("bbb") → 0
// 5) findMax(arr) — eng katta sonni topish
// Vazifa:
// findMax(arr) function yozing. U arr (sonlardan iborat array) qabul qiladi va eng katta sonni
// qaytarsin.
// Shartlar:
// ● Math.max() ishlatmang.
// ● Array bo‘sh bo‘lsa null qaytaring.
// ● arr ichida kamida bitta son bo‘lishi mumkin.
// ● Loop bilan toping.
// Misollar:
// ● findMax([1, 5, 3]) → 5
// ● findMax([-10, -3, -7]) → -3
// ● findMax([]) → null
// 6) To‘liq CRUD masala (bitta data bilan)
// “Student Manager” (DOMsiz CRUD)
// Sizda students degan array bor. Har bir student quyidagi ko‘rinishda bo‘ladi:
// {
// id: 1,
// name: "Ali",
// age: 16,
// score: 85
// }
// Siz students bilan ishlaydigan 4 ta asosiy CRUD function yozishingiz kerak.
// 6.1) CREATE — createStudent(name, age, score)
// Vazifa:
// Yangi student qo‘shing.
// Shartlar:
// ● name bo‘sh bo‘lmasin (bo‘sh bo‘lsa "Invalid name" qaytaring).
// ● age 5 dan kichik bo‘lmasin (kichik bo‘lsa "Invalid age" qaytaring).
// ● score 0..100 oralig‘ida bo‘lsin (aks holda "Invalid score" qaytaring).
// ● id avtomatik berilsin:
// ○ array bo‘sh bo‘lsa id = 1
// ○ aks holda oxirgi element id + 1
// ● yangi student objectni arrayga qo‘shing va o‘sha objectni return qiling.
// 6.2) READ — getStudentById(id)
// Vazifa:
// id bo‘yicha studentni topib qaytaring.
// Shartlar:
// ● topilsa student objectni return qiling.
// ● topilmasa null qaytaring.
// 6.3) UPDATE — updateStudent(id, data)
// Vazifa:
// id bo‘yicha student toping va data ichidagi qiymatlar bilan yangilang.
// Shartlar:
// ● data ichida quyidagilar kelishi mumkin: name, age, score
// ● Faqat kelgan fieldlarni yangilang, qolganiga tegmang.
// ● Agar student topilmasa "Student not found" qaytaring.
// ● Yangilangan student objectni return qiling.
// ● Update paytida ham validatsiya bo‘lsin:
// ○ name bo‘sh bo‘lsa "Invalid name"
// ○ age 5 dan kichik bo‘lsa "Invalid age"
// ○ score 0..100 oralig‘ida bo‘lmasa "Invalid score"
// 6.4) DELETE — deleteStudent(id)
// Vazifa:
// id bo‘yicha studentni o‘chiring.
// Shartlar:
// ● agar topilsa, arraydan o‘chirib, o‘chirilgan studentni return qiling
// ● topilmasa null qaytaring
