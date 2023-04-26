<template>
<div class="juzhong">
<div class="NavItem" data-v-89b8c4f1="">
    <div class="NavTitle" data-v-89b8c4f1="">Project</div>
    <div class="NavList" data-v-89b8c4f1="">
      <a class="" data-v-89b8c4f1="">Description</a
      ><a class="" data-v-89b8c4f1="">Design</a
      ><a class="" data-v-89b8c4f1="">Implementation</a
      ><a class="" data-v-89b8c4f1="">Engineering</a
      ><a class="" data-v-89b8c4f1="">Safety</a
      ><a class="" data-v-89b8c4f1="">POC</a
      ><a class="" data-v-89b8c4f1="">Award</a>
    </div>
  </div>
    <div class="NavItem" data-v-89b8c4f1="">
      <div class="NavTitle" data-v-89b8c4f1="">Dry Lab</div>
      <div class="NavList" data-v-89b8c4f1="">
        <a class="" data-v-89b8c4f1="">Software</a
        ><a class="" data-v-89b8c4f1="">Modeling</a>
      </div>
    </div>
    <!-- <div class="NavItem" data-v-89b8c4f1="">
      <div class="NavTitle" data-v-89b8c4f1="">Dry Lab</div>
      <div class="NavList" data-v-89b8c4f1="">
        <a
          aria-current="page"
          href="/cau-china/software"
          class="router-link-active router-link-exact-active"
          data-v-89b8c4f1=""
          >Software</a
        ><a href="/cau-china/model" class="" data-v-89b8c4f1="">Modeling</a>
      </div>
    </div> -->
    <div class="NavItem" data-v-89b8c4f1="">
      <div class="NavTitle" data-v-89b8c4f1="">Wet Lab</div>
      <div class="NavList" data-v-89b8c4f1="">
        <a href="/cau-china/experiment" class="" data-v-89b8c4f1=""
          >Experiment</a
        ><a href="/cau-china/notebook" class="" data-v-89b8c4f1="">Notebook</a
        ><a href="/cau-china/result" class="" data-v-89b8c4f1="">Result</a>
      </div>
    </div>
    <div class="NavItem" data-v-89b8c4f1="">
      <div class="NavTitle" data-v-89b8c4f1="">Human practice</div>
      <div class="NavList" data-v-89b8c4f1="">
        <a href="/cau-china/human-practices" class="" data-v-89b8c4f1=""
          >Integrated human practice</a
        ><a href="/cau-china/collaborations" class="" data-v-89b8c4f1=""
          >Collaborations</a
        ><a href="/cau-china/partnership" class="" data-v-89b8c4f1=""
          >Partnership</a
        ><a href="/cau-china/communication" class="" data-v-89b8c4f1=""
          >Communication <br data-v-89b8c4f1="" />&amp; Education</a
        >
      </div>
    </div>
    <div class="NavItem" data-v-89b8c4f1="">
      <div class="NavTitle" data-v-89b8c4f1="">Parts</div>
      <div class="NavList" data-v-89b8c4f1="">
        <a href="/cau-china/contribution" class="" data-v-89b8c4f1=""
          >Contribution</a
        ><a href="/cau-china/parts" class="" data-v-89b8c4f1="">Parts</a>
      </div>
    </div>
    <div class="NavItem" data-v-89b8c4f1="">
      <div class="NavTitle" data-v-89b8c4f1="">Team</div>
      <div class="NavList" data-v-89b8c4f1="">
        <a href="/cau-china/attributions" class="" data-v-89b8c4f1=""
          >Attribution</a
        ><a href="/cau-china/team" class="" data-v-89b8c4f1="">Members</a>
      </div>
    </div></div>
  </template>
<style scoped>
.juzhong{
  margin: 0 auto;
  text-align: center;
  position: fixed;
  background-color: pink;
  justify-content: center;
  align-items:center; 
}
/* .wapper{
  height: 10vh;
  width: 100%;
  position: fixed;
  background-color: pink;
  justify-content: center;
  align-items:center; 
} */
a{
  
  display: flex;
  height: 10vh;
  text-align: center;
   color:black;
  text-decoration: none;
  justify-content: center;
  align-items:center; 
}
.NavItem{
  float: left;
  width: 13vw;
  height: 10vh;
  margin: 0 auto;
  background-color:pink;
}
.NavList{
  display:none

}
.NavItem:hover .NavList{
  display: block;
  background-color:pink;
}
.NavTitle{
  line-height: 10vh;
}
</style>
<script>
export default {
    name:'Nav'
}
</script>
  