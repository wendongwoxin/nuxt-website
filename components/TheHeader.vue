<template>
  <header>
    <div class="header-area">
      <div class="main-header-area" :class="sticky ? 'sticky' : ''">
        <div class="container-fluid">
          <div class="row align-items-center">
            <!-- logo -->
            <div class="col-xl-3 col-lg-2">
              <div class="logo">
                <a href="#">
                  <img src="~/assets/img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <!-- menu -->
            <div class="col-xl-6 col-lg-7">
              <div class="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li v-for="item in menus" :key="item.value">
                      <a class="active" :href="item.link">{{ item.value }}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- button -->
            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
              <div class="Appointment">
                <div class="book_btn d-none d-lg-block">
                  <a href="#contact">Contact Me</a>
                </div>
              </div>
            </div>
            <!-- mobile-button -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none">
                <div class="slicknav_menu">
                  <a
                    href="#menu"
                    @click="showMenu = !showMenu"
                    aria-haspopup="true"
                    role="button"
                    tabindex="0"
                    class="slicknav_btn slicknav_collapsed"
                    style="outline: none"
                    ><span class="slicknav_menutxt">MENU</span
                    ><span class="slicknav_icon"
                      ><span class="slicknav_icon-bar"></span
                      ><span class="slicknav_icon-bar"></span
                      ><span class="slicknav_icon-bar"></span></span
                  ></a>
                  <ul
                    class="slicknav_nav slicknav_hidden"
                    aria-hidden="true"
                    role="menu"
                    v-show="showMenu"
                  >
                    <li v-for="item in menus" :key="item.value">
                      <a
                        class="active"
                        :href="item.link"
                        role="menuitem"
                        tabindex="-1"
                        >{{ item.value }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="back-to-top" v-show="sticky">
    <a href="#">
      <i class="fa fa-sort-asc" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script lang="ts" setup>
const showMenu = ref(false);
const sticky = ref(false);
interface MenuItem {
  value: string;
  link: string;
}
const scroll = () => {
  let scrollTop =
    document!.documentElement.scrollTop || document!.body.scrollTop;
  sticky.value = scrollTop > 0;
};
onMounted(() => {
  globalThis.addEventListener("scroll", scroll);
});

const menus: MenuItem[] = [
  {
    value: "Home",
    link: "/#",
  },
  {
    value: "About",
    link: "/#about",
  },
  {
    value: "Services",
    link: "/#service",
  },
  {
    value: "Blog",
    link: "/blog",
  },
  {
    value: "Portfolios",
    link: "/#portfolios",
  },
  {
    value: "Contact",
    link: "/#contact",
  },
];
</script>
