<script setup lang="ts">
import { Post } from "~/types/Blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Post>({
  endpoint: 'post',
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});

</script>

<template>
  <template v-if="data">
    <h1 class="title">{{ data.title }}</h1>
    <p class="published">{{ dateFormat(data.publishedAt ?? data.createdAt) }}</p>
    <img class="thumb" :src="data.thumb?.url">
    <div v-html="data.text"></div>
    <div>
      {{ data.tag?.name }}
    </div>
  </template>
</template>

<style lang="scss" scoped>
.thumb{
  @include pc{
    width: 100px;
  }
}
</style>