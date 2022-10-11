<template>
  <div class="about_me">
    <div class="about_large_title d-none d-lg-block">About</div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-md-6">
          <div class="about_e_details">
            <h3>About me</h3>
            <p>
              Jinwen Wu, graduated from Hefei University of Technology with a
              major in Computer and Science, now a front-end Developer.
              <br />
              Have solid foundation in JavaScript, proficient in the use of the
              <a
                style="color: green"
                href="https://vuejs.org/"
                target="'_blank'"
                >Vue</a
              >
              series technology stack, and completed more than 20 project
              development from zero to one.
              <br />
              Have the design and development capabilities of general
              components, complete the development of more than n components.
              <br />
              Able to develop independently or collaboratively, with open source
              experience and leading experience.
              <br />
              Have experience in business system architecture design and R&D,
              and have completed more than n system business architecture design
              and development.
              <br />
              Have a strong ability to find and solve problems, have done a lot
              of research needs, and have the enthusiasm and impulse to learn
              new technologies
            </p>
            <div class="download_cv">
              <a class="boxed-btn3" href="#">Download CV</a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6">
          <div class="about_img">
            <div class="color_pattern d-none d-lg-block">
              <img src="~/assets/img/xcolor_grid.png" alt="" />
            </div>
            <div class="my_Pic">
              <div id="wordcloud"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import "echarts-wordcloud";
onMounted(() => {
  let chart = echarts.init(document.getElementById("wordcloud"));
  chart.setOption({
    series: [
      {
        type: "wordCloud",
        shape: "circle",
        left: "center",
        top: "center",
        width: "100%",
        height: "100%",
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [-90, 90],
        rotationStep: 30,
        gridSize: 8,
        drawOutOfBound: false,
        layoutAnimation: true,
        textStyle: {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          // Color can be a callback function or a color string
          color: function () {
            // Random color
            return (
              "rgb(" +
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
              ].join(",") +
              ")"
            );
          },
        },
        emphasis: {
          focus: "self",

          textStyle: {
            shadowBlur: 10,
            shadowColor: "#333",
          },
        },
        data: [
          { name: "JavaScript", value: 6 },
          { name: "TypeScript", value: 4 },
          { name: "CSS", value: 3 },
          { name: "HTML", value: 3 },
          { name: "Node", value: 5 },
          { name: "Webpack", value: 3.5 },
          { name: "Vue", value: 8 },
          { name: "React", value: 1 },
          { name: "Angular", value: 2 },
          { name: "Nuxt.js", value: 2 },
          { name: "Next.js", value: 2 },
          { name: "vite", value: 3 },
          { name: "Flutter", value: 2 },
          { name: "React Native", value: 2 },
        ],
      },
    ],
  });
});
</script>
