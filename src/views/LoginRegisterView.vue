<template>
<div>
    <div class="row" style="width:50%; border-top:1px solid grey;border-left:1px solid grey;border-right:1px solid grey;background-color:beige; height:40px;margin-left: auto; margin-right: auto;">
        <div id="tabregistro" class="col-6" style="background-color: white;" @click="cambiaTab">Registro</div>
        <div id="tablogin" class="col-6" @click="cambiaTab">Login</div>
    </div>
 <div id="divregistro">   
    <div id="cuerpo" class=" w-50 p-4" style="margin-left: auto; margin-right: auto; border-left: 1px solid grey ;border-right: 1px solid grey ; border-bottom: 1px solid grey ;">
        
  <div class="row mt-4">
    <div class="col-3"><label for="exampleDropdownFormEmail2">Email address</label></div>
    <div class="col-9"><input v-model="email" type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"></div>
  </div>


  <div class="row mt-4">
    <div class="col-3"><label for="exampleDropdownFormPassword2">Password</label></div>
    <div class="col-9"><input v-model="password" type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></div>
  </div>
  <div class="row mt-4">
          <div class="col-3"><label for="exampleDropdownFormPassword2">Confirma Password</label></div>
          <div class="col-9"><input v-model="password2" type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></div>
        </div>

  <div class="row mt-3">
    
    <div class="col-9"><label class="" for="dropdownCheck2">
      Remember me
    </label> <input type="checkbox" name="remember" id="remember"></div>
    
  </div>

    <div class=" col-12 mt-3">
        <button class="btn btn-primary w-50" style="margin-left:auto; margin-right: auto;" @click="login">Sign in</button>
    </div>

    </div>
</div>

<div id="divlogin">
  <div id="cuerpo2" class=" w-50 p-4" style="margin-left: auto; margin-right: auto; border-left: 1px solid grey ;border-right: 1px solid grey ; border-bottom: 1px solid grey ;">
        
        <div class="row mt-4">
          <div class="col-3"><label for="exampleDropdownFormEmail2">Email address</label></div>
          <div class="col-9"><input v-model="email" type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"></div>
        </div>
      
      
        <div class="row mt-4">
          <div class="col-3"><label for="exampleDropdownFormPassword2">Password</label></div>
          <div class="col-9"><input v-model="password" type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></div>
        </div>
     
      
        <div class="row mt-3">
          
          <div class="col-9"><label class="" for="dropdownCheck2">
            Remember me
          </label> <input type="checkbox" name="remember" id="remember"></div>
          
        </div>
      
          <div class=" col-12 mt-3">
              <button class="btn btn-primary w-50" style="margin-left:auto; margin-right: auto;" @click="login">Log in</button>
          </div>
      
          </div>

</div>
{{ email }}
</div>
</template>

<script lang="ts" setup>
import {principal} from '../store/principal';
import {ref} from 'vue'

const password = ref('');
const password2 = ref('');
const email = ref('');
const store = principal();


const login=function(){

  console.log(email.value)

  const options = {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  body: JSON.stringify({'email':email.value,'password':password.value})
};

    fetch(process.env.VUE_APP_ROOT_API+"users/login", options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      
      store.guardatoken(data.data);
      console.log(store.token,"token");
    })

      .catch(err => {
        console.error("ERROR: ", err.message)
      })

  
   
  }
  
  const registrar=function(){

    const options = {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  body: JSON.stringify({'email':email.value,'password':password.value})
};
    fetch(process.env.VUE_APP_ROOT_API+"/register", options)
      .then(response => {
        if(response.data == 'ok'){
            alert("usuario creado");
        }
        else{
            alert("usuarion no creado");
            }
      })

      .catch(err => {
        console.error("ERROR: ", err.message)
      })
      console.log(store.token);
  }
  
  const cambiaTab= function(e:Event){

    console.log(e);
    let targetId = e.currentTarget.id;
    
    if(targetId == "tabregistro" ){
        document.getElementById("tabregistro").style.background = 'white';
        document.getElementById("tablogin").style.background = 'transparent';
        document.getElementById("divregistro").style.display = 'block';
        document.getElementById("divlogin").style.display = 'none';
    }
    else if(targetId == "tablogin" ){
     document.getElementById("tablogin").style.background = 'white';
     document.getElementById("tabregistro").style.background = 'transparent';
      document.getElementById("divregistro").style.display = 'none';
        document.getElementById("divlogin").style.display = 'block';
    }
  }

</script>
