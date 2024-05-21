// [0..1)
console.log(Math.random());

// [0..0.5)
console.log("skaicius");
// [0.5..1)
console.log("herbas");

if (Math.random() < 0.5) {
  console.log("skaicius");
} else {
  console.log("herbas");
}

const week = ["Pirm", "Antr", "Trec", "Ketv", "Penkt", "Sest", "Sekm"];

function atsitiktinisSkaicius() {
  return Math.floor(Math.random() * 10);
}
console.log(atsitiktinisSkaicius());

