

---
---

# 📥 Download Page

Welcome to the download page! Below are the available versions of the XybLauncher. Choose the build that suits your needs.

<DownloadList />


<script setup>
import DownloadList from './.vitepress/theme/Components/DownloadList.vue'

const downloadItems = [
  {
    name: "Test",
    gameVersion: "test",
    platforms: "tess",
    published: "pk",
    downloads: "ok"
  },
  {
    name: "Test",
    gameVersion: "test",
    platforms: "tess",
    published: "pk",
    downloads: "ok"
  }
]
</script>

<template>
  <DownloadList :items="downloadItems" />
</template>
