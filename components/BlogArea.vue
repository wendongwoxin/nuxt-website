<template>
  <div class="blog_area section-padding">
    <div class="container">
      <div class="row">
        <!-- blogs -->
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item" v-for="item in blogs" :key="item.id">
              <div class="blog_item_img">
                <img :src="item.imageUrl" alt="" class="card-img rounded-0" />
                <a :href="item.blogDetail" class="blog_item_date">
                  <h3>{{ item.day }}</h3>
                  <p>{{ item.month }}</p>
                </a>
              </div>
              <div class="blog_details">
                <a class="d-inline-block" href="item.blogDetail">
                  <h2>{{ item.blogName }}</h2>
                </a>
                <p>{{ item.description }}</p>
                <ul class="blog-info-link">
                  <li class="hello">
                    <a href="javascript(0)">
                      <i class="fa fa-user"></i>
                      {{ item.keyword }}
                    </a>
                  </li>
                  <li>
                    <a href="javascript(0)">
                      <i class="fa fa-comments"> </i>
                      {{ item.commentCount }} Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <n-pagination
              v-model:page="page"
              :item-count="total"
              :page-size="5"
            />
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
const page = ref(1);
const total = ref(0);
const getBlogs = async () => {
  try {
    await useFetch(() => `./blogs.json?pageSize=5&currentPage=${page.value}`, {
      onResponse({ request, response, options }) {
        // Process the response data
        const data = response._data;
        blogs.value = data.list;
        total.value = data.total;
        blogs.value.map((item) => {
          {
            item.imageUrl = new URL(
              `../assets/img/blog/${item.image}`,
              import.meta.url
            ).href;
          }
        });
        return response._data;
      },
    });
  } catch (e) {
    console.error(e);
  }
};

getBlogs();
</script>
