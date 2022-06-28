const submitBtn = document.querySelector('#btn')

submitBtn.addEventListener('click', function () {
  console.log(submitBtn)
  const lblNum = document.getElementsByClassName('inp-num').value
  const lblMsg = document.getElementsByClassName('inp-msg').value
  let num = lblNum
  let msg = lblMsg

  console.log(num)
  console.log(msg)
})
