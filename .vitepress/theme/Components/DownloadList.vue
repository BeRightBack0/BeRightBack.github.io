<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const items = [

{
    name: "XybLauncherCLI",
    gameVersion: "0.5",
    platforms: "Windows",
    published: "25.08.2024",
    downloads: "0",
    downloadUrl: "https://www.dropbox.com/scl/fi/m996mhjy77qn2t3bfxq6l/Cobalt.dll?rlkey=6araxm5ngyznp4fmvxqtgm9a7&st=2kawl9mp&dl=1" // Add this field for each item
  },
  {
    name: "XybLauncherCLI",
    gameVersion: "0.4",
    platforms: "Windows",
    published: "25.08.2024",
    downloads: "0",
    downloadUrl: "https://www.dropbox.com/scl/fi/m996mhjy77qn2t3bfxq6l/Cobalt.dll?rlkey=6araxm5ngyznp4fmvxqtgm9a7&st=2kawl9mp&dl=1" // Add this field for each item
  },
  {
    name: "XybLauncherCLI",
    gameVersion: "0.3",
    platforms: "Windows",
    published: "25.08.2024",
    downloads: "0",
    downloadUrl: "https://www.dropbox.com/scl/fi/m996mhjy77qn2t3bfxq6l/Cobalt.dll?rlkey=6araxm5ngyznp4fmvxqtgm9a7&st=2kawl9mp&dl=1" // Add this field for each item
  },


]
const downloadFile = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

</script>


<template>
  <div class="download-list">
    <div class="header">
      <span class="name">Name</span>
      <span class="platform">Platform</span>
      <span class="published">Published</span>
    </div>
    <div v-for="item in items" :key="item.name" class="item">
      <div class="name-section">
        <div class="icon">{{ item.name[0].toUpperCase() }}</div>
        <div class="name-info">
          <span class="name">{{ item.name }}</span>
          <span class="version">{{ item.gameVersion }}</span>
        </div>
      </div>
      <span class="platform">{{ item.platforms }}</span>
      <span class="published">{{ item.published }}</span>
      <span class="downloads">{{ item.downloads }}</span>
      <div class="actions">
       <button @click="downloadFile(item.downloadUrl, item.name + '.zip')" class="download" aria-label="Download">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
        <button class="more" aria-label="More options">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-list {
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  padding: 1rem;
  font-family: sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  color: #888;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2a2a2a;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
}

.name-section {
  display: flex;
  align-items: center;
}

.icon {
  width: 2rem;
  height: 2rem;
  background-color: #d97706;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
}

.name-info {
  display: flex;
  flex-direction: column;
}

.name {
  color: white;
  font-weight: 600;
}

.version {
  color: #888;
  font-size: 0.875rem;
}

.platforms, .published, .downloads {
  color: #888;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.download, .more {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.download svg {
  color: #22c55e;
}

.more svg {
  color: #888;
}

.download-list .header {
  display: flex;
  justify-content: space-between; /* Distribute space evenly */
  gap: 20px; /* Set a fixed gap between the spans */
}

.name {
  flex: 1.45; /* Adjust space allocation as needed */
}

.platform {
  flex: 3.7;
  text-align: center; /* Center text if needed */
}

.published {
  flex: 1;
  text-align: right; /* Align text to the right if needed */
}

</style>