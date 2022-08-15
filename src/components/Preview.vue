<script setup lang="ts">
import { useStore } from '../store'
import { toRefs } from 'vue'

const store = useStore()
const { title, author, theme, showLogo, showPattern } = toRefs(store)
</script>

<template>
  <div class="preview-wrapper">
    <div :class="`preview preview--${theme}`" v-auto-animate>
      <svg
        v-show="showPattern"
        class="preview__bg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="bg"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <g fill-rule="evenodd">
              <g fill="currentColor">
                <path
                  opacity=".5"
                  d="M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z"
                />
                <path d="M6 5V0H5v5H0v1h5v94h1V6h94V5H6z" />
              </g>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg)" />
      </svg>
      <img
        v-if="showLogo"
        class="preview__logo"
        :src="theme == 'light' ? '/logo.png' : '/logo_white.png'"
        alt="Kvass logo"
      />
      <h1 class="preview__title">{{ title }}</h1>
      <div v-if="author" class="preview__author">
        <img
          v-if="author.image"
          class="preview__author-image"
          :src="author.image"
          :alt="author.name"
        />
        <p v-if="author.name" class="preview__author-name">
          by {{ author.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.preview-wrapper {
  border-radius: var(--border-radius);
  border: 1px solid var(--color-primary-900);
  overflow: hidden;
}

.preview {
  position: relative;
  width: 630px;
  aspect-ratio: 2/1;
  padding: var(--spacing-lg);

  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  color: var(--color);

  &--dark {
    --color: var(--color-primary-50);
    background-color: var(--color-primary-900);
  }

  &--light {
    --color: var(--color-primary-900);
    background-color: white;
  }

  &__bg {
    position: absolute;
    inset: 0;
    opacity: 0.05;
  }

  &__logo {
    height: 1rem;
    margin-bottom: var(--spacing-lg);
  }

  &__title {
    letter-spacing: -1.5px;
    margin: 0;
  }

  &__author {
    margin-top: auto;

    &-name {
      margin: 0;
      font-size: 1.2rem;
    }
  }
}
</style>
