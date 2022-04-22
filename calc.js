function AllClear() {
  window.location.reload();
}

function calc() {
  const a = document.getElementById("num1").value;
    num1 = parseInt(a);
  const b = document.getElementById("num2").value;
    num2 = parseInt(b);
  const c = document.getElementById("num3").value;
    num3 = parseInt(c);
  const d = document.getElementById("num4").value;
    num4 = parseInt(d);
  const e = document.getElementById("num5").value;
    num5 = parseInt(e);
  const total = num1 + num2 + num3 + num4 + num5;
    document.getElementById("result").innerHTML = total;

  if (total >= 100) {
    document.getElementById("level").innerHTML = "あなたは東大生です";
  } else {
    document.getElementById("level").innerHTML = "あなたはFランクです";
  }
}
