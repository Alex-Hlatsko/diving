const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
const social = document.getElementById('social');
menuToggle.onclick  =  function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    social.classList.toggle('active')
}