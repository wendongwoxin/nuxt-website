<template>
  <div class="blog_area section-padding">
    <div class="container">
      <div class="row">
        <!-- blog -->
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item">
              <div class="blog_item_img">
                <img
                  :src="currentBlog.imageUrl"
                  alt=""
                  class="card-img rounded-0"
                />
                <a class="blog_item_date">
                  <h3>{{ currentBlog.day }}</h3>
                  <p>{{ currentBlog.month }}</p>
                </a>
              </div>
              <div class="blog_details">
                <a class="d-inline-block">
                  <h2>{{ currentBlog.blogName }}</h2>
                </a>
                <p>{{ currentBlog.description }}</p>
                <ul class="blog-info-link">
                  <li class="hello">
                    <a href="javascript(0)">
                      <i class="fa fa-user"></i>
                      {{ currentBlog.keyword }}
                    </a>
                  </li>
                  <li>
                    <a href="javascript(0)">
                      <i class="fa fa-comments"> </i>
                      {{ currentBlog.commentCount }} Comments
                    </a>
                  </li>
                </ul>
                <p
                  class="content"
                  v-for="(item, index) in currentBlog.list"
                  :key="index"
                >
                  {{ item }}
                </p>
                <p class="line"></p>
                <div class="page">
                  <a
                    class="prev"
                    :href="curIndex - 1 < 0 ? '' : blogs[curIndex - 1].path"
                  >
                    <p>{{ curIndex - 1 < 0 ? "" : blogs[curIndex - 1].blogName }}</p>
                  </a>
                  <a
                    class="next"
                    :href="
                      curIndex + 1 < blogs.length ? blogs[curIndex + 1].path : ''
                    "
                  >
                    <p>
                      {{
                        curIndex + 1 < blogs.length
                          ? blogs[curIndex + 1].blogName
                          : ""
                      }}
                    </p>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- search content -->
        <SearchContent />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const curIndex = +route.query.index;
const blogs = ref([]);
const currentBlog = reactive({
  imageUrl: "",
  blogDetail: "",
  day: "",
  month: "",
  blogName: "",
  description: "",
  keyword: "",
  commentCount: "",
  list: [],
});
const getcurrentBlog = async (name: String) => {
  try {
    await useFetch(() => `./${name}.json`, {
      onResponse({ request, response, options }) {
        // Process the response data
        const data = response._data;
        currentBlog.list = data.content;
        return response._data;
      },
    });
  } catch (e) {
    console.error(e);
  }
};

const getBlogs = async () => {
  try {
    await useFetch(() => `./blogs.json`, {
      onResponse({ request, response, options }) {
        // Process the response data
        const data = response._data;
        blogs.value = data.list;
        blogs.value.map((item, index) => {
          {
            item.imageUrl = new URL(
              `../assets/img/blog/${item.image}`,
              import.meta.url
            ).href;
            item.path = `blogDetail?index=${index}`;
          }
        });
        const {
          imageUrl,
          blogDetail,
          day,
          month,
          blogName,
          description,
          keyword,
          commentCount,
        } = blogs.value[curIndex];
        currentBlog.imageUrl = imageUrl;
        currentBlog.blogDetail = blogDetail;
        currentBlog.day = day;
        currentBlog.month = month;
        currentBlog.blogName = blogName;
        currentBlog.description = description;
        currentBlog.keyword = keyword;
        currentBlog.commentCount = commentCount;
        getcurrentBlog(blogDetail);
        return response._data;
      },
    });
  } catch (e) {
    console.error(e);
  }
};
getBlogs();
</script>
