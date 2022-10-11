<template>
  <div class="col-lg-4">
    <div class="blog_right_sidebar">
      <!-- search aside -->
      <aside class="single_sidebar_widget search_widget">
        <form action="#">
          <div class="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search Keyword"
                v-model="keyword"
              />
              <div class="input-group-append">
                <button class="btn">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
            type="submit"
          >
            Search
          </button>
        </form>
      </aside>
      <!-- category -->
      <aside class="single_sidebar_widget post_category_widget" v-if="categoryList.length > 0">
        <h4 class="widget_title">Category</h4>
        <ul class="list cat-list">
          <li v-for="item in categoryList" :key="item.value">
            <a href="#" class="d-flex">
              <p>{{ item.name }}</p>
              <p>({{ item.count }})</p>
            </a>
          </li>
        </ul>
      </aside>
      <!-- Recent Post -->
      <aside class="single_sidebar_widget popular_post_widget" v-if="postItems.length > 0">
        <h3 class="widget_title">Recent Post</h3>
        <div
          class="media post_item"
          v-for="item in postItems"
          :key="item.value"
        >
          <img :src="item.image" alt="" />
          <div class="media-body">
            <a href="#">
              <h3>{{ item.content }}</h3>
            </a>
            <p>{{ item.date }}</p>
          </div>
        </div>
      </aside>
      <!-- Tag Clouds -->
      <aside class="single_sidebar_widget tag_cloud_widget" v-if="clouds.length > 0">
        <h4 class="widget_title">Tag Clouds</h4>
        <ul class="list">
          <li v-for="item in clouds" :key="item">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </aside>
      <!-- add sth what do you want -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const keyword = ref("");
const categoryList = ref([]);
const postItems = ref([]);
const clouds = ref([]);
</script>
