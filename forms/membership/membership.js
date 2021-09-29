let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let userName = ""

btnEnterMember.onclick=function(){
  let userName = inptName.value
  if (members.includes(userName) == true) {
  lblMessageMember.value = userName + ", you are already a member"
  }
else {
  members.push(userName)
  lblMessageMember.value = userName + ", you have been added to the membership roster."
  }
  }
