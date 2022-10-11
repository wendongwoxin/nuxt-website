<template>
  <div class="blog_area section-padding">
    <div class="container">
      <div class="row">
        <!-- blogs -->
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item" v-for="item in blogs" :key="item.id">
              <div class="blog_item_img">
                <img :src="item.img" alt="" class="card-img rounded-0" />
                <a :href="item.blogDetail" class="blog_item_date">
                  <h3>{{ item.date }}</h3>
                  <p>{{ item.month }}</p>
                </a>
              </div>
              <div class="blog_details">
                <a class="d-inline-block" href="item.blogDetail">
                  <h2>{{ item.title }}</h2>
                </a>
                <p>{{ item.description }}</p>
                <ul class="blog-info-link">
                  <li>
                    <a href="javascript(0)">
                      <i class="fa fa-user">{{ item.type }}</i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript(0)">
                      <i class="fa fa-comments">
                        {{ item.comments }} Comments</i
                      >
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <n-pagination v-model:page="page" :page-count="total" />
          </div>
        </div>
        <!-- search content -->
        <SearchContent />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NPagination } from "naive-ui";
const blogs = ref([]);
const page = ref(5);
const total = ref(0)
</script>
