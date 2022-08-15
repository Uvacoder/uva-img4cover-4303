import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

interface State {
	title: string
	author: {
		name: string
		image: string
	}
	theme: 'light' | 'dark'
	showLogo: boolean
	showPattern: boolean
}

export const useStore: () => State = defineStore('main', () => {
	const title = ref<State['title']>('How to write better blog posts')
	const showLogo = ref<State['showLogo']>(true)
	const showPattern = ref<State['showPattern']>(true)
	const author = reactive<State['author']>({ 
		name: 'Ola Nordmann',
		image: ''
	})
	const theme = ref<State['theme']>('light')

	return { title, author, theme, showLogo, showPattern }
})