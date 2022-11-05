<template>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WritingPreviewCard',
    props: {
        title: String,
        dateWritten: String,
        previewImg: String,
        description: String
    }
})
</script>
