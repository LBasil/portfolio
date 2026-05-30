<script setup lang="ts">
import type { Project } from '@/types'
import { useRouter } from 'vue-router'

const props = defineProps<{ project: Project }>()
const router = useRouter()

function openBlog() {
  if (props.project.blogUrl) {
    router.push(props.project.blogUrl)
  }
}
</script>

<template>
  <div class="col-lg-4 col-md-6">
    <div class="card project-card shadow-sm h-100">
      <img v-if="project.image" :src="project.image" class="card-img-top" :alt="project.title">
      <div v-else class="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white">
        <i class="fas fa-code fa-3x"></i>
      </div>

      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text flex-grow-1">{{ project.description }}</p>

        <div class="mb-3">
          <span v-for="badge in project.badges" :key="badge" class="badge bg-secondary me-1">
            {{ badge }}
          </span>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <a v-if="project.url" :href="project.url" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Voir le projet
          </a>
          <button v-if="project.hasBlog" class="btn btn-outline-secondary btn-sm" @click="openBlog">
            Voir le blog
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
