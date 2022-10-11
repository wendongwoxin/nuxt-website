<template>
  <div class="copy-right_text">
    <div class="container">
      <div class="footer_border"></div>
      <div class="row">
        <div class="col-xl-12">
          <p class="copy_right text-center">
            Copyright ©
            {{ year }}
            All rights reserved | 
            <a href="#" target="_blank">Wendongwoxin</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>
