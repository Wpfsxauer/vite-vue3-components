<template>
	<CommonInput
		:copyWriting="copyWriting"
		:hasErr="hasErr"
		:staticOptions="staticOptions"
		@handleBlur="handleBlur"
	></CommonInput>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import CommonInput from '../CommonInput/index.vue'

export default defineComponent({
	name: 'BaseInput',

	props: {
		value: {
			type: Object,
			default: () => ({}),
		},

		title: {
			type: String,
			default: () => '标题',
		},

		type: {
			type: String,
			default: () => 'text',
		},

		readOnly: {
			type: Boolean,
			default: () => false,
		},

		placeholder: {
			type: String,
			default: () => '请输入',
		},

		marginBottom: {
			type: Boolean,
			default: () => false,
		},

		isShowBorder: {
			type: Boolean,
			default: () => true,
		},

		iconUrl: {
			type: String,
			default: () => '',
		},

		isShowIcon: {
			type: Boolean,
			default: () => true,
		},
	},

	components: {
		CommonInput,
	},

	setup: (props) => {
		const copyWriting = computed(() => {
			return props.value.value
		})

		const hasErr = computed(() => {
			return !props.value.state
		})

		const staticOptions = computed(() => {
			return {
				title: props.title,
				type: props.type,
				readOnly: props.readOnly,
				placeholder: props.placeholder,
				marginBottom: props.marginBottom,
				isShowBorder: props.isShowBorder,
				iconUrl: props.iconUrl,
				isShowIcon: props.isShowIcon,
			}
		})

		const handleBlur = (item: string) => {
			props.value.value = item.trim()
			props.value.state = true
		}

		return { copyWriting, hasErr, handleBlur, staticOptions }
	},
})
</script>