<!-- <script setup>
import { RouterLink } from "vue-router";
import {computed} from 'vue'
const color=defineProps(['color'])
</script> -->
<template>
  <div class="Nav">
    <RouterLink :to="{name:'Home'}">
      <img src="https://static.igem.wiki/teams/4192/wiki/logo-2022igem.png" />
    </RouterLink>
    <div class="NavLink">
      <div class="NavItem">
        <div class="NavTitle">Project</div>
        <div class="NavList">
          <RouterLink :to="{name:'Description'}">Description</RouterLink>
          <RouterLink :to="{name:'Design'}">Design</RouterLink>
          <RouterLink :to="{name:'Implementation'}">Implementation</RouterLink>
          <RouterLink :to="{name:'Engineering'}">Engineering</RouterLink>
          <RouterLink :to="{name:'Safety'}">Safety</RouterLink>
          <RouterLink :to="{ name:'POC' }">POC</RouterLink>
          <RouterLink :to="{ name:'Award' }">Award</RouterLink>
        </div>
      </div>

      <div class="NavItem">
        <div class="NavTitle">Dry Lab</div>
        <div class="NavList">
          <RouterLink :to="{name:'Software'}">Software</RouterLink>
          <RouterLink :to="{name:'Modeling'}">Modeling</RouterLink>
        </div>
      </div>

      <div class="NavItem">
        <div class="NavTitle">Wet Lab</div>
        <div class="NavList">
          <RouterLink :to="{name:'Experiment'}">Experiment</RouterLink>
          <RouterLink :to="{name:'Notebook'}">Notebook</RouterLink>
          <RouterLink :to="{name:'Result'}">Result</RouterLink>
        </div>
      </div>
      <div class="NavItem">
        <div class="NavTitle">Human practice</div>
        <div class="NavList">
          <RouterLink :to="{name:'IHP'}">Integrated human practice</RouterLink>
          <RouterLink :to="{name:'Collaborations'}">Collaborations</RouterLink>
          <RouterLink :to="{name:'Partnership'}">Partnership</RouterLink>
          <RouterLink :to="{name:'CandE'}">Communication <br>& Education</RouterLink>
        </div>
      </div>

      <div class="NavItem">
        <div class="NavTitle">Parts</div>
        <div class="NavList">
          <RouterLink :to="{name:'Contribution'}">Contribution</RouterLink>
          <RouterLink :to="{name:'Parts'}">Parts</RouterLink>
        </div>
      </div>

      <div class="NavItem">
        <div class="NavTitle">Team</div>
        <div class="NavList">
          <RouterLink :to="{name:'Attribution'}">Attribution</RouterLink>
          <RouterLink :to="{name:'Team'}">Members</RouterLink>
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
:root {
  --total-height: 10vh;
}
.Nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 100;
  font-family: 'proxima-nova-bold';
  box-shadow: -1px 1px 3px 1px #000000aa;
}
.NavLink {
  width:70vw;
}
.NavItem {
  width:10vw;
  display: inline-block;
  position: relative;
}
.NavTitle {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.NavList {
  display: none;
  position: absolute;
  width:100%;
  top:10vh;
  background-color: white;
  transform: translateX(0%);
  box-shadow: -1px 1px 3px 1px #000000aa;
}
.NavItem:hover .NavList {
  display: block;
}
img {
  margin:0 1vw;
  height: 100%;
  display: inline-block;
}
ul {
  display: flex;
  flex-direction: row;
  flex-flow: row-reverse;
}
li {
  list-style-type: none;
}
.NavList > a {
  display: flex;
  height: 10vh;
  text-align: center;
  color:black;
  text-decoration: none;
  justify-content: center;
  align-items:center;
}
.NavList a:hover{
  background-color:v-bind('color.color');
  color:white;
}
</style>
<script>
export default {
    name:'NavBar'
}
</script>