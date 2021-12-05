<!--
 * @Date: 2021-12-05 13:52:34
 * @LastEditors: chuhongguang
-->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item"><nuxt-link class="nav-link active" to="/">Home</nuxt-link></li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor"><i class="ion-compose"></i>&nbsp;New <Article></Article> </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings"><i class="ion-gear-a"></i>&nbsp;Settings </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/123">
              <img class="user-pic" src="https://api.realworld.io/images/smiley-cyrus.jpeg" />
              wuyanfeiying
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 顶部导航栏 -->
    <!-- 子路由 -->
    <nuxt-child />
    <!-- 子路由 -->
    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution"> An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT. </span>
      </div>
    </footer>
    <!-- 底部 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
};
</script>

<style></style>
