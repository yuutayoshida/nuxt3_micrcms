<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script>
import Header from "./comportnents/Header";
import Footer from "./comportnents/Footer";
export default {
  components: {Footer, Header}
}
</script>