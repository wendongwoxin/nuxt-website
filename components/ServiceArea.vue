<template>
  <div class="service_area" id="service">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center mb-65">
            <span>Service Provided</span>
            <h3>
              Build different websites<br />
              &amp; digital projects
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-4" v-for="item in projects" :key="item.key">
          <div class="single_service text-center">
            <div class="icon">
              <img :src="item.src" alt="" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const projects = [
  {
    key: "web",
    title: "Web Build",
    content:
      "Build different website by frontend knowledge, Mainly based on vue.",
    src: new URL('../assets/img/2.svg', import.meta.url).href
  },
  {
    key: "mobile",
    title: "Mobile App",
    content: "Flutter, React Native, WeChat Mini Program",
    src: new URL('../assets/img/3.svg', import.meta.url).href
  },
  {
    key: "service",
    title: "Different Service",
    content: "Implement different services through nodejs",
    src: new URL('../assets/img/1.svg', import.meta.url).href
  },
];
</script>
