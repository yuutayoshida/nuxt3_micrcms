<script setup lang="ts">
import { Post } from "~/types/Blog";
const { data } = await useMicroCMSGetList<Post>({
  endpoint: 'post',
});
</script>

<template>
  <div>
    <h1>TOP</h1>
    <section>
      <!-- 一覧表示 -->
      <article class="article" v-for="blog in data?.contents" :key="blog.id">
        <p class="published">{{ dateFormat(blog.publishedAt ?? blog.createdAt) }}</p>
        <img class="article_thumb" :src="blog.thumb?.url" alt="">
        <nuxt-link :to="`/${blog.id}`">
          <h2 class="article_title">{{ blog.title }}</h2>
        </nuxt-link>
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.article_thumb{
  @include pc{
    width: 100px;
  }
}
</style>